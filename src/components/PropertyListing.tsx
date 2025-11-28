import { SlidersHorizontal, MapPin, Home, Building, Bed, Bath, Car, Heart } from 'lucide-react';
import { useState } from 'react';

interface PropertyListingProps {
  onViewAll: () => void;
}

const properties = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1718893389568-22a2a039998c?w=800',
    title: 'Casa com 2 quartos à venda na Avenida Esperança, 747',
    location: 'Vila Progresso, Guarulhos/SP',
    price: 680000,
    area: 113,
    bedrooms: 2,
    bathrooms: 2,
    garages: 3,
    type: 'Casa'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    title: 'Sala comercial para alugar na rua Julieta Vidal Osório',
    location: 'Centro, Araucária/PR',
    price: 3850,
    rental: 250,
    area: 82,
    bedrooms: 1,
    type: 'Comercial'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1606932250069-62f395a08602?w=800',
    title: 'Terreno à venda, 318 m² por R$ 100.000',
    location: 'Jardim São Luís, Peruíbe/SP',
    price: 100000,
    area: 318,
    type: 'Terreno'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    title: 'Apartamento moderno com 3 quartos',
    location: 'Leblon, Rio de Janeiro/RJ',
    price: 1200000,
    area: 95,
    bedrooms: 3,
    bathrooms: 2,
    garages: 2,
    type: 'Apartamento'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    title: 'Casa em condomínio fechado',
    location: 'Alphaville, Barueri/SP',
    price: 950000,
    area: 200,
    bedrooms: 4,
    bathrooms: 3,
    garages: 2,
    type: 'Casa'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    title: 'Apartamento novo com varanda gourmet',
    location: 'Pinheiros, São Paulo/SP',
    price: 780000,
    area: 70,
    bedrooms: 2,
    bathrooms: 1,
    garages: 1,
    type: 'Apartamento'
  }
];

const propertyTypes = [
  { icon: Building, label: 'Apartamento', count: '2.026.922' },
  { icon: Home, label: 'Casas & Sobrados', count: '1.118.780' },
  { icon: Building, label: 'Casas em condomínio', count: '389.057' },
  { icon: MapPin, label: 'Terrenos', count: '244.581' },
  { icon: Building, label: 'Sala comercial', count: '186.061' }
];

export function PropertyListing({ onViewAll }: PropertyListingProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-2">Imóveis • Em todo Brasil</p>
          <h2 className="text-gray-900 mb-4">4.660.359 Imóveis em todo Brasil</h2>
          
          {/* Property Type Tabs */}
          <div className="flex gap-4 overflow-x-auto pb-4 border-b border-gray-200">
            {propertyTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <button
                  key={index}
                  onClick={onViewAll}
                  className="flex flex-col items-center gap-2 px-4 py-2 hover:bg-white rounded transition-colors whitespace-nowrap"
                >
                  <Icon size={24} className="text-gray-600" />
                  <div className="text-center">
                    <div className="text-sm text-gray-900">{type.label}</div>
                    <div className="text-xs text-gray-500">{type.count} ofertas</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={20} className="text-gray-600" />
                  <span className="text-gray-900">Filtros</span>
                </div>
                <button className="text-[#1e3a5f] text-sm">Limpar tudo</button>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div>
                  <label className="block mb-2 text-gray-700">Localização</label>
                  <div className="relative">
                    <MapPin size={16} className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Digite bairro, rua ou cidade"
                      className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent text-sm"
                    />
                  </div>
                </div>

                {/* Property Types */}
                <div>
                  <label className="block mb-3 text-gray-700">Tipos de imóveis</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button className="flex flex-col items-center gap-1 p-3 border border-gray-300 rounded hover:border-[#1e3a5f] transition-colors">
                      <Building size={20} className="text-gray-600" />
                      <span className="text-xs text-gray-600">Apartamento</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 p-3 border border-gray-300 rounded hover:border-[#1e3a5f] transition-colors">
                      <Home size={20} className="text-gray-600" />
                      <span className="text-xs text-gray-600">Casas</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 p-3 border border-gray-300 rounded hover:border-[#1e3a5f] transition-colors">
                      <MapPin size={20} className="text-gray-600" />
                      <span className="text-xs text-gray-600">Terrenos</span>
                    </button>
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block mb-3 text-gray-700">Preço a partir de</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="R$ 0"
                      className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
                    />
                    <input
                      type="text"
                      placeholder="R$ 0"
                      className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm"
                    />
                  </div>
                </div>

                {/* Bedrooms */}
                <div>
                  <label className="block mb-3 text-gray-700">Quantidade de quartos</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['+1', '+2', '+3', '+4'].map((num) => (
                      <button
                        key={num}
                        className="px-3 py-2 border border-gray-300 rounded hover:border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-colors text-sm"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Bathrooms */}
                <div>
                  <label className="block mb-3 text-gray-700">Banheiros</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['+1', '+2', '+3', '+4'].map((num) => (
                      <button
                        key={num}
                        className="px-3 py-2 border border-gray-300 rounded hover:border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-colors text-sm"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Garages */}
                <div>
                  <label className="block mb-3 text-gray-700">Garagens</label>
                  <div className="grid grid-cols-4 gap-2">
                    {['+1', '+2', '+3', '+4'].map((num) => (
                      <button
                        key={num}
                        className="px-3 py-2 border border-gray-300 rounded hover:border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white transition-colors text-sm"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Property Listings */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-sm text-gray-600">Mostrando {properties.length} resultados</p>
              <select className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm">
                <option>Mais relevantes</option>
                <option>Menor preço</option>
                <option>Maior preço</option>
                <option>Mais recentes</option>
              </select>
            </div>

            <div className="space-y-6">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-1 relative">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                      <button
                        onClick={() => toggleFavorite(property.id)}
                        className={`absolute top-3 right-3 p-2 rounded-full ${
                          favorites.includes(property.id)
                            ? 'bg-[#1e3a5f] text-white'
                            : 'bg-white text-gray-600'
                        } hover:scale-110 transition-transform`}
                      >
                        <Heart size={20} fill={favorites.includes(property.id) ? 'currentColor' : 'none'} />
                      </button>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <p className="text-sm text-gray-600 mb-2">{property.title}</p>
                      <h3 className="text-gray-900 mb-2">{property.location}</h3>
                      
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {property.area}m²
                        </span>
                        {property.bedrooms && (
                          <span className="flex items-center gap-1">
                            <Bed size={16} />
                            {property.bedrooms}
                          </span>
                        )}
                        {property.bathrooms && (
                          <span className="flex items-center gap-1">
                            <Bath size={16} />
                            {property.bathrooms}
                          </span>
                        )}
                        {property.garages && (
                          <span className="flex items-center gap-1">
                            <Car size={16} />
                            {property.garages}
                          </span>
                        )}
                      </div>

                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-2xl text-gray-900 mb-1">
                            R$ {property.price.toLocaleString('pt-BR')}
                          </div>
                          {property.rental && (
                            <p className="text-sm text-gray-600">
                              Iptu: R$ {property.rental}
                            </p>
                          )}
                        </div>
                        <button className="bg-[#1e3a5f] text-white px-6 py-2 rounded hover:bg-[#152940] transition-colors">
                          Contatar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
