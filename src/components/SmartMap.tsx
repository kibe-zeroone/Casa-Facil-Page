export function SmartMap() {
  return (
    <section id="mapa" className="py-20 bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-900">
            <h2 className="text-gray-900">
              MAPA INTELIGENTE
            </h2>
            
            <p className="text-gray-600">
              O site oferece um mapa interativo que exibe, em tempo real, as casas disponíveis diretamente na região desejada.
            </p>

            <p className="text-gray-600">
              O usuário pode filtrar os imóveis de acordo com suas preferências, como proximidade de escolas, níveis de segurança, tranquilidade do bairro ou acesso ao transporte público.
            </p>

            <p className="text-gray-600">
              As áreas com mais recursos e melhor infraestrutura são destacadas visualmente por meio de cores de calor, facilitando a identificação das regiões mais adequadas para morar.
            </p>

            <p className="text-gray-600">
              Dessa forma, a busca se torna mais prática, rápida e objetiva, ajudando o usuário a evitar bairros que não atendem às suas necessidades.
            </p>
          </div>

          <div className="relative">
            <div className="relative z-10">
              {/* Phone mockup */}
              <div className="mx-auto max-w-sm">
                <div className="relative bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Phone notch */}
                    <div className="bg-gray-900 h-8 rounded-b-3xl mx-auto w-40"></div>
                    
                    {/* Map content */}
                    <div className="relative aspect-[9/19] bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0481907033!2d-46.87549804999999!3d-23.6814346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#1e3a5f] opacity-5 blur-3xl rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
