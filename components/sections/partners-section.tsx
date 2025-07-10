'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const partners = [
  { name: "Google Partner", logo: "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" },
  { name: "Facebook Business", logo: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" },
  { name: "Microsoft Partner", logo: "https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png" },
  { name: "LinkedIn Partner", logo: "https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png" },
  { name: "Shopify Partner", logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png" }
];

export function PartnersSection() {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-6 border-[#C5A54F] text-[#C5A54F]">
            Nos Partenaires
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D2A32] mb-6">
            Des <span className="gradient-text">Partenariats</span> de Confiance
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les leaders mondiaux du digital pour vous offrir les meilleures solutions technologiques.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-white rounded-xl hover:shadow-lg transition-shadow duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={60}
                className="max-h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}