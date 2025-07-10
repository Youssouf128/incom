'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, Award } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: "Expertise Locale",
    description: "Une connaissance approfondie du marché djiboutien et de ses spécificités culturelles pour des stratégies adaptées et efficaces."
  },
  {
    icon: Users,
    title: "Approche sur Mesure",
    description: "Chaque projet est unique. Nous développons des solutions personnalisées qui correspondent exactement à vos objectifs et votre budget."
  },
  {
    icon: Award,
    title: "Résultats Garantis",
    description: "Notre engagement : des résultats mesurables et un ROI positif. Nous ne nous satisfaisons que de votre réussite digitale."
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 border-[#C5A54F] text-[#C5A54F]">
            Pourquoi Nous Choisir
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2A32] mb-6">
            L&apos;Excellence au Service de votre <span className="gradient-text">Succès</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les trois piliers qui font de in&apos;COM votre partenaire idéal pour conquérir l&apos;espace digital à Djibouti.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C5A54F]/10 rounded-full mb-6">
                      <IconComponent className="w-10 h-10 text-[#C5A54F]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#2D2A32] mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}