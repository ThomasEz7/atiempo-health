import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900/50 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-white hover:text-blue-200 transition-colors">
                Atiempo Health
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/" className="text-white hover:text-blue-200 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-200 transition-colors">
                Home
              </Link>
              <Link href="/ueber-uns" className="text-white hover:text-blue-200 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-200 transition-colors">
                Über uns
              </Link>
              <Link href="/leistungen" className="text-white hover:text-blue-200 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-blue-200 transition-colors">
                Leistungen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 