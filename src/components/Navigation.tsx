import { Heart, User } from "lucide-react";
import ImageWithFallback from "./figma/ImageWithFallback";
import logoImage from "../assets/logo.png";

interface NavigationProps {
  onLoginClick: () => void;
}

export default function Navigation({ onLoginClick }: NavigationProps) {
  // Classe base unificada para todos os textos
  const menuItemClass =
    "text-[15px] font-medium text-gray-700 hover:text-[#1e3a5f] transition-colors flex items-center gap-2";

  // Animação de sublinhado
  const underlineAnim =
    "relative pb-1 after:absolute after:left-0 after:-bottom-[2px] after:h-[2px] after:w-0 after:bg-[#1e3a5f] hover:after:w-full after:transition-all after:duration-300";

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">

        {/* LOGO + NOME */}
        <div className="flex items-center gap-3">
          <ImageWithFallback
            src={logoImage}
            alt="Logo CasaFácil"
            className="h-10 w-auto"
          />
          <span className="text-xl font-semibold text-[#1e3a5f]">CasaFácil</span>
        </div>

        {/* MENU ESQUERDO */}
        <nav className="flex items-center gap-8">

          <a href="#inicio" className={`${menuItemClass} ${underlineAnim}`}>
            Imóveis
          </a>

          <a href="#sobre" className={`${menuItemClass} ${underlineAnim}`}>
            Sobre
          </a>

          <a href="#anuncie" className={`${menuItemClass} ${underlineAnim}`}>
            Anuncie
          </a>

          <button className={menuItemClass}>
            <Heart size={20} />
            Favoritos
          </button>

          <button
            onClick={onLoginClick}
            className={`${menuItemClass} border border-gray-300 px-4 py-2 rounded-lg hover:border-[#1e3a5f]`}
          >
            <User size={20} />
            Entrar
          </button>

        </nav>
      </div>
    </header>
  );
}
