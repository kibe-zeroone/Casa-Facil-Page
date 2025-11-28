export function Objectives() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-blue-100 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-gray-900 border-b-4 border-[#1e3a5f] pb-4 inline-block">
                Principais Objetivos<br/>da Plataforma
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#1e3a5f]">
                  <h3 className="text-gray-900 mb-2">
                    Facilitar a busca por imóveis
                  </h3>
                  <p className="text-gray-600">
                    Oferecer filtros inteligentes para encontrar casas e apartamentos para aluguel ou venda de acordo com as preferências do usuário.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#1e3a5f]">
                  <h3 className="text-gray-900 mb-2">
                    Reduzir tempo e esforço
                  </h3>
                  <p className="text-gray-600">
                    Tornar o processo de procura mais rápido, evitando deslocamentos e consultas desnecessárias.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#1e3a5f]">
                  <h3 className="text-gray-900 mb-2">
                    Garantir praticidade
                  </h3>
                  <p className="text-gray-600">
                    Permitir que todo o processo de busca e anúncio seja feito de forma simples e intuitiva, diretamente na palma da sua mão.
                  </p>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#1e3a5f]">
                  <h3 className="text-gray-900 mb-2">
                    Conectar pessoas
                  </h3>
                  <p className="text-gray-600">
                    Aproximar quem busca um imóvel de quem deseja alugar ou vender, em um só ambiente digital.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-blue-100">
                <img
                  src="https://images.unsplash.com/photo-1610540604745-3e96fba9ccef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwZ29hbHMlMjB0YXJnZXQlMjBzdWNjZXNzfGVufDF8fHx8MTc2NDM2NDMxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Objetivos da plataforma"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1e3a5f] opacity-10 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400 opacity-10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
