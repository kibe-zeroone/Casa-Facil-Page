import { ArrowLeft, MapPin, Bed, Bath, Car, Home, Heart, Share2, Calendar, Shield, Check } from 'lucide-react';
import { useState } from 'react';
import type { Property } from './SearchResults';

interface PropertyDetailsProps {
  property: Property;
  onBack: () => void;
  onBuyClick: () => void;
}

export function PropertyDetails({ property, onBack, onBuyClick }: PropertyDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const features = [
    'Ar condicionado',
    'Armários embutidos',
    'Varanda',
    'Aquecimento',
    'Portaria 24h',
    'Área de lazer',
    'Piscina',
    'Academia',
    'Salão de festas',
    'Playground',
    'Churrasqueira',
    'Estacionamento'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9ff] to-white">
      {/* Header */}
      <div className="bg-white border-b border-blue-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1e3a5f] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar aos resultados</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Image */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-blue-100">
              <div className="relative">
                <img
                  src={property.images[selectedImage]}
                  alt={property.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`absolute top-4 right-4 p-3 rounded-full ${
                    isFavorite ? 'bg-[#1e3a5f] text-white' : 'bg-white text-gray-600'
                  } hover:scale-110 transition-all shadow-lg`}
                >
                  <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
                <button className="absolute top-4 left-4 p-3 rounded-full bg-white text-gray-600 hover:bg-gray-100 transition-all shadow-lg">
                  <Share2 size={24} />
                </button>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="p-4 flex gap-3 overflow-x-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index ? 'border-[#1e3a5f]' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`Vista ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-blue-100">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block bg-blue-50 text-[#1e3a5f] px-3 py-1 rounded text-sm mb-3">
                    {property.type}
                  </div>
                  <h1 className="text-gray-900 mb-2">{property.title}</h1>
                  <p className="text-gray-600 flex items-center gap-2">
                    <MapPin size={18} />
                    {property.location}
                  </p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Home className="text-[#1e3a5f]" size={24} />
                  </div>
                  <div>
                    <div className="text-gray-900">{property.area}m²</div>
                    <div className="text-sm text-gray-600">Área</div>
                  </div>
                </div>
                {property.bedrooms && (
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Bed className="text-[#1e3a5f]" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-900">{property.bedrooms}</div>
                      <div className="text-sm text-gray-600">Quartos</div>
                    </div>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Bath className="text-[#1e3a5f]" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-900">{property.bathrooms}</div>
                      <div className="text-sm text-gray-600">Banheiros</div>
                    </div>
                  </div>
                )}
                {property.garages && (
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Car className="text-[#1e3a5f]" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-900">{property.garages}</div>
                      <div className="text-sm text-gray-600">Vagas</div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Description */}
              <div className="mt-6">
                <h3 className="text-gray-900 mb-3">Sobre o Imóvel</h3>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Este imóvel oferece uma excelente oportunidade para quem busca qualidade de vida e conforto. 
                  Localizado em uma região privilegiada, conta com fácil acesso a comércio, escolas, 
                  hospitais e transporte público. O imóvel está em excelente estado de conservação e pronto para morar.
                </p>
              </div>
              
              {/* Features */}
              <div className="mt-6">
                <h3 className="text-gray-900 mb-4">Características</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-600">
                      <Check size={18} className="text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Map Placeholder */}
            <div className="bg-white rounded-lg p-6 shadow-md border border-blue-100">
              <h3 className="text-gray-900 mb-4">Localização</h3>
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-64 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin size={48} className="mx-auto mb-2 text-gray-400" />
                  <p>Mapa da localização</p>
                  <p className="text-sm mt-1">{property.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Card (Sticky) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-xl sticky top-24 border border-blue-100">
              <div className="mb-6">
                <div className="text-3xl text-[#1e3a5f] mb-2">
                  R$ {property.price.toLocaleString('pt-BR')}
                </div>
                <p className="text-gray-600">Valor total do imóvel</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <button
                  onClick={onBuyClick}
                  className="w-full bg-[#1e3a5f] text-white py-4 rounded-lg hover:bg-[#152940] transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <Calendar size={20} />
                  Simular Compra
                </button>
                <button className="w-full border-2 border-[#1e3a5f] text-[#1e3a5f] py-4 rounded-lg hover:bg-blue-50 transition-colors">
                  Agendar Visita
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Entrar em Contato
                </button>
              </div>
              
              {/* Financing Calculator */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-gray-900 mb-4">Simulação de Financiamento</h4>
                <div className="space-y-3">
                  <div>
                    <label className="text-sm text-gray-600 block mb-1">Entrada</label>
                    <input
                      type="text"
                      placeholder="R$ 0,00"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 block mb-1">Prazo (meses)</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent">
                      <option>120 meses (10 anos)</option>
                      <option>180 meses (15 anos)</option>
                      <option>240 meses (20 anos)</option>
                      <option>300 meses (25 anos)</option>
                      <option>360 meses (30 anos)</option>
                    </select>
                  </div>
                  <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                    Calcular Parcelas
                  </button>
                </div>
              </div>
              
              {/* Trust Indicators */}
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                  <Shield className="text-green-500" size={20} />
                  <span>Imóvel verificado</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Check className="text-green-500" size={20} />
                  <span>Documentação em dia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
