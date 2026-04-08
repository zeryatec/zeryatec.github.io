import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center md:flex-row justify-between gap-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src="/logohorizontal.png" alt="ZeryaTec Logo" className="h-12 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" />
          </Link>
        </div>
        
        <p className="text-gray-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} ZeryaTec Consultoría. Todos los derechos reservados.
        </p>

        <div className="flex gap-6">
           <Link href="/productos" className="text-gray-400 hover:text-primary transition-colors text-sm">
            Servicios
          </Link>
          <Link href="/terminos" className="text-gray-400 hover:text-primary transition-colors text-sm">
            Términos
          </Link>
          <Link href="/privacidad" className="text-gray-400 hover:text-primary transition-colors text-sm">
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
