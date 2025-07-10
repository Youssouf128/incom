'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Users, Eye } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Restaurant Le Palmier",
    category: "Restauration",
    description: "Transformation digitale complète d'un restaurant traditionnel djiboutien avec site web, réseaux sociaux et stratégie SEO.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: {
      traffic: "+250%",
      engagement: "+180%",
      conversions: "+120%"
    },
    services: ["SEO", "Site Web", "Réseaux Sociaux", "Contenu"],
    link: "/portfolio/restaurant-palmier"
  },
  {
    id: 2,
    title: "Clinique Moderne Djibouti",
    category: "Santé",
    description: "Développement d'une stratégie digitale pour améliorer la visibilité et la prise de rendez-vous en ligne.",
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: {
      traffic: "+180%",
      engagement: "+200%",
      conversions: "+150%"
    },
    services: ["SEO", "Google Ads", "Site Web", "Analytics"],
    link: "/portfolio/clinique-moderne"
  },
  {
    id: 3,
    title: "EcoTours Djibouti",
    category: "Tourisme",
    description: "Campagne digitale pour promouvoir l'écotourisme à Djibouti avec contenu immersif et stratégie multicanale.",
    image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: {
      traffic: "+300%",
      engagement: "+220%",
      conversions: "+190%"
    },
    services: ["Contenu Vidéo", "Réseaux Sociaux", "SEO", "Email Marketing"],
    link: "/portfolio/ecotours-djibouti"
  },
  {
    id: 4,
    title: "TechStart Djibouti",
    category: "Technologie",
    description: "Lancement digital d'une startup tech avec stratégie de contenu, lead generation et community building.",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: {
      traffic: "+400%",
      engagement: "+250%",
      conversions: "+200%"
    },
    services: ["Stratégie Digitale", "Lead Generation", "Contenu", "Analytics"],
    link: "/portfolio/techstart-djibouti"
  },
  {
    id: 5,
    title: "Fashion House DJ",
    category: "Mode",
    description: "Stratégie e-commerce et réseaux sociaux pour une marque de mode locale avec focus sur l'engagement client.",
    image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: {
      traffic: "+160%",
      engagement: "+300%",
      conversions: "+140%"
    },
    services: ["E-commerce", "Réseaux Sociaux", "Contenu Visuel", "Influenceurs"],
    link: "/portfolio/fashion-house"
  },
  {
    id: 6,
    title: "Banque Populaire Digital",
    category: "Finance",
    description: "Modernisation de la présence digitale avec focus sur la confiance, la sécurité et l'accessibilité.",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800",
    results: {
      traffic: "+120%",
      engagement: "+160%",
      conversions: "+110%"
    },
    services: ["Site Web", "SEO", "Contenu", "Stratégie Digitale"],
    link: "/portfolio/banque-populaire"
  }
];

const categories = ["Tous", "Restauration", "Santé", "Tourisme", "Technologie", "Mode", "Finance"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section dd */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="outline" className="mb-6 border-[#C5A54F] text-[#C5A54F]">
              Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2A32] mb-6">
              Nos <span className="gradient-text">Réalisations</span> qui Parlent
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez comment nous avons transformé la présence digitale de nos clients avec des résultats concrets et mesurables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#2D2A32] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#C5A54F] mb-2">50+</div>
              <div className="text-gray-300">Projets Réalisés</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#C5A54F] mb-2">+200%</div>
              <div className="text-gray-300">Croissance Moyenne</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#C5A54F] mb-2">98%</div>
              <div className="text-gray-300">Clients Satisfaits</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#C5A54F] mb-2">3</div>
              <div className="text-gray-300">Années d&apos;Expérience</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#C5A54F] text-white">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-[#2D2A32] mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Services */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.services.map((service) => (
                        <Badge key={service} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <TrendingUp className="w-4 h-4 text-[#C5A54F] mr-1" />
                        </div>
                        <div className="text-2xl font-bold text-[#C5A54F]">
                          {project.results.traffic}
                        </div>
                        <div className="text-xs text-gray-500">Trafic</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="w-4 h-4 text-[#C5A54F] mr-1" />
                        </div>
                        <div className="text-2xl font-bold text-[#C5A54F]">
                          {project.results.engagement}
                        </div>
                        <div className="text-xs text-gray-500">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Eye className="w-4 h-4 text-[#C5A54F] mr-1" />
                        </div>
                        <div className="text-2xl font-bold text-[#C5A54F]">
                          {project.results.conversions}
                        </div>
                        <div className="text-xs text-gray-500">Conversions</div>
                      </div>
                    </div>

                    <Link href={project.link}>
                      <Button className="w-full bg-[#C5A54F] hover:bg-[#B8954A] text-white">
                        Voir l&apos;Étude de Cas
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#2D2A32] mb-6">
              Votre Projet Sera le Prochain Success Story
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez nos clients satisfaits et transformez votre présence digitale avec des résultats concrets et mesurables.
            </p>
            <Link href="/contact">  
              <Button size="lg" className="bg-[#C5A54F] hover:bg-[#B8954A] text-white px-8 py-4">
                Commencer votre Projet
              </Button>
            </Link>

          </motion.div>
        </div>
      </section>
    </div>
  );
}