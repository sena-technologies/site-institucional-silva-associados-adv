'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Scale } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-gold-600" />
            <div>
              <h1 className="text-xl font-serif font-bold text-primary-900">
                Silva & Associados
              </h1>
              <p className="text-xs text-primary-600">Advocacia & Consultoria</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-primary-700 hover:text-gold-600 font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              href="/areas-atuacao"
              className="text-primary-700 hover:text-gold-600 font-medium transition-colors"
            >
              Áreas de Atuação
            </Link>
            <Link
              href="/equipe"
              className="text-primary-700 hover:text-gold-600 font-medium transition-colors"
            >
              Nossa Equipe
            </Link>
            <Link
              href="/blog"
              className="text-primary-700 hover:text-gold-600 font-medium transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contato"
              className="bg-gold-600 text-white px-4 py-2 rounded-md hover:bg-gold-700 transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-primary-700" />
            ) : (
              <Menu className="h-6 w-6 text-primary-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-50">
              <Link
                href="/"
                className="block px-3 py-2 text-primary-700 hover:text-gold-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/areas-atuacao"
                className="block px-3 py-2 text-primary-700 hover:text-gold-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Áreas de Atuação
              </Link>
              <Link
                href="/equipe"
                className="block px-3 py-2 text-primary-700 hover:text-gold-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nossa Equipe
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-primary-700 hover:text-gold-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contato"
                className="block px-3 py-2 bg-gold-600 text-white rounded-md hover:bg-gold-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
