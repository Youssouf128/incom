'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Heart } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  
  {
    name: "MOHAMED GOHAR",
    position: "CHIEF EXECUTIVE",
    image: "https://i.pinimg.com/736x/dd/dd/05/dddd056bcc9da783bf4bafe4d6b76a64.jpg",
    linkedin: "https://www.linkedin.com/in/mohamed-gohar-hamadou-260a17134/"
  },
  {
    name: "Amina HOUMED HASSAN",
    position: "Directrice Générale",
    image: "/images/team/directrice.jpg",
    linkedin: "https://www.linkedin.com/in/amina-houmed-hassan-4a4174135/"
  },
  {
    name: "EMELI WAHIB",
    position: "Créatrice de Contenu",
    image: "https://i.pinimg.com/736x/b6/8c/38/b68c38a6ad1776cb7c0c570d48c89951.jpg",
    linkedin: "https://www.linkedin.com/in/amina-houmed-hassan-4a4174135/"
  },
  {
    name: "CHEIMA SAMAKABE",
    position: "ASSISTANTE GESTION DE PROJET",
    image: "https://i.pinimg.com/736x/0d/ab/5d/0dab5dd2fe987d3fea31e1c49b638dc9.jpg",
    linkedin: "#"
  }
];

const values = [
  {
    icon: Target,
    title: "Innovation",
    description: "Nous adoptons les dernières technologies et stratégies pour offrir des solutions innovantes."
  },
  {
    icon: Heart,
    title: "Transparence",
    description: "Une communication claire et honnête avec nos clients est au cœur de nos relations."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque projet pour dépasser les attentes de nos clients."
  },
  {
    icon: Users,
    title: "Engagement",
    description: "Nous nous engageons pleinement dans le succès de nos clients et partenaires."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6 border-[#C5A54F] text-[#C5A54F]">
              À Propos de Nous
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2A32] mb-6">
              L&apos;Agence qui <span className="gradient-text">Transforme</span> votre Vision
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Basée au cœur de Djibouti, in&apos;COM est votre partenaire privilégié pour conquérir l&apos;espace digital et propulser votre entreprise vers de nouveaux sommets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#2D2A32] mb-6">
                Notre Histoire & Mission
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  in&apos;COM est un cabinet de Communication et Marketing qui propose d&apos;accompagner les structures de toutes tailles et de tous secteurs dans la définition et la mise en place de leurs stratégies marketing.
                </p>
                <p>
                  Le cabinet propose de contribuer au rayonnement des entreprises et des marques tout en les accompagnant dans leur transition numérique avec l&apos;élaboration d&apos;une stratégie de communication digitale sur mesure.
                </p>
                <p>
                  Nous proposons une offre de communication complète allant de la mise en place d&apos;une stratégie com à la création de contenus (infographie, printing, branding, community management…etc) en passant par le développement web et E-marketing, et le tout en positionnant la relation client au coeur de notre offre
                </p>
                <p>
                  La connaissance de la cible est incontournable dans l&apos;adaptation des contenus marketing et des supports à utiliser. Nous prenons le temps d&apos;analyser votre structure afin de définir votre stratégie de content marketing
                </p>
                <p>
                  Nos experts se chargent de la production de tous vos contenus qu&apos;ils soient textuels ou graphiques en respect avec vos cibles et vos supports papiers (flyer, brochure, carte de visite, magazine, rapports annuels, catalogue) ou web, (infographie, web design, community management, newsletter).
                </p>
                <p>
                  Nous proposant également l&apos;oganisation d&apos;évènements de qualité (seminaires, Ateliers, lancement produit, inauguration, salons…etc) & Developpement de votre notoriété et réputation auprès d&apos;un large public (Production de photos & videos, Teaser)
                </p>
                <p>
                  Notre positionnement nous permets de vous proposer une large gamme de services qui vous permettra de pouvoir centraliser toute votre communication et ainsi maximiser les résultats attendus.
                </p>

              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://i.pinimg.com/736x/dd/dd/05/dddd056bcc9da783bf4bafe4d6b76a64.jpg"
                alt="Équipe in&apos;COM au travail"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#C5A54F] text-white p-6 rounded-xl">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Clients Satisfaits</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-6 border-[#C5A54F] text-[#C5A54F]">
              Notre Équipe
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2A32] mb-6">
              Les Experts qui Donnent Vie à vos Projets
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe passionnée et experte, unie par la même vision : faire de votre succès digital une réalité.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={120}
                        height={120}
                        className="rounded-full mx-auto object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2D2A32] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#C5A54F] font-medium mb-4">
                      {member.position}
                    </p>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center text-gray-600 hover:text-[#C5A54F] transition-colors"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-6 border-[#C5A54F] text-[#C5A54F]">
              Nos Valeurs
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2A32] mb-6">
              Les Fondements de Notre Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ces valeurs guident chacune de nos actions et constituent l&apos;essence de notre approche client.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                    <CardContent className="p-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C5A54F]/10 rounded-2xl mb-6">
                        <IconComponent className="w-8 h-8 text-[#C5A54F]" />
                      </div>
                      <h3 className="text-xl font-semibold text-[#2D2A32] mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}