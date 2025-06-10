import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary-600 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white">
            Atiempo Health
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-primary-100 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/ueber-uns" className="text-primary-100 hover:text-white transition-colors">
              Über uns
            </Link>
            <Link href="/leistungen" className="text-primary-100 hover:text-white transition-colors">
              Leistungen
            </Link>
            <Link href="/kontakt" className="text-primary-100 hover:text-white transition-colors">
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 