import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { getBlogPosts, getFeaturedPosts, getBlogCategories } from '@/data/blog';

export default function Blog() {
  const allPosts = getBlogPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getBlogCategories();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-900 mb-6">
            Blog Jurídico
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Fique por dentro das principais novidades do mundo jurídico com nossos 
            artigos especializados e análises detalhadas da legislação.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-primary-900 mb-8">
              Artigos em Destaque
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg border border-primary-100 overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-primary-500 mb-4">
                      <span className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-serif font-bold text-primary-900 mb-3">
                      <Link
                        href={`/blog/${post.id}`}
                        className="hover:text-gold-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-primary-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-primary-500">
                        <User className="h-4 w-4" />
                        <span className="text-sm">{post.author}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium"
                      >
                        Ler mais
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-primary-900 mb-6">
            Categorias
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="bg-primary-100 hover:bg-gold-100 text-primary-700 hover:text-gold-700 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </section>

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-primary-900 mb-8">
            Todos os Artigos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-lg border border-primary-100 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-primary-500 mb-4">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-serif font-bold text-primary-900 mb-3">
                    <Link
                      href={`/blog/${post.id}`}
                      className="hover:text-gold-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  
                  <p className="text-primary-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2 text-primary-500">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <span className="text-primary-400">{formatDate(post.date)}</span>
                  </div>
                  
                  <div className="mt-4">
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium"
                    >
                      Ler artigo
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl text-white p-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Fique Atualizado
            </h2>
            <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
              Receba nossos artigos jurídicos diretamente em seu email e 
              mantenha-se informado sobre as principais mudanças na legislação.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-4 py-3 rounded-lg text-primary-900 placeholder-primary-400"
              />
              <button className="bg-gold-600 hover:bg-gold-700 px-6 py-3 rounded-lg font-semibold transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
