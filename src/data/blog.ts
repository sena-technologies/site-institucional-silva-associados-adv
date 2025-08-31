export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'nova-lei-geral-protecao-dados',
    title: 'Nova Lei Geral de Proteção de Dados: O que sua empresa precisa saber',
    excerpt: 'Entenda as principais mudanças trazidas pela LGPD e como adequar sua empresa às novas exigências de proteção de dados pessoais.',
    content: `
      <h2>Introdução à LGPD</h2>
      <p>A Lei Geral de Proteção de Dados (LGPD) representa um marco significativo na legislação brasileira, estabelecendo regras claras sobre o tratamento de dados pessoais no país. Inspirada no Regulamento Geral sobre a Proteção de Dados (GDPR) da União Europeia, a LGPD visa proteger os direitos fundamentais de liberdade e privacidade.</p>

      <h2>Principais Mudanças</h2>
      <p>As empresas agora devem:</p>
      <ul>
        <li>Obter consentimento explícito para coleta de dados</li>
        <li>Implementar medidas de segurança adequadas</li>
        <li>Nomear um Encarregado de Dados (DPO)</li>
        <li>Criar políticas de privacidade transparentes</li>
        <li>Estabelecer procedimentos para exercício de direitos dos titulares</li>
      </ul>

      <h2>Impactos para as Empresas</h2>
      <p>O descumprimento da LGPD pode resultar em multas de até 2% do faturamento da empresa, limitada a R$ 50 milhões por infração. Além das sanções financeiras, as empresas podem sofrer:</p>
      <ul>
        <li>Danos à reputação</li>
        <li>Perda de confiança dos clientes</li>
        <li>Interrupção de atividades</li>
        <li>Processos judiciais</li>
      </ul>

      <h2>Como se Adequar</h2>
      <p>Recomendamos às empresas:</p>
      <ol>
        <li>Realizar auditoria de dados existentes</li>
        <li>Implementar políticas de privacidade</li>
        <li>Treinar funcionários</li>
        <li>Estabelecer processos de resposta a incidentes</li>
        <li>Buscar assessoria jurídica especializada</li>
      </ol>

      <h2>Conclusão</h2>
      <p>A adequação à LGPD não é apenas uma obrigação legal, mas uma oportunidade de fortalecer a confiança com clientes e parceiros. Nossa equipe está preparada para auxiliar sua empresa nesse processo de adequação.</p>
    `,
    author: 'Dr. João Silva',
    date: '2025-01-15',
    category: 'Direito Digital',
    readTime: '8 min',
    tags: ['LGPD', 'Proteção de Dados', 'Compliance', 'Direito Digital'],
    featured: true
  },
  {
    id: 'reforma-trabalhista-impactos',
    title: 'Reforma Trabalhista: Principais impactos nas relações de trabalho',
    excerpt: 'Análise detalhada das mudanças trazidas pela reforma trabalhista e seus reflexos no dia a dia das empresas e trabalhadores.',
    content: `
      <h2>Contextualização da Reforma</h2>
      <p>A reforma trabalhista introduziu mudanças significativas na Consolidação das Leis do Trabalho (CLT), modernizando as relações de trabalho no Brasil. As alterações buscam flexibilizar alguns aspectos da legislação trabalhista, promovendo maior segurança jurídica.</p>

      <h2>Principais Mudanças</h2>
      <h3>1. Acordos Individuais e Coletivos</h3>
      <p>A reforma fortaleceu os acordos coletivos, permitindo que prevaleçam sobre a lei em diversos pontos, desde que não contrariem a Constituição Federal.</p>

      <h3>2. Jornada de Trabalho</h3>
      <p>Foram criadas novas modalidades de jornada, incluindo:</p>
      <ul>
        <li>Trabalho intermitente</li>
        <li>Jornada 12x36 horas</li>
        <li>Banco de horas individual</li>
        <li>Teletrabalho regulamentado</li>
      </ul>

      <h3>3. Férias</h3>
      <p>As férias podem ser fracionadas em até três períodos, desde que um deles não seja inferior a 14 dias.</p>

      <h2>Impactos Práticos</h2>
      <p>Para as empresas, a reforma trouxe:</p>
      <ul>
        <li>Maior flexibilidade na gestão de pessoal</li>
        <li>Redução de custos trabalhistas</li>
        <li>Necessidade de revisão de políticas internas</li>
        <li>Maior complexidade na gestão de jornadas</li>
      </ul>

      <h2>Recomendações</h2>
      <p>É fundamental que as empresas:</p>
      <ol>
        <li>Revisem seus contratos de trabalho</li>
        <li>Atualizem políticas de RH</li>
        <li>Treinem gestores sobre as novas regras</li>
        <li>Busquem assessoria jurídica especializada</li>
      </ol>
    `,
    author: 'Dra. Maria Associada',
    date: '2025-01-10',
    category: 'Direito Trabalhista',
    readTime: '6 min',
    tags: ['Reforma Trabalhista', 'CLT', 'Relações de Trabalho', 'Legislação'],
    featured: true
  },
  {
    id: 'planejamento-tributario-2025',
    title: 'Planejamento Tributário 2025: Estratégias para reduzir a carga fiscal',
    excerpt: 'Conheça as principais estratégias de planejamento tributário para o ano de 2025 e otimize a carga fiscal da sua empresa.',
    content: `
      <h2>Importância do Planejamento Tributário</h2>
      <p>O planejamento tributário é uma ferramenta essencial para a gestão empresarial, permitindo a redução legal da carga tributária através da escolha da forma mais eficiente de estruturar operações e negócios.</p>

      <h2>Principais Estratégias para 2025</h2>
      <h3>1. Escolha do Regime Tributário</h3>
      <p>A análise criteriosa entre Simples Nacional, Lucro Presumido e Lucro Real pode resultar em economia significativa:</p>
      <ul>
        <li><strong>Simples Nacional:</strong> Ideal para empresas com faturamento até R$ 4,8 milhões</li>
        <li><strong>Lucro Presumido:</strong> Adequado para empresas com margem de lucro superior à presunção legal</li>
        <li><strong>Lucro Real:</strong> Obrigatório para empresas de grande porte ou com atividades específicas</li>
      </ul>

      <h3>2. Incentivos Fiscais</h3>
      <p>Aproveitamento de incentivos disponíveis:</p>
      <ul>
        <li>Lei do Bem (inovação tecnológica)</li>
        <li>Incentivos regionais</li>
        <li>Programas setoriais</li>
        <li>Doações e patrocínios</li>
      </ul>

      <h3>3. Estruturação Societária</h3>
      <p>A organização adequada da estrutura societária pode proporcionar:</p>
      <ul>
        <li>Redução de tributos sobre distribuição de lucros</li>
        <li>Otimização da carga tributária</li>
        <li>Melhor aproveitamento de créditos</li>
        <li>Planejamento sucessório eficiente</li>
      </ul>

      <h2>Cuidados Necessários</h2>
      <p>É importante observar:</p>
      <ul>
        <li>Propósito negocial das operações</li>
        <li>Substância econômica</li>
        <li>Limites da elisão fiscal</li>
        <li>Documentação adequada</li>
      </ul>

      <h2>Conclusão</h2>
      <p>O planejamento tributário deve ser realizado com base em análise técnica rigorosa e sempre dentro dos limites legais. Nossa equipe especializada pode auxiliar na elaboração de estratégias personalizadas para sua empresa.</p>
    `,
    author: 'Dr. João Silva',
    date: '2025-01-05',
    category: 'Direito Tributário',
    readTime: '7 min',
    tags: ['Planejamento Tributário', 'Elisão Fiscal', 'Tributos', 'Economia Fiscal'],
    featured: false
  },
  {
    id: 'direitos-consumidor-compras-online',
    title: 'Direitos do Consumidor em Compras Online: O que você precisa saber',
    excerpt: 'Guia completo sobre os direitos do consumidor nas compras pela internet e como proceder em caso de problemas.',
    content: `
      <h2>Crescimento do E-commerce</h2>
      <p>O crescimento exponencial das compras online trouxe novas questões para o Direito do Consumidor. É fundamental conhecer seus direitos ao realizar compras pela internet.</p>

      <h2>Principais Direitos</h2>
      <h3>1. Direito de Arrependimento</h3>
      <p>O consumidor tem direito de desistir da compra em até 7 dias corridos a partir do recebimento do produto, sem necessidade de justificativa.</p>

      <h3>2. Informações Claras</h3>
      <p>O fornecedor deve disponibilizar:</p>
      <ul>
        <li>Dados completos da empresa</li>
        <li>Características detalhadas do produto</li>
        <li>Preço total, incluindo taxas</li>
        <li>Condições de entrega</li>
        <li>Política de trocas e devoluções</li>
      </ul>

      <h3>3. Prazo de Entrega</h3>
      <p>Se o prazo não for cumprido, o consumidor pode:</p>
      <ul>
        <li>Cancelar a compra</li>
        <li>Exigir o cumprimento do prazo</li>
        <li>Aceitar produto substituto</li>
      </ul>

      <h2>Problemas Comuns</h2>
      <h3>Produto com Defeito</h3>
      <p>O consumidor tem direito a:</p>
      <ul>
        <li>Reparo do produto</li>
        <li>Troca por produto novo</li>
        <li>Devolução do dinheiro</li>
      </ul>

      <h3>Cobrança Indevida</h3>
      <p>Em caso de cobrança indevida, o consumidor pode exigir:</p>
      <ul>
        <li>Devolução em dobro do valor pago</li>
        <li>Correção do problema</li>
        <li>Indenização por danos morais</li>
      </ul>

      <h2>Como Proceder</h2>
      <ol>
        <li>Tente resolver diretamente com a empresa</li>
        <li>Registre reclamação no Procon</li>
        <li>Utilize plataformas como Reclame Aqui</li>
        <li>Procure o Judiciado se necessário</li>
        <li>Busque orientação jurídica especializada</li>
      </ol>

      <h2>Dicas Importantes</h2>
      <ul>
        <li>Guarde todos os comprovantes</li>
        <li>Fotografe produtos com defeito</li>
        <li>Mantenha registro de todas as comunicações</li>
        <li>Verifique a reputação do vendedor</li>
      </ul>
    `,
    author: 'Dra. Ana Santos',
    date: '2024-12-28',
    category: 'Direito do Consumidor',
    readTime: '5 min',
    tags: ['Direito do Consumidor', 'E-commerce', 'Compras Online', 'CDC'],
    featured: false
  },
  {
    id: 'guarda-compartilhada-direitos-deveres',
    title: 'Guarda Compartilhada: Direitos e deveres dos pais',
    excerpt: 'Entenda como funciona a guarda compartilhada, quais são os direitos e deveres de cada genitor e como garantir o melhor interesse da criança.',
    content: `
      <h2>Conceito de Guarda Compartilhada</h2>
      <p>A guarda compartilhada é a modalidade de guarda em que ambos os genitores exercem conjuntamente o poder familiar, participando ativamente das decisões importantes relacionadas à vida dos filhos.</p>

      <h2>Características Principais</h2>
      <h3>Responsabilidade Conjunta</h3>
      <p>Ambos os pais são responsáveis por:</p>
      <ul>
        <li>Decisões sobre educação</li>
        <li>Cuidados médicos</li>
        <li>Atividades extracurriculares</li>
        <li>Questões religiosas</li>
        <li>Mudanças de residência</li>
      </ul>

      <h3>Tempo de Convivência</h3>
      <p>O tempo deve ser equilibrado, considerando:</p>
      <ul>
        <li>Rotina das crianças</li>
        <li>Distância entre residências</li>
        <li>Atividades escolares</li>
        <li>Disponibilidade dos pais</li>
      </ul>

      <h2>Direitos dos Genitores</h2>
      <ul>
        <li>Participar das decisões importantes</li>
        <li>Ter acesso a informações escolares e médicas</li>
        <li>Conviver regularmente com os filhos</li>
        <li>Ser consultado sobre mudanças significativas</li>
      </ul>

      <h2>Deveres dos Genitores</h2>
      <ul>
        <li>Prover sustento material</li>
        <li>Respeitar o tempo de convivência</li>
        <li>Manter comunicação respeitosa</li>
        <li>Priorizar o interesse dos filhos</li>
        <li>Cumprir acordos estabelecidos</li>
      </ul>

      <h2>Vantagens da Guarda Compartilhada</h2>
      <ul>
        <li>Manutenção do vínculo com ambos os pais</li>
        <li>Divisão equilibrada de responsabilidades</li>
        <li>Redução de conflitos</li>
        <li>Melhor desenvolvimento emocional das crianças</li>
      </ul>

      <h2>Quando Não é Recomendada</h2>
      <p>A guarda compartilhada pode não ser adequada quando há:</p>
      <ul>
        <li>Violência doméstica</li>
        <li>Uso de substâncias</li>
        <li>Conflitos constantes e intensos</li>
        <li>Impossibilidade de diálogo</li>
        <li>Distância geográfica excessiva</li>
      </ul>

      <h2>Como Implementar</h2>
      <ol>
        <li>Acordo extrajudicial</li>
        <li>Mediação familiar</li>
        <li>Ação judicial</li>
        <li>Acompanhamento psicológico</li>
      </ol>

      <h2>Importância do Diálogo</h2>
      <p>O sucesso da guarda compartilhada depende fundamentalmente da capacidade dos pais de:</p>
      <ul>
        <li>Comunicar-se de forma civilizada</li>
        <li>Separar a relação conjugal da parental</li>
        <li>Priorizar o bem-estar dos filhos</li>
        <li>Buscar soluções conjuntas</li>
      </ul>
    `,
    author: 'Dra. Ana Santos',
    date: '2024-12-20',
    category: 'Direito de Família',
    readTime: '6 min',
    tags: ['Guarda Compartilhada', 'Direito de Família', 'Divórcio', 'Filhos'],
    featured: false
  }
];

export function getBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

export function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getBlogCategories(): string[] {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  return categories.sort();
}
