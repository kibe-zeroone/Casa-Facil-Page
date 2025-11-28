import { Menu, X, HeartIcon, User } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  onLoginClick: () => void;
}

export function Navigation({ onLoginClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-100 border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="CasaFácil Logo"
                className="h-12 w-auto"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-[#1e3a5f] transition-colors border-b-2 border-transparent hover:border-[#1e3a5f] pb-1">
              Imóveis
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-[#1e3a5f] transition-colors">
              Anuncie
            </a>

            <button className="flex items-center gap-2 text-gray-700 hover:text-[#1e3a5f] transition-colors">
              <HeartIcon size={20} />
              Favoritos
            </button>

            <button
              onClick={onLoginClick}
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded hover:border-[#1e3a5f] transition-colors"
            >
              <User size={20} />
              Entrar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#1e3a5f]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#inicio" className="block text-gray-700 hover:text-[#1e3a5f] py-2">
              Imóveis
            </a>
            <a href="#sobre" className="block text-gray-700 hover:text-[#1e3a5f] py-2">
              Sobre
            </a>
            <a href="#contato" className="block text-gray-700 hover:text-[#1e3a5f] py-2">
              Anuncie
            </a>

            <button className="flex items-center gap-2 text-gray-700 hover:text-[#1e3a5f] py-2">
              <HeartIcon size={20} />
              Favoritos
            </button>

            <button
              onClick={onLoginClick}
              className="w-full flex items-center justify-center gap-2 border border-gray-300 px-4 py-2 rounded"
            >
              <User size={20} />
              Entrar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
