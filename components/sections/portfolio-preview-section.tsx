'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Restaurant Le Palmier",
    category: "Restauration",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
    result: "+250% de trafic"
  },
  {
    title: "Clinique Moderne",
    category: "Santé",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
    result: "+180% de patients"
  },
  {
    title: "EcoTours Djibouti",
    category: "Tourisme",
    image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600",
    result: "+300% de réservations"
  },
  {
    title: "TechStart DJ",
    category: "Technologie",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
    result: "+400% de leads"
  }
];

export function PortfolioPreviewSection() {
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
            Nos Réalisations
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2A32] mb-6">
            Des <span className="gradient-text">Succès</span> qui Parlent d&apos;Eux-Mêmes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment nous avons transformé la présence digitale de nos clients avec des résultats concrets et mesurables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-[#2D2A32] text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#C5A54F] text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {project.result}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#2D2A32] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Transformation digitale complète avec résultats exceptionnels
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link href="/portfolio">
            <Button size="lg" className="bg-[#C5A54F] hover:bg-[#B8954A] text-white px-8 py-4 group">
              Voir Tout notre Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}