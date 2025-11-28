import { Search } from 'lucide-react';
import {ImageWithFallback} from './figma/ImageWithFallback';

interface HeroProps {
  onSearch: () => void;
}

export function Hero({ onSearch }: HeroProps) {
  return (
    <section id="inicio" className="relative bg-white overflow-hidden pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Map Image */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-full max-w-2xl rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback 
                src="/mapaCentral.jpg"
                alt="Mapa de localização"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Search Bar */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Digite a localização desejada..."
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent bg-white"
                />
              </div>
              <button 
                onClick={onSearch}
                className="bg-[#1e3a5f] text-white px-8 py-3 rounded hover:bg-[#152940] transition-colors flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Buscar
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              <button 
                onClick={onSearch}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition-colors"
              >
                Apartamento
              </button>
              <button 
                onClick={onSearch}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition-colors"
              >
                Casa
              </button>
              <button 
                onClick={onSearch}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition-colors"
              >
                Comprar
              </button>
              <button 
                onClick={onSearch}
                className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded hover:border-[#1e3a5f] hover:text-[#1e3a5f] transition-colors"
              >
                Alugar
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            <div className="text-center">
              <div className="text-[#1e3a5f]">10.000+</div>
              <p className="text-gray-600">Imóveis Disponíveis</p>
            </div>
            <div className="text-center">
              <div className="text-[#1e3a5f]">5.000+</div>
              <p className="text-gray-600">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="text-[#1e3a5f]">100+</div>
              <p className="text-gray-600">Cidades Atendidas</p>
            </div>
            <div className="text-center">
              <div className="text-[#1e3a5f]">24/7</div>
              <p className="text-gray-600">Suporte Online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
