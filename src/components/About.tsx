import { ArrowLeft, Target, Users, Shield, Clock, Award, TrendingUp } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

export function About({ onBack }: AboutProps) {
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
            <span>Voltar</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-gray-900 mb-4">Sobre a CasaFácil</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Transformando a forma como você encontra a casa dos seus sonhos
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12 shadow-lg border border-blue-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Target className="text-white" size={32} />
                </div>
                <h2 className="text-gray-900">Nossa Missão</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Facilitar o acesso à moradia de qualidade, conectando pessoas aos imóveis ideais 
                através de tecnologia inteligente e um processo simples, transparente e seguro.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#1e3a5f] p-3 rounded-lg">
                  <Award className="text-white" size={32} />
                </div>
                <h2 className="text-gray-900">Nossa Visão</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Ser a plataforma líder em soluções imobiliárias no Brasil, reconhecida pela 
                excelência no atendimento e pela inovação tecnológica que transforma experiências.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <h2 className="text-gray-900 text-center mb-8">Nossos Valores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 p-4 rounded-lg w-fit mb-4">
                <Shield className="text-[#1e3a5f]" size={32} />
              </div>
              <h3 className="text-gray-900 mb-3">Segurança</h3>
              <p className="text-gray-600">
                Garantimos transações 100% seguras e verificadas, protegendo seus dados e 
                investimentos em todas as etapas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 p-4 rounded-lg w-fit mb-4">
                <Users className="text-[#1e3a5f]" size={32} />
              </div>
              <h3 className="text-gray-900 mb-3">Transparência</h3>
              <p className="text-gray-600">
                Informações claras e detalhadas sobre cada imóvel, sem taxas ocultas ou 
                surpresas desagradáveis.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-50 p-4 rounded-lg w-fit mb-4">
                <TrendingUp className="text-[#1e3a5f]" size={32} />
              </div>
              <h3 className="text-gray-900 mb-3">Inovação</h3>
              <p className="text-gray-600">
                Tecnologia de ponta para facilitar sua busca com filtros inteligentes, 
                mapas interativos e tours virtuais.
              </p>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#152940] rounded-2xl p-8 md:p-12 text-white mb-12 shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white mb-6 text-center">Nossa História</h2>
            <div className="space-y-4 text-blue-50 text-lg leading-relaxed">
              <p>
                A CasaFácil nasceu da necessidade de simplificar o processo de busca por imóveis no Brasil. 
                Fundada em 2024, nossa plataforma foi criada por profissionais do mercado imobiliário e 
                especialistas em tecnologia que identificaram as dificuldades enfrentadas por compradores 
                e locatários.
              </p>
              <p>
                Desde então, temos trabalhado incansavelmente para oferecer uma solução completa que 
                combina tecnologia avançada com um atendimento humanizado. Nosso compromisso é tornar 
                a jornada de encontrar o lar perfeito uma experiência agradável e sem complicações.
              </p>
              <p>
                Hoje, contamos com mais de 10.000 imóveis cadastrados em todo o Brasil e já ajudamos 
                milhares de famílias a realizarem o sonho da casa própria.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-blue-100">
            <div className="text-4xl text-[#1e3a5f] mb-2">10.000+</div>
            <p className="text-gray-600">Imóveis Disponíveis</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-blue-100">
            <div className="text-4xl text-[#1e3a5f] mb-2">5.000+</div>
            <p className="text-gray-600">Clientes Satisfeitos</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-blue-100">
            <div className="text-4xl text-[#1e3a5f] mb-2">100+</div>
            <p className="text-gray-600">Cidades Atendidas</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md text-center border border-blue-100">
            <div className="text-4xl text-[#1e3a5f] mb-2">24/7</div>
            <p className="text-gray-600">Suporte Disponível</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-blue-100 mb-12">
          <h2 className="text-gray-900 text-center mb-8">Como Funcionamos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-[#1e3a5f]">1</span>
              </div>
              <h3 className="text-gray-900 mb-3">Busque</h3>
              <p className="text-gray-600">
                Use nossos filtros inteligentes para encontrar imóveis que atendam suas necessidades 
                e preferências.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-[#1e3a5f]">2</span>
              </div>
              <h3 className="text-gray-900 mb-3">Explore</h3>
              <p className="text-gray-600">
                Visualize fotos detalhadas, tours virtuais e informações completas sobre cada imóvel.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-[#1e3a5f]">3</span>
              </div>
              <h3 className="text-gray-900 mb-3">Conquiste</h3>
              <p className="text-gray-600">
                Entre em contato, agende visitas e finalize sua compra ou aluguel de forma segura 
                e descomplicada.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-50 rounded-2xl p-12 border border-blue-200">
          <h2 className="text-gray-900 mb-4">Pronto para começar?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
            Junte-se a milhares de pessoas que já encontraram o lar perfeito com a CasaFácil
          </p>
          <button 
            onClick={onBack}
            className="bg-[#1e3a5f] text-white px-8 py-4 rounded-lg hover:bg-[#152940] transition-colors shadow-lg hover:shadow-xl"
          >
            Encontrar Meu Imóvel
          </button>
        </div>
      </div>
    </div>
  );
}
