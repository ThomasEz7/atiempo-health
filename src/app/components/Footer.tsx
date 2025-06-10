import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Atiempo Health</h3>
            <p className="text-primary-200">
              Dein Weg. Dein Tempo. Deine Gesundheit.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Kontakt</h3>
            <p className="text-primary-200">
              Email: info@atiempo-health.de<br />
              Tel: +49 (0) XXX XXX XXX<br />
              Adresse: Musterstraße 123, 12345 Stadt
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ueber-uns" className="text-primary-200 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="text-primary-200 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-primary-200 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-600 mt-8 pt-8 text-center text-primary-200">
          <p>&copy; {new Date().getFullYear()} Atiempo Health. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
} 