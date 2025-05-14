import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-800/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold">
            Rekura
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
