import { ArrowRight, Smartphone } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1e3a5f] to-[#152940]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Smartphone className="mx-auto text-white mb-6" size={64} />
        </div>
        <h2 className="text-white mb-6">
          Encontre a casa dos seus sonhos hoje
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Comece sua jornada com a CasaFácil. Mais de 10.000 imóveis disponíveis e milhares de pessoas já encontraram o lar perfeito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#1e3a5f] px-8 py-4 rounded hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
            Começar Agora
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded hover:bg-white hover:text-[#1e3a5f] transition-colors">
            Anunciar Imóvel
          </button>
        </div>
      </div>
    </section>
  );
}
