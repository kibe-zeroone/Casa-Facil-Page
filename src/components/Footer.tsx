import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#1e3a5f] text-white p-2 rounded">
                <MapPin size={20} />
              </div>
              <h3 className="text-gray-900">CasaFácil</h3>
            </div>
            <p className="text-gray-600 mb-4">
              O caminho mais fácil até a casa dos seus sonhos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#1e3a5f] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 mb-4">Para Você</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                  Buscar Imóveis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                  Comprar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                  Alugar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                  Financiamento
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 mb-4">Para Proprietários</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                  Anunciar Imóvel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                  Planos e Preços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                  Gestão de Anúncios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                  Dicas de Venda
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>contato@casafacil.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>São Paulo, SP<br/>Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-center md:text-left">
              &copy; 2024 CasaFácil. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-gray-600">
              <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                Privacidade
              </a>
              <a href="#" className="hover:text-[#1e3a5f] transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
