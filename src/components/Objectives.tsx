export function Objectives() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200 shadow-sm">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-gray-900 border-b-4 border-[#1e3a5f] pb-4 inline-block">
                Principais Objetivos<br/>da Plataforma
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-900 mb-2">
                    Facilitar a busca por imóveis
                  </h3>
                  <p className="text-gray-600">
                    Oferecer filtros inteligentes para encontrar casas e apartamentos para aluguel ou venda de acordo com as preferências do usuário.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 mb-2">
                    Reduzir tempo e esforço
                  </h3>
                  <p className="text-gray-600">
                    Tornar o processo de procura mais rápido, evitando deslocamentos e consultas desnecessárias.
                  </p>
                </div>

                <div>
                  <h3 className="text-gray-900 mb-2">
                    Garantir praticidade
                  </h3>
                  <p className="text-gray-600">
                    Permitir que todo o processo de busca e anúncio seja feito de forma simples e intuitiva, diretamente na palma da sua mão.
                  </p>
                </div>

                <div>
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
              {/* Placeholder para imagem - substitua com sua imagem */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl aspect-square flex items-center justify-center border border-gray-200">
                <div className="text-gray-600 text-center p-8">
                  <p>Imagem dos Objetivos</p>
                  <p className="text-sm mt-2">(Substitua com sua imagem)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}