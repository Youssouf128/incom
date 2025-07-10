'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Badge variant="outline" className="border-[#C5A54F] text-[#C5A54F] w-fit">
               Agence N°1 à Djibouti
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2D2A32] leading-tight">
              Votre Croissance 
              <span className="gradient-text block">Digitale</span>
              Notre Mission
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              in&apos;COM propulse votre visibilité digitale à Djibouti. Stratégie sur mesure, 
              résultats garantis et accompagnement personnalisé pour faire rayonner votre entreprise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
               
          <Link href="/services">
              <Button 
                size="lg" 
                className="bg-[#C5A54F] hover:bg-[#B8954A] text-white px-8 py-4 text-lg group"
              >
                Découvrir nos Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
              
              <a
                href="https://www.youtube.com/@inCOMMediaDjibouti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#C5A54F] text-[#C5A54F] hover:bg-[#C5A54F] hover:text-white px-8 py-4 text-lg group"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Voir notre Vidéo
                </Button>
              </a>

            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-[#C5A54F]">50+</div>
                <div className="text-gray-600">Clients Satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#C5A54F]">+200%</div>
                <div className="text-gray-600">Croissance Moyenne</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#C5A54F]">98%</div>
                <div className="text-gray-600">Taux de Satisfaction</div>
              </div>
            </div>
          </motion.div>
          
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <Image
                src="https://i.pinimg.com/736x/bd/8e/2b/bd8e2bf9adc320941929ff0e3eb0edd5.jpg"
                alt="Équipe in'COM travaillant sur des projets digitaux"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-2xl font-bold text-[#C5A54F]">+150%</div>
              <div className="text-sm text-gray-600">Trafic Web</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              className="absolute -bottom-6 -right-6 bg-[#C5A54F] rounded-2xl p-6 shadow-xl text-white"
            >
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Support Client</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}