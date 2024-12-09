import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Shield, Menu } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">CyberHexon</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-semibold  hover:text-blue-600">Home</Link>
            <Link to="/about" className="font-semibold hover:text-blue-600">About</Link>
            <Link to="/solutions" className="font-semibold hover:text-blue-600">Solutions</Link>
            <Link to="/pricing" className="font-semibold hover:text-blue-600">Pricing</Link>
            <Button className='hover:bg-blue-600'>Contact Us</Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/solutions" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Solutions</Link>
            <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
            <div className="px-3 py-2">
              <Button className="w-full">Contact Us</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}