import { Check, Home, Mail, Calendar, FileText } from 'lucide-react';
import type { Property } from './SearchResults';

interface PurchaseSuccessProps {
  property: Property;
  onBackToHome: () => void;
}

export function PurchaseSuccess({ property, onBackToHome }: PurchaseSuccessProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9ff] to-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center border border-blue-100">
          {/* Success Icon */}
          <div className="mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="text-green-500" size={40} strokeWidth={3} />
            </div>
            <h1 className="text-gray-900 mb-2">
              Proposta Enviada com Sucesso!
            </h1>
            <p className="text-gray-600">
              Sua simulação de compra foi realizada com sucesso
            </p>
          </div>

          {/* Property Card */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left border border-blue-100">
            <h3 className="text-gray-900 mb-4">Imóvel Selecionado</h3>
            <div className="flex gap-4">
              <img
                src={property.image}
                alt={property.title}
                className="w-32 h-24 object-cover rounded-lg"
              />
              <div>
                <div className="text-gray-900 mb-1">{property.title}</div>
                <div className="text-sm text-gray-600 mb-2">{property.location}</div>
                <div className="text-xl text-[#1e3a5f]">
                  R$ {property.price.toLocaleString('pt-BR')}
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-left mb-8">
            <h3 className="text-gray-900 mb-4">Próximos Passos</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <Mail className="text-[#1e3a5f]" size={20} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Confirmação por E-mail</div>
                  <div className="text-sm text-gray-600">
                    Você receberá um e-mail com todos os detalhes da sua proposta em alguns minutos
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <Calendar className="text-[#1e3a5f]" size={20} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Análise de Crédito</div>
                  <div className="text-sm text-gray-600">
                    Nossa equipe iniciará a análise de crédito em até 24 horas úteis
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <FileText className="text-[#1e3a5f]" size={20} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Documentação</div>
                  <div className="text-sm text-gray-600">
                    Você receberá a lista de documentos necessários para dar continuidade ao processo
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
                  <Home className="text-[#1e3a5f]" size={20} />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Visita ao Imóvel</div>
                  <div className="text-sm text-gray-600">
                    Entraremos em contato para agendar uma visita presencial ao imóvel
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8 border border-blue-200">
            <h3 className="text-gray-900 mb-2">Precisa de Ajuda?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Nossa equipe está pronta para atendê-lo
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:11999999999"
                className="inline-flex items-center justify-center gap-2 text-[#1e3a5f] hover:text-[#152940] transition-colors"
              >
                📞 (11) 9999-9999
              </a>
              <a
                href="mailto:contato@casafacil.com"
                className="inline-flex items-center justify-center gap-2 text-[#1e3a5f] hover:text-[#152940] transition-colors"
              >
                ✉️ contato@casafacil.com
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBackToHome}
              className="flex-1 bg-[#1e3a5f] text-white py-3 rounded-lg hover:bg-[#152940] transition-colors shadow-md"
            >
              Voltar ao Início
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Ver Meus Imóveis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
