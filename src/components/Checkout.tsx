import { ArrowLeft, CreditCard, Building, User, Mail, Phone, MapPin, Calendar, Shield, Check, FileText, Home } from 'lucide-react';
import { useState } from 'react';
import type { Property } from './SearchResults';

interface CheckoutProps {
  property: Property;
  onBack: () => void;
  onComplete: () => void;
}

export function Checkout({ property, onBack, onComplete }: CheckoutProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cpf: '',
    birthDate: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    downPayment: '',
    financingMonths: '240',
    paymentMethod: 'financing',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  const calculateMonthlyPayment = () => {
    const downPayment = parseFloat(formData.downPayment.replace(/\D/g, '')) || 0;
    const financedAmount = property.price - downPayment;
    const months = parseInt(formData.financingMonths);
    const interestRate = 0.008;
    
    const monthlyPayment = financedAmount * (interestRate * Math.pow(1 + interestRate, months)) /
                           (Math.pow(1 + interestRate, months) - 1);
    
    return monthlyPayment;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f9ff] to-white">
      {/* Header */}
      <div className="bg-white border-b border-blue-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-[#1e3a5f] transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          
          <h1 className="text-gray-900 mb-2">Finalizar Compra</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center gap-2 mt-4">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  step >= s ? 'bg-[#1e3a5f] text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > s ? <Check size={16} /> : s}
                </div>
                {s < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    step > s ? 'bg-[#1e3a5f]' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Dados Pessoais</span>
            <span>Endereço</span>
            <span>Financiamento</span>
            <span>Confirmação</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-md border border-blue-100">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-gray-900 mb-6 flex items-center gap-2">
                      <User className="text-[#1e3a5f]" size={24} />
                      Dados Pessoais
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2">Nome Completo *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Telefone *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">CPF *</label>
                      <input
                        type="text"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="000.000.000-00"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Data de Nascimento *</label>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Address */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-gray-900 mb-6 flex items-center gap-2">
                      <MapPin className="text-[#1e3a5f]" size={24} />
                      Endereço Residencial
                    </h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">CEP *</label>
                      <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="00000-000"
                        required
                      />
                    </div>
                    
                    <div></div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-gray-700 mb-2">Rua *</label>
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="Nome da rua"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Número *</label>
                      <input
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="123"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Complemento</label>
                      <input
                        type="text"
                        name="complement"
                        value={formData.complement}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="Apto, Bloco, etc."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Bairro *</label>
                      <input
                        type="text"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="Nome do bairro"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Cidade *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="Nome da cidade"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Estado *</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        required
                      >
                        <option value="">Selecione</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PR">Paraná</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="BA">Bahia</option>
                        <option value="PE">Pernambuco</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Financing */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-gray-900 mb-6 flex items-center gap-2">
                      <Building className="text-[#1e3a5f]" size={24} />
                      Opções de Financiamento
                    </h2>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 text-[#1e3a5f] mb-2">
                      <Shield size={20} />
                      <span>Financiamento Pré-Aprovado</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Você está pré-aprovado para financiar até 80% do valor do imóvel
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Valor de Entrada *</label>
                      <input
                        type="text"
                        name="downPayment"
                        value={formData.downPayment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        placeholder="R$ 0,00"
                        required
                      />
                      <p className="text-sm text-gray-600 mt-1">
                        Mínimo: R$ {(property.price * 0.2).toLocaleString('pt-BR')} (20%)
                      </p>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2">Prazo de Financiamento *</label>
                      <select
                        name="financingMonths"
                        value={formData.financingMonths}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e3a5f] focus:border-transparent"
                        required
                      >
                        <option value="120">120 meses (10 anos)</option>
                        <option value="180">180 meses (15 anos)</option>
                        <option value="240">240 meses (20 anos)</option>
                        <option value="300">300 meses (25 anos)</option>
                        <option value="360">360 meses (30 anos)</option>
                      </select>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-gray-900 mb-4">Resumo do Financiamento</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Valor do imóvel:</span>
                          <span className="text-gray-900">R$ {property.price.toLocaleString('pt-BR')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Entrada:</span>
                          <span className="text-gray-900">
                            R$ {(parseFloat(formData.downPayment.replace(/\D/g, '')) || 0).toLocaleString('pt-BR')}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Valor financiado:</span>
                          <span className="text-gray-900">
                            R$ {(property.price - (parseFloat(formData.downPayment.replace(/\D/g, '')) || 0)).toLocaleString('pt-BR')}
                          </span>
                        </div>
                        <div className="border-t border-gray-300 pt-3 mt-3">
                          <div className="flex justify-between items-end">
                            <span className="text-gray-600">Parcela mensal estimada:</span>
                            <div className="text-right">
                              <div className="text-2xl text-[#1e3a5f]">
                                R$ {calculateMonthlyPayment().toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                              </div>
                              <div className="text-xs text-gray-500">
                                em {formData.financingMonths} vezes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-gray-900 mb-6 flex items-center gap-2">
                      <FileText className="text-[#1e3a5f]" size={24} />
                      Confirmação dos Dados
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Property Summary */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
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
                          <div className="text-lg text-[#1e3a5f]">
                            R$ {property.price.toLocaleString('pt-BR')}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Personal Info Summary */}
                    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h3 className="text-gray-900 mb-4">Dados Pessoais</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-gray-600">Nome:</span>
                          <span className="text-gray-900 ml-2">{formData.fullName}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">E-mail:</span>
                          <span className="text-gray-900 ml-2">{formData.email}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">Telefone:</span>
                          <span className="text-gray-900 ml-2">{formData.phone}</span>
                        </div>
                        <div>
                          <span className="text-gray-600">CPF:</span>
                          <span className="text-gray-900 ml-2">{formData.cpf}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Financing Summary */}
                    <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                      <h3 className="text-gray-900 mb-4">Financiamento</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Entrada:</span>
                          <span className="text-gray-900">
                            R$ {(parseFloat(formData.downPayment.replace(/\D/g, '')) || 0).toLocaleString('pt-BR')}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Parcela mensal:</span>
                          <span className="text-[#1e3a5f]">
                            R$ {calculateMonthlyPayment().toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Prazo:</span>
                          <span className="text-gray-900">{formData.financingMonths} meses</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Terms */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="mt-1" required />
                        <span className="text-sm text-gray-600">
                          Li e aceito os termos e condições, política de privacidade e autorizo a CasaFácil 
                          a realizar a análise de crédito necessária para o financiamento.
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t border-gray-200">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Voltar
                  </button>
                )}
                <button
                  type="submit"
                  className="flex-1 bg-[#1e3a5f] text-white py-3 rounded-lg hover:bg-[#152940] transition-colors shadow-md"
                >
                  {step === 4 ? 'Finalizar Compra' : 'Continuar'}
                </button>
              </div>
            </form>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-md sticky top-24 border border-blue-100">
              <h3 className="text-gray-900 mb-4">Resumo</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Valor do imóvel</span>
                  <span className="text-gray-900">R$ {property.price.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">ITBI (3%)</span>
                  <span className="text-gray-900">R$ {(property.price * 0.03).toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Registro (2%)</span>
                  <span className="text-gray-900">R$ {(property.price * 0.02).toLocaleString('pt-BR')}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="text-gray-900">Total</span>
                    <span className="text-xl text-[#1e3a5f]">
                      R$ {(property.price * 1.05).toLocaleString('pt-BR')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-2 text-[#1e3a5f] mb-2">
                  <Shield size={18} />
                  <span className="text-sm">Compra Segura</span>
                </div>
                <p className="text-xs text-gray-600">
                  Seus dados estão protegidos e a transação é 100% segura
                </p>
              </div>
              
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-green-500" />
                  <span>Documentação verificada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-green-500" />
                  <span>Processo 100% online</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-green-500" />
                  <span>Suporte dedicado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
