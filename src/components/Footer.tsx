export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Movimiento Nacional. Todos los derechos reservados.</p>

        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Política de Privacidad</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
