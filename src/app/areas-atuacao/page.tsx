import Link from 'next/link';
import { 
  Building2, 
  Gavel, 
  Users, 
  FileText, 
  Shield, 
  Scale, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

export default function AreasAtuacao() {
  const practiceAreas = [
    {
      icon: Building2,
      title: 'Direito Empresarial',
      description: 'Assessoria jurídica completa para empresas de todos os portes.',
      services: [
        'Constituição de empresas',
        'Contratos empresariais',
        'Fusões e aquisições',
        'Reestruturação societária',
        'Compliance empresarial',
        'Assessoria em licitações',
        'Contratos de distribuição',
        'Joint ventures'
      ],
      benefits: [
        'Redução de riscos jurídicos',
        'Otimização de processos',
        'Segurança nas operações',
        'Consultoria preventiva'
      ]
    },
    {
      icon: Gavel,
      title: 'Direito Civil',
      description: 'Soluções em direito civil para pessoas físicas e jurídicas.',
      services: [
        'Ações de cobrança',
        'Contratos civis',
        'Responsabilidade civil',
        'Indenizações',
        'Usucapião',
        'Ações possessórias',
        'Direito do consumidor',
        'Danos morais e materiais'
      ],
      benefits: [
        'Defesa de seus direitos',
        'Recuperação de valores',
        'Resolução de conflitos',
        'Proteção patrimonial'
      ]
    },
    {
      icon: Users,
      title: 'Direito Trabalhista',
      description: 'Consultoria preventiva e contenciosa em relações de trabalho.',
      services: [
        'Defesa em ações trabalhistas',
        'Consultoria preventiva',
        'Compliance trabalhista',
        'Auditorias trabalhistas',
        'Rescisões contratuais',
        'Políticas internas',
        'Treinamentos jurídicos',
        'Negociações sindicais'
      ],
      benefits: [
        'Redução de passivos',
        'Compliance trabalhista',
        'Prevenção de conflitos',
        'Economia processual'
      ]
    },
    {
      icon: FileText,
      title: 'Direito Tributário',
      description: 'Planejamento tributário e defesa em questões fiscais.',
      services: [
        'Planejamento tributário',
        'Elisão fiscal',
        'Defesa em autuações',
        'Parcelamentos fiscais',
        'Compensações tributárias',
        'Restituições',
        'Consultoria fiscal',
        'Recursos administrativos'
      ],
      benefits: [
        'Redução da carga tributária',
        'Economia fiscal',
        'Segurança tributária',
        'Otimização fiscal'
      ]
    },
    {
      icon: Shield,
      title: 'Direito Penal',
      description: 'Defesa criminal especializada em todas as instâncias.',
      services: [
        'Defesa criminal',
        'Inquéritos policiais',
        'Habeas corpus',
        'Recursos penais',
        'Crimes empresariais',
        'Crimes contra a ordem econômica',
        'Crimes tributários',
        'Acompanhamento processual'
      ],
      benefits: [
        'Defesa especializada',
        'Proteção de direitos',
        'Estratégia defensiva',
        'Acompanhamento integral'
      ]
    },
    {
      icon: Scale,
      title: 'Direito de Família',
      description: 'Soluções sensíveis e eficazes para questões familiares.',
      services: [
        'Divórcio e separação',
        'Guarda de menores',
        'Pensão alimentícia',
        'Inventários',
        'Testamentos',
        'União estável',
        'Adoção',
        'Mediação familiar'
      ],
      benefits: [
        'Resolução amigável',
        'Proteção familiar',
        'Economia processual',
        'Redução de conflitos'
      ]
    }
  ];

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-6">
            Áreas de Atuação
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito, 
            sempre com foco na excelência, ética e resultados para nossos clientes.
          </p>
        </div>

        {/* Practice Areas */}
        <div className="space-y-16">
          {practiceAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Header */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-gold-100 p-4 rounded-xl">
                        <IconComponent className="h-10 w-10 text-gold-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-serif font-bold text-primary-900">
                          {area.title}
                        </h2>
                        <p className="text-lg text-primary-600 mt-2">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-primary-900 mb-4">
                      Nossos Serviços
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {area.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0" />
                          <span className="text-primary-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-4">
                      Benefícios
                    </h3>
                    <div className="bg-primary-50 rounded-xl p-6">
                      <ul className="space-y-3">
                        {area.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-primary-700 font-medium">
                              {benefit}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Link
                          href="/contato"
                          className="inline-flex items-center text-gold-600 hover:text-gold-700 font-semibold"
                        >
                          Consulte-nos
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl text-white p-12">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
              Por que escolher nossos serviços?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="h-8 w-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experiência</h3>
                <p className="text-primary-200">
                  Mais de 20 anos de atuação no mercado jurídico
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Especialização</h3>
                <p className="text-primary-200">
                  Advogados especializados em cada área do direito
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Resultados</h3>
                <p className="text-primary-200">
                  98% de taxa de sucesso em nossos casos
                </p>
              </div>
            </div>
            <div className="mt-12">
              <Link
                href="/contato"
                className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Agende uma Consulta
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
