import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowLeft, Share2, Tag } from 'lucide-react';
import { getBlogPost, getBlogPosts } from '@/data/blog';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }: Props) {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-gold-600 font-medium transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar ao Blog
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="bg-gold-100 text-gold-800 px-4 py-2 rounded-full font-medium">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl lg:text-5xl font-serif font-bold text-primary-900 mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-primary-600 mb-8">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-primary-500 border-b border-primary-200 pb-6">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
            <button className="flex items-center space-x-2 text-primary-600 hover:text-gold-600 transition-colors">
              <Share2 className="h-5 w-5" />
              <span>Compartilhar</span>
            </button>
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="text-primary-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-primary-200">
          <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center">
            <Tag className="mr-2 h-5 w-5" />
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Info */}
        <div className="mt-12 bg-primary-50 rounded-xl p-8">
          <h3 className="text-xl font-serif font-bold text-primary-900 mb-4">
            Sobre o Autor
          </h3>
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-primary-200 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-primary-600" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary-900 mb-2">
                {post.author}
              </h4>
              <p className="text-primary-600">
                Advogado especialista com vasta experiência na área. 
                Membro da equipe Silva & Associados, dedicado a oferecer 
                orientação jurídica de qualidade e análises aprofundadas 
                da legislação brasileira.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif font-bold text-primary-900 mb-8">
            Artigos Relacionados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {getBlogPosts()
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-xl shadow-lg border border-primary-100 p-6 hover:shadow-xl transition-shadow"
                >
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    {relatedPost.category}
                  </span>
                  
                  <h4 className="text-lg font-serif font-bold text-primary-900 mb-3">
                    <Link
                      href={`/blog/${relatedPost.id}`}
                      className="hover:text-gold-600 transition-colors"
                    >
                      {relatedPost.title}
                    </Link>
                  </h4>
                  
                  <p className="text-primary-600 mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-primary-500">
                    <span>{relatedPost.author}</span>
                    <span>{formatDate(relatedPost.date)}</span>
                  </div>
                </article>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl text-white p-8 text-center">
          <h3 className="text-2xl font-serif font-bold mb-4">
            Precisa de Assessoria Jurídica?
          </h3>
          <p className="text-primary-200 mb-6">
            Nossa equipe está pronta para esclarecer suas dúvidas e 
            oferecer a orientação jurídica que você precisa.
          </p>
          <Link
            href="/contato"
            className="inline-block bg-gold-600 hover:bg-gold-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Entre em Contato
          </Link>
        </div>
      </div>
    </main>
  );
}
