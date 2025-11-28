import { Home, Search, Shield, Users, Bell, Heart, Filter, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Busca Avançada',
    description: 'Encontre o imóvel perfeito com filtros inteligentes e personalizados.',
  },
  {
    icon: Filter,
    title: 'Filtros Personalizados',
    description: 'Filtre por localização, preço, tamanho, proximidade de escolas e muito mais.',
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Todas as transações são seguras e verificadas pela nossa equipe.',
  },
  {
    icon: Users,
    title: 'Conexão Direta',
    description: 'Converse diretamente com proprietários e interessados.',
  },
  {
    icon: Bell,
    title: 'Alertas Personalizados',
    description: 'Receba notificações de novos imóveis que correspondem ao seu perfil.',
  },
  {
    icon: Heart,
    title: 'Lista de Favoritos',
    description: 'Salve seus imóveis preferidos e compare-os facilmente.',
  },
  {
    icon: TrendingUp,
    title: 'Análise de Mercado',
    description: 'Acesse dados sobre valorização e tendências de cada região.',
  },
  {
    icon: Home,
    title: 'Tour Virtual',
    description: 'Visite imóveis virtualmente antes de agendar uma visita presencial.',
  },
];

// Dados de exemplo para imóveis
const properties = [
  {
    image: 'https://images.unsplash.com/photo-1718893389568-22a2a039998c?w=800',
    price: 'R$ 850.000',
    title: 'Casa Moderna',
    details: '3 quartos • 2 banheiros • 200m²',
    location: 'São Paulo, SP'
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    price: 'R$ 650.000',
    title: 'Apartamento de Luxo',
    details: '2 quartos • 1 banheiro • 80m²',
    location: 'Rio de Janeiro, RJ'
  },
  {
    image: 'https://images.unsplash.com/photo-1606932250069-62f395a08602?w=800',
    price: 'R$ 450.000',
    title: 'Casa Familiar',
    details: '4 quartos • 3 banheiros • 250m²',
    location: 'Belo Horizonte, MG'
  }
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            Recursos da Plataforma
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tudo que você precisa para encontrar ou anunciar o imóvel ideal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 hover:border-[#1e3a5f] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1e3a5f] transition-colors">
                  <Icon className="text-[#1e3a5f] group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Property showcase */}
        <div className="mt-20">
          <h3 className="text-gray-900 text-center mb-12">
            Imóveis em Destaque
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[#1e3a5f] mb-2">{property.price}</div>
                  <h4 className="text-gray-900 mb-2">{property.title}</h4>
                  <p className="text-gray-600 mb-4">{property.details}</p>
                  <p className="text-gray-500">{property.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
