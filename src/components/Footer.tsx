import Link from 'next/link';
import { Scale, MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Scale className="h-8 w-8 text-gold-400" />
              <div>
                <h3 className="text-xl font-serif font-bold">Silva & Associados</h3>
                <p className="text-sm text-primary-300">Advocacia & Consultoria</p>
              </div>
            </div>
            <p className="text-primary-300 mb-4 max-w-md">
              Escritório de advocacia especializado em diversas áreas do direito, 
              oferecendo consultoria jurídica de excelência com mais de 20 anos de experiência.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-400 hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-400 hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-400 hover:text-gold-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/areas-atuacao" className="text-primary-300 hover:text-white transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link href="/equipe" className="text-primary-300 hover:text-white transition-colors">
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-primary-300 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gold-400">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gold-400" />
                <span className="text-primary-300 text-sm">
                  Rua Quinze de Novembro, 850<br />
                  Centro, Florianópolis - SC<br />
                  88010-400
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gold-400" />
                <span className="text-primary-300 text-sm">(48) 3224-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gold-400" />
                <span className="text-primary-300 text-sm">contato@silvaassociados.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-400 text-sm mb-2">
            © 2025 Silva & Associados - Advocacia & Consultoria. Todos os direitos reservados.
          </p>
          <p className="text-primary-500 text-xs">
            Desenvolvido por <a href="https://website-oficial-azure.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:text-gold-300 transition-colors font-medium">Sena Technologies</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
