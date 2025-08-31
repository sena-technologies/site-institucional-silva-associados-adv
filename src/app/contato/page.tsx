'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  MessageSquare
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  area: string;
}

export default function Contato() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    area: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const areas = [
    'Direito Empresarial',
    'Direito Civil',
    'Direito Trabalhista',
    'Direito Tributário',
    'Direito Penal',
    'Direito de Família',
    'Outro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Check if Firebase is configured
      if (!db) {
        console.warn('Firebase não está configurado. Simulando envio...');
        // Simulate success for demonstration
        setTimeout(() => {
          setSubmitStatus('success');
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
            area: ''
          });
          setIsSubmitting(false);
        }, 1000);
        return;
      }

      // Dynamic import of Firebase functions
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: serverTimestamp(),
        status: 'new'
      });

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        area: ''
      });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Estamos prontos para ajudá-lo com suas questões jurídicas. 
            Entre em contato conosco e agende uma consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-primary-900 text-white rounded-2xl p-8">
              <h2 className="text-2xl font-serif font-bold mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-primary-200">
                      Rua Quinze de Novembro, 850<br />
                      Centro, Florianópolis - SC<br />
                      CEP: 88010-400
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gold-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-primary-200">
                      (48) 3224-7890<br />
                      (48) 9 8765-4321
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-primary-200">
                      contato@silvaassociados.com.br
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-gold-400 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Horário de Funcionamento</h3>
                    <p className="text-primary-200">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      Domingo: Fechado
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-700">
                <h3 className="font-semibold mb-4">Consulta de Emergência</h3>
                <p className="text-primary-200 text-sm mb-4">
                  Para casos urgentes, entre em contato através do nosso WhatsApp:
                </p>
                <a
                  href="https://wa.me/5548987654321"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-primary-100 p-8">
              <h2 className="text-2xl font-serif font-bold text-primary-900 mb-8">
                Envie sua Mensagem
              </h2>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="text-green-800">
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <p className="text-red-800">
                    Ocorreu um erro ao enviar sua mensagem. Tente novamente.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-primary-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                      placeholder="(11) 9 9999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="area" className="block text-sm font-medium text-primary-700 mb-2">
                      Área de Interesse *
                    </label>
                    <select
                      id="area"
                      name="area"
                      required
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    >
                      <option value="">Selecione uma área</option>
                      {areas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Assunto da sua consulta"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-primary-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Descreva detalhadamente sua situação..."
                  />
                </div>

                <div className="text-sm text-primary-600">
                  <p>
                    * Campos obrigatórios. Suas informações serão tratadas com total confidencialidade 
                    conforme nossa política de privacidade.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-600 hover:bg-gold-700 disabled:bg-primary-300 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-primary-900 mb-8 text-center">
            Nossa Localização
          </h2>
          <div className="bg-primary-100 rounded-2xl p-8 text-center">
            <div className="bg-white rounded-lg p-12">
              <MapPin className="h-16 w-16 text-gold-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                Estamos no Centro de Florianópolis
              </h3>
              <p className="text-primary-600">
                Localização privilegiada para melhor atendê-lo. 
                Estacionamento conveniado disponível.
              </p>
              <p className="text-sm text-primary-500 mt-4">
                Mapa interativo em breve
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
