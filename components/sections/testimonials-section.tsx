'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: "Ahmed Hassan",
    company: "Restaurant Le Palmier",
    position: "Propriétaire",
    content: "Grâce à in'COM, notre restaurant a doublé sa clientèle en 6 mois. Leur expertise en marketing digital est remarquable, et ils comprennent parfaitement le marché djiboutien.",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5
  },
  {
    name: "Dr. Fatima Ali",
    company: "Clinique Moderne Djibouti",
    position: "Directrice",
    content: "L'équipe d'in'COM a transformé notre présence en ligne. Nous recevons maintenant 3 fois plus de demandes de rendez-vous en ligne. Un service professionnel et des résultats concrets.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5
  },
  {
    name: "Omar Said",
    company: "EcoTours Djibouti",
    position: "Fondateur",
    content: "in'COM a donné une nouvelle dimension à notre agence de voyage. Leur stratégie sur les réseaux sociaux a multiplié nos réservations par 4. Je recommande vivement !",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5
  },
  {
    name: "Khadija Mohamed",
    company: "Fashion House DJ",
    position: "Creative Director",
    content: "Leur approche créative et leur compréhension de notre marché local nous ont permis d'atteindre une clientèle que nous n'aurions jamais touchée autrement. Excellente collaboration !",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
            Témoignages Clients
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D2A32] mb-6">
            Ce que Disent nos <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre plus belle récompense. Découvrez leurs témoignages authentiques.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="text-center relative overflow-hidden">
              <CardContent className="p-12">
                <Quote className="w-12 h-12 text-[#C5A54F]/30 mx-auto mb-6" />
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#C5A54F] fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 italic">
                  &quot;{testimonials[currentIndex].content}&quot;
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-[#2D2A32] text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-[#C5A54F] font-medium">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#C5A54F]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}