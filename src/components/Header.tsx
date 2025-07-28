"use client"
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-xl font-bold text-gray-900">Swipe App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/liked" className="text-gray-600 hover:text-gray-900">
                Liked Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
