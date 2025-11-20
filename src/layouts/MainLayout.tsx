import { type ReactNode, useState } from "react";

// componentes internos
import Navbar from "../components/Navbar";
import PatchNotesModal from "../components/PatchNotes/PatchNotesModal";

// datos internos
import { PATCHES } from "../components/PatchNotes/patches";


export default function MainLayout({ children }: { children: ReactNode }) {

  const [open, setOpen] = useState(false);

  const patchKeys = Object.keys(PATCHES);
  const latestPatch = patchKeys[0];

  return (
    <div className="min-h-screen bg-white dark:bg-blue-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
      <Navbar />

      <main className="pt-20">{children}</main>

      <footer className="mt-12 py-6 text-center border-t border-gray-300 dark:border-gray-700 relative">
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Aglis Tamayo. Todos los derechos reservados.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="text-xs mt-1 opacity-40 hover:opacity-80 transition-opacity cursor-pointer select-none"
        >
          Versión {latestPatch}
        </button>
      </footer>

      <PatchNotesModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
