import { Menu, X, Heart, User } from 'lucide-react';
import { useState } from 'react';
import ImageWithFallback from "./figma/ImageWithFallback";
import logoImage from '../assets/logo.png';

interface NavigationProps {
  onLoginClick: () => void;
}

export function Navigation({ onLoginClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-0 sm:px-1 lg:px-1">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <ImageWithFallback
                src={logoImage}
                alt="CasaFácil Logo"
                className="h-27 w-auto"
              />
            </div>
          </div>

          {/* Desktop Menu */}
{/* Desktop Menu */}
<div className="hidden md:flex items-center space-x-8">

  {/* Imóveis (ativo) */}
  <a
    href="#inicio"
    className="
      relative pb-1 text-gray-700 hover:text-[#1e3a5f] transition-colors
      after:absolute after:left-0 after:-bottom-[2px]
      after:h-[2px] after:w-0 after:bg-[#1e3a5f]
      hover:after:w-full after:transition-all after:duration-300
    "
  >
    Imóveis
  </a>

  {/* Sobre */}
  <a
    href="#sobre"
    className="
      relative pb-1 text-gray-700 hover:text-[#1e3a5f] transition-colors
      after:absolute after:left-0 after:-bottom-[2px]
      after:h-[2px] after:w-0 after:bg-[#1e3a5f]
      hover:after:w-full after:transition-all after:duration-300
    "
  >
    Sobre
  </a>

  {/* Anuncie */}
  <a
    href="#contato"
    className="
      relative pb-1 text-gray-700 hover:text-[#1e3a5f] transition-colors
      after:absolute after:left-0 after:-bottom-[2px]
      after:h-[2px] after:w-0 after:bg-[#1e3a5f]
      hover:after:w-full after:transition-all after:duration-300
    "
  >
    Anuncie
  </a>

  {/* Favoritos */}
  <button className="flex items-center gap-2 text-gray-700 hover:text-[#1e3a5f] transition-colors">
    <Heart size={20} />
    Favoritos
  </button>

  {/* Entrar */}
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
              <Heart size={20} />
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