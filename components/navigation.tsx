'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'À Propos', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.jpg"
              alt="in'COM Logo"
              width={120}
              height={60}
              className="h-12 w-auto "
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#C5A54F] ${
                  pathname === item.href
                    ? 'text-[#C5A54F]'
                    : 'text-[#2D2A32]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-[#C5A54F] hover:bg-[#B8954A] text-white">
              Consultation Gratuite
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2D2A32] hover:text-[#C5A54F] transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100"
          >
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 text-sm font-medium transition-colors hover:text-[#C5A54F] ${
                    pathname === item.href
                      ? 'text-[#C5A54F]'
                      : 'text-[#2D2A32]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4">
                <Button className="w-full bg-[#C5A54F] hover:bg-[#B8954A] text-white">
                  Consultation Gratuite
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}