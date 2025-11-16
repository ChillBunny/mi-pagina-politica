// src/hooks/useActiveSection.ts
import { useEffect, useState, useRef } from "react";

type Options = {
  root?: Element | null;
  rootMargin?: string;   // e.g. "-10% 0px -40% 0px"
  threshold?: number | number[]; // e.g. 0.5
};

export default function useActiveSection(sectionIds: string[], options?: Options) {
  const [active, setActive] = useState<string>(sectionIds[0] || "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    // Clean previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }

    const root = options?.root ?? null;
    const rootMargin = options?.rootMargin ?? "-40% 0px -40% 0px"; // sensible default: center area
    const threshold = options?.threshold ?? 0.5;

    const visibleMap = new Map<string, number>(); // id -> intersectionRatio

    const observer = new IntersectionObserver(
      (entries) => {
        // update map with latest ratios
        entries.forEach((entry) => {
          const id = (entry.target as HTMLElement).id;
          visibleMap.set(id, entry.intersectionRatio);
        });

        // choose the entry with largest intersectionRatio among observed ids
        let bestId = active;
        let bestRatio = 0;
        for (const id of sectionIds) {
          const ratio = visibleMap.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (bestId && bestId !== active) {
          setActive(bestId);
        }
      },
      { root, rootMargin, threshold }
    );

    // Observe existing sections (safe: check existence)
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    observerRef.current = observer;

    // initial scan: in case some were already in view
    // (gives immediate feedback)
    const initial = sectionIds.find((id) => {
      const el = document.getElementById(id);
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // center zone check (same logic as rootMargin defaults)
      return rect.top < vh * 0.6 && rect.bottom > vh * 0.4;
    });
    if (initial) setActive(initial);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      visibleMap.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(sectionIds), options?.rootMargin, options?.threshold]);

  return active;
}
