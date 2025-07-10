'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const navigation = {
  company: [
    { name: 'À Propos', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'SEO', href: '/services' },
    { name: 'Réseaux Sociaux', href: '/services' },
    { name: 'Google Ads', href: '/services' },
    { name: 'Création Web', href: '/services' },
  ],
  legal: [
    { name: 'Mentions Légales', href: '/legal' },
    { name: 'Politique de Confidentialité', href: '/privacy' },
    { name: 'CGV', href: '/terms' },
  ],
  social: [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#2D2A32] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo.jpg"
                alt="in'COM Logo"
                width={120}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire privilégié pour conquérir l&apos;espace digital et propulser votre entreprise vers de nouveaux sommets à Djibouti.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-[#C5A54F]" />
                <span className="text-sm">Quartier 7, Rue de la République, Djibouti</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-[#C5A54F]" />
                <span className="text-sm">+253 77 12 34 56</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-[#C5A54F]" />
                <span className="text-sm">contact@incom.dj</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Entreprise</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-[#C5A54F] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-[#C5A54F] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Suivez-nous</h3>
            <div className="flex gap-4 mb-8">
              {navigation.social.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="w-10 h-10 bg-[#C5A54F]/10 rounded-lg flex items-center justify-center hover:bg-[#C5A54F] transition-colors group"
                  >
                    <IconComponent className="w-5 h-5 text-[#C5A54F] group-hover:text-white" />
                  </a>
                );
              })}
            </div>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-[#C5A54F] transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 in&apos;COM. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Agence de Marketing Digital - Djibouti
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}