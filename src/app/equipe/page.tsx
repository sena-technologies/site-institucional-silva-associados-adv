import { User, GraduationCap, Award, Mail, Linkedin } from 'lucide-react';

export default function Equipe() {
  const teamMembers = [
    {
      name: 'Dr. João Silva',
      position: 'Sócio Fundador',
      specialization: 'Direito Empresarial e Tributário',
      experience: '25 anos',
      education: [
        'Graduação em Direito - USP',
        'Mestrado em Direito Tributário - PUC-SP',
        'Especialização em Direito Empresarial - FGV'
      ],
      achievements: [
        'OAB/SP 123.456',
        'Membro da Comissão de Direito Tributário OAB/SP',
        'Palestrante em congressos nacionais',
        'Autor de artigos especializados'
      ],
      description: 'Advogado especialista em direito empresarial e tributário com vasta experiência em planejamento tributário, fusões e aquisições, e consultoria empresarial.',
      image: '/team/joao-silva.jpg',
      email: 'joao.silva@silvaassociados.com.br',
      linkedin: '#'
    },
    {
      name: 'Dra. Maria Associada',
      position: 'Sócia',
      specialization: 'Direito Trabalhista e Civil',
      experience: '18 anos',
      education: [
        'Graduação em Direito - Mackenzie',
        'Especialização em Direito do Trabalho - USP',
        'MBA em Gestão Empresarial - FGV'
      ],
      achievements: [
        'OAB/SP 234.567',
        'Especialista em Direito do Trabalho',
        'Consultora em Compliance Trabalhista',
        'Mediadora certificada pelo CNJ'
      ],
      description: 'Advogada especializada em direito trabalhista e civil, com foco em prevenção de conflitos e consultoria preventiva para empresas.',
      image: '/team/maria-associada.jpg',
      email: 'maria.associada@silvaassociados.com.br',
      linkedin: '#'
    },
    {
      name: 'Dr. Carlos Pereira',
      position: 'Advogado Senior',
      specialization: 'Direito Penal e Processual Penal',
      experience: '15 anos',
      education: [
        'Graduação em Direito - PUC-SP',
        'Especialização em Ciências Penais - USP',
        'Curso de Advocacia Criminal - IBCCRIM'
      ],
      achievements: [
        'OAB/SP 345.678',
        'Membro do IBCCRIM',
        'Especialista em Defesa Criminal',
        'Atuação em Tribunais Superiores'
      ],
      description: 'Advogado criminalista com sólida experiência em defesas criminais, inquéritos policiais e recursos em tribunais superiores.',
      image: '/team/carlos-pereira.jpg',
      email: 'carlos.pereira@silvaassociados.com.br',
      linkedin: '#'
    },
    {
      name: 'Dra. Ana Santos',
      position: 'Advogada',
      specialization: 'Direito de Família e Sucessões',
      experience: '10 anos',
      education: [
        'Graduação em Direito - UNINOVE',
        'Especialização em Direito de Família - PUC-SP',
        'Curso de Mediação Familiar - CNJ'
      ],
      achievements: [
        'OAB/SP 456.789',
        'Mediadora Familiar Certificada',
        'Especialista em Alienação Parental',
        'Consultora em Planejamento Sucessório'
      ],
      description: 'Advogada especializada em direito de família e sucessões, com experiência em divórcios, guarda de menores e planejamento sucessório.',
      image: '/team/ana-santos.jpg',
      email: 'ana.santos@silvaassociados.com.br',
      linkedin: '#'
    }
  ];

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-6">
            Nossa Equipe
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Conheça os profissionais experientes e especializados que compõem 
            nossa equipe, dedicados a oferecer o melhor atendimento jurídico.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Photo */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <div className="aspect-[4/5] bg-primary-100 rounded-2xl overflow-hidden">
                    {/* Placeholder for member photo */}
                    <div className="w-full h-full bg-gradient-to-br from-primary-200 to-primary-300 flex items-center justify-center">
                      <User className="h-32 w-32 text-primary-400" />
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gold-100 p-4 rounded-xl shadow-lg">
                    <GraduationCap className="h-8 w-8 text-gold-600" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="mb-6">
                  <h2 className="text-3xl font-serif font-bold text-primary-900 mb-2">
                    {member.name}
                  </h2>
                  <p className="text-xl text-gold-600 font-semibold mb-2">
                    {member.position}
                  </p>
                  <p className="text-lg text-primary-700 mb-4">
                    {member.specialization}
                  </p>
                  <div className="flex items-center space-x-4 text-primary-600">
                    <span className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      {member.experience} de experiência
                    </span>
                  </div>
                </div>

                <p className="text-primary-600 mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Education */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">
                    Formação Acadêmica
                  </h3>
                  <ul className="space-y-2">
                    {member.education.map((edu, eduIndex) => (
                      <li key={eduIndex} className="text-primary-600 flex items-start">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {edu}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-primary-900 mb-3">
                    Qualificações e Certificações
                  </h3>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-primary-600 flex items-start">
                        <span className="w-2 h-2 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="flex space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center space-x-2 bg-primary-100 hover:bg-primary-200 text-primary-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </a>
                  <a
                    href={member.linkedin}
                    className="flex items-center space-x-2 bg-primary-100 hover:bg-primary-200 text-primary-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
              Precisa de Assistência Jurídica?
            </h2>
            <p className="text-xl text-primary-600 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para atendê-lo. Entre em contato e 
              agende uma consulta para discutir seu caso.
            </p>
            <a
              href="/contato"
              className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
