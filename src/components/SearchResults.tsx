import { ArrowLeft, MapPin, Home, Bed, Bath, Car, Heart } from 'lucide-react';
import { useState } from 'react';

export interface Property {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  garages?: number;
  type: string;
  description: string;
  images: string[];
}

const allProperties: Property[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    title: 'Casa Moderna com Vista Panorâmica',
    location: 'Vila Progresso, Guarulhos/SP',
    price: 680000,
    area: 113,
    bedrooms: 2,
    bathrooms: 2,
    garages: 3,
    type: 'Casa',
    description: 'Linda casa moderna com acabamento de primeira qualidade, amplo jardim e área de lazer completa.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?w=800',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?w=800',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800'
    ]
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    title: 'Apartamento de Luxo no Centro',
    location: 'Centro, Araucária/PR',
    price: 450000,
    area: 82,
    bedrooms: 3,
    bathrooms: 2,
    garages: 2,
    type: 'Apartamento',
    description: 'Apartamento moderno com vista privilegiada, acabamento premium e localização estratégica.',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
      'https://images.unsplash.com/photo-1738168273959-952fdc961991?w=800',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?w=800',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?w=800'
    ]
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1606932250069-62f395a08602?w=800',
    title: 'Terreno Amplo para Construção',
    location: 'Jardim São Luís, Peruíbe/SP',
    price: 100000,
    area: 318,
    type: 'Terreno',
    description: 'Terreno plano, pronto para construir, em área nobre com infraestrutura completa.',
    images: [
      'https://images.unsplash.com/photo-1606932250069-62f395a08602?w=800',
      'https://images.unsplash.com/photo-1573845105959-48591b7fd566?w=800',
      'https://images.unsplash.com/photo-1712254293792-1013ae15fafd?w=800'
    ]
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    title: 'Casa em Condomínio Fechado',
    location: 'Alphaville, Barueri/SP',
    price: 950000,
    area: 200,
    bedrooms: 4,
    bathrooms: 3,
    garages: 2,
    type: 'Casa',
    description: 'Casa espaçosa em condomínio de alto padrão com segurança 24h e área de lazer completa.',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?w=800',
      'https://images.unsplash.com/photo-1712254293792-1013ae15fafd?w=800',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?w=800'
    ]
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    title: 'Apartamento Novo com Varanda Gourmet',
    location: 'Pinheiros, São Paulo/SP',
    price: 780000,
    area: 70,
    bedrooms: 2,
    bathrooms: 1,
    garages: 1,
    type: 'Apartamento',
    description: 'Apartamento moderno com varanda gourmet, pronto para morar, em bairro nobre.',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      'https://images.unsplash.com/photo-1738168273959-952fdc961991?w=800',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?w=800',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?w=800'
    ]
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?w=800',
    title: 'Cobertura Duplex Vista Mar',
    location: 'Boa Viagem, Recife/PE',
    price: 1500000,
    area: 250,
    bedrooms: 4,
    bathrooms: 4,
    garages: 3,
    type: 'Apartamento',
    description: 'Cobertura luxuosa com vista para o mar, piscina privativa e acabamento impecável.',
    images: [
      'https://images.unsplash.com/photo-1568115286680-d203e08a8be6?w=800',
      'https://images.unsplash.com/photo-1738168273959-952fdc961991?w=800',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?w=800',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?w=800'
    ]
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1668957065301-bc8cc8691c5f?w=800',
    title: 'Casa de Campo com Piscina',
    location: 'Interior, Campos do Jordão/SP',
    price: 1200000,
    area: 300,
    bedrooms: 5,
    bathrooms: 4,
    garages: 4,
    type: 'Casa',
    description: 'Imóvel campestre com piscina aquecida, churrasqueira e vista para as montanhas.',
    images: [
      'https://images.unsplash.com/photo-1668957065301-bc8cc8691c5f?w=800',
      'https://images.unsplash.com/photo-1712254293792-1013ae15fafd?w=800',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?w=800',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?w=800'
    ]
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1718893389568-22a2a039998c?w=800',
    title: 'Sobrado Moderno no Brooklin',
    location: 'Brooklin, São Paulo/SP',
    price: 2100000,
    area: 280,
    bedrooms: 4,
    bathrooms: 5,
    garages: 3,
    type: 'Casa',
    description: 'Sobrado de alto padrão com design arrojado, automação completa e área de lazer.',
    images: [
      'https://images.unsplash.com/photo-1718893389568-22a2a039998c?w=800',
      'https://images.unsplash.com/photo-1620086464194-5127366b51ea?w=800',
      'https://images.unsplash.com/photo-1668089677938-b52086753f77?w=800',
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800'
    ]
  }
];

interface SearchResultsProps {
  onBack: () => void;
  onSelectProperty: (property: Property) => void;
}

export function SearchResults({ onBack, onSelectProperty }: SearchResultsProps) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedType, setSelectedType] = useState<string>('Todos');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [bedroomFilter, setBedroomFilter] = useState<number | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredProperties = allProperties.filter(property => {
    if (selectedType !== 'Todos' && property.type !== selectedType) return false;
    if (bedroomFilter && property.bedrooms && property.bedrooms < bedroomFilter) return false;
    
    if (priceRange !== 'all') {
      if (priceRange === 'low' && property.price > 500000) return false;
      if (priceRange === 'medium' && (property.price <= 500000 || property.price > 1000000)) return false;
      if (priceRange === 'high' && property.price <= 1000000) return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9ff] to-white">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-blue-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1e3a5f] transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-gray-900 mb-2">Resultados da Busca</h1>
              <p className="text-gray-600">{filteredProperties.length} imóveis encontrados</p>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm bg-white"
              >
                <option>Todos</option>
                <option>Casa</option>
                <option>Apartamento</option>
                <option>Terreno</option>
              </select>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm bg-white"
              >
                <option value="all">Todos os preços</option>
                <option value="low">Até R$ 500.000</option>
                <option value="medium">R$ 500.000 - R$ 1.000.000</option>
                <option value="high">Acima de R$ 1.000.000</option>
              </select>
              
              <select
                value={bedroomFilter || ''}
                onChange={(e) => setBedroomFilter(e.target.value ? Number(e.target.value) : null)}
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#1e3a5f] text-sm bg-white"
              >
                <option value="">Quartos</option>
                <option value="1">1+ Quarto</option>
                <option value="2">2+ Quartos</option>
                <option value="3">3+ Quartos</option>
                <option value="4">4+ Quartos</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Property Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg border border-blue-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
              onClick={() => onSelectProperty(property)}
            >
              <div className="relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(property.id);
                  }}
                  className={`absolute top-3 right-3 p-2 rounded-full ${
                    favorites.includes(property.id)
                      ? 'bg-[#1e3a5f] text-white'
                      : 'bg-white text-gray-600'
                  } hover:scale-110 transition-transform`}
                >
                  <Heart size={20} fill={favorites.includes(property.id) ? 'currentColor' : 'none'} />
                </button>
                <div className="absolute top-3 left-3 bg-[#1e3a5f] text-white px-3 py-1 rounded text-sm">
                  {property.type}
                </div>
              </div>
              
              <div className="p-5">
                <div className="text-2xl text-[#1e3a5f] mb-2">
                  R$ {property.price.toLocaleString('pt-BR')}
                </div>
                <h3 className="text-gray-900 mb-2 line-clamp-2">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex items-center gap-1">
                  <MapPin size={14} />
                  {property.location}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 pt-4 border-t border-gray-100">
                  <span className="flex items-center gap-1">
                    <Home size={16} />
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
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-20">
            <Home size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-gray-900 mb-2">Nenhum imóvel encontrado</h3>
            <p className="text-gray-600">Tente ajustar seus filtros de busca</p>
          </div>
        )}
      </div>
    </div>
  );
}
