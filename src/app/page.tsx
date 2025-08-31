import Link from 'next/link';
import { 
  Scale, 
  Users, 
  Award, 
  Clock, 
  Building2, 
  Gavel, 
  FileText, 
  Shield,
  ArrowRight 
} from 'lucide-react';

export default function Home() {
  const practiceAreas = [
    {
      icon: Building2,
      title: 'Direito Empresarial',
      description: 'Consultoria jurídica para empresas, contratos, fusões e aquisições.',
    },
    {
      icon: Gavel,
      title: 'Direito Civil',
      description: 'Ações cíveis, contratos, responsabilidade civil e indenizações.',
    },
    {
      icon: Users,
      title: 'Direito Trabalhista',
      description: 'Defesa em ações trabalhistas, consultoria preventiva e compliance.',
    },
    {
      icon: FileText,
      title: 'Direito Tributário',
      description: 'Planejamento tributário, elisão fiscal e defesa em autuações.',
    },
    {
      icon: Shield,
      title: 'Direito Penal',
      description: 'Defesa criminal, inquéritos policiais e recursos penais.',
    },
    {
      icon: Scale,
      title: 'Direito Família',
      description: 'Divórcio, guarda, pensão alimentícia e inventários.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Casos Resolvidos' },
    { number: '20+', label: 'Anos de Experiência' },
    { number: '50+', label: 'Empresas Atendidas' },
    { number: '98%', label: 'Taxa de Sucesso' },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-6">
                Excelência em 
                <span className="text-gold-400"> Advocacia</span>
              </h1>
              <p className="text-xl text-primary-200 mb-8">
                Mais de 20 anos oferecendo soluções jurídicas personalizadas 
                com ética, transparência e resultados excepcionais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contato"
                  className="bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Consulta Gratuita
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/areas-atuacao"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-900 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
                >
                  Nossas Especialidades
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <Scale className="h-32 w-32 text-gold-400 mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold text-center mb-2">
                  Justiça & Ética
                </h3>
                <p className="text-primary-200 text-center">
                  Nossos valores fundamentais em cada caso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gold-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-900 mb-4">
              Áreas de Atuação
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
              sempre com foco na excelência e satisfação do cliente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-primary-100"
                >
                  <div className="bg-gold-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-gold-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-primary-600 mb-4">
                    {area.description}
                  </p>
                  <Link
                    href="/areas-atuacao"
                    className="text-gold-600 hover:text-gold-700 font-medium inline-flex items-center"
                  >
                    Saiba mais
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-900 mb-6">
                Por que escolher a Silva & Associados?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-2 rounded-lg">
                    <Award className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Experiência Comprovada
                    </h3>
                    <p className="text-primary-600">
                      Mais de duas décadas de atuação no mercado jurídico com 
                      casos de alta complexidade resolvidos com sucesso.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Equipe Especializada
                    </h3>
                    <p className="text-primary-600">
                      Advogados altamente qualificados e especializados em 
                      diferentes áreas do direito para melhor atendê-lo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gold-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      Atendimento Personalizado
                    </h3>
                    <p className="text-primary-600">
                      Cada cliente recebe atenção individualizada e soluções 
                      jurídicas adaptadas às suas necessidades específicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-primary-900 mb-6 text-center">
                Agende sua Consulta
              </h3>
              <p className="text-primary-600 text-center mb-6">
                Entre em contato conosco e receba uma consulta inicial gratuita 
                para discutir seu caso.
              </p>
              <Link
                href="/contato"
                className="block bg-gold-600 hover:bg-gold-700 text-white text-center px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Entrar em Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
