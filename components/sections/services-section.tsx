'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Target, Megaphone, Camera, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Search,
    title: "SEO & Référencement",
    description: "Optimisez votre visibilité sur Google et attirez un trafic qualifié vers votre site web.",
    features: ["Audit SEO complet", "Optimisation technique", "Content marketing", "Suivi des performances"]
  },
  {
    icon: Target,
    title: "Publicité Digitale",
    description: "Maximisez votre ROI avec des campagnes publicitaires ciblées sur Google Ads et les réseaux sociaux.",
    features: ["Google Ads", "Facebook & Instagram Ads", "Ciblage précis", "Optimisation continue"]
  },
  {
    icon: Megaphone,
    title: "Réseaux Sociaux",
    description: "Développez votre communauté et engagez votre audience sur toutes les plateformes sociales.",
    features: ["Stratégie de contenu", "Community management", "Création visuelle", "Analytics détaillées"]
  },
  {
    icon: Camera,
    title: "Contenu Créatif",
    description: "Captivez votre audience avec des contenus visuels et vidéos qui racontent votre histoire.",
    features: ["Vidéos professionnelles", "Photographie", "Design graphique", "Storytelling"]
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 border-[#C5A54F] text-[#C5A54F]">
            Nos Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2A32] mb-6">
            Des Solutions <span className="gradient-text">Digitales</span> Complètes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De la stratégie à l&apos;exécution, nous vous accompagnons dans tous les aspects de votre transformation digitale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardHeader className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C5A54F]/10 rounded-2xl mb-4 mx-auto group-hover:bg-[#C5A54F] transition-colors">
                      <IconComponent className="w-8 h-8 text-[#C5A54F] group-hover:text-white transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-[#2D2A32] mb-3">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-500">
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/services">
            <Button size="lg" className="bg-[#C5A54F] hover:bg-[#B8954A] text-white px-8 py-4 group">
              Voir Tous nos Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}