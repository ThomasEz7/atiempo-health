import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900/50 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-blue-100">Musterstraße 123</p>
            <p className="text-blue-100">12345 Musterstadt</p>
            <p className="text-blue-100">Tel: +49 123 456789</p>
            <p className="text-blue-100">Email: info@atiempo-health.de</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <p className="text-blue-100">Mo - Fr: 8:00 - 18:00</p>
            <p className="text-blue-100">Sa: 9:00 - 13:00</p>
            <p className="text-blue-100">So: Geschlossen</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-blue-100 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="text-blue-100 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} Atiempo Health. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
} 