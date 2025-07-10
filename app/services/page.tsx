'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

import { 
  Search, 
  Target, 
  Megaphone, 
  Camera, 
  PenTool, 
  BarChart3, 
  Globe, 
  Mail,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: "Référencement Naturel (SEO)",
    description: "Optimisez votre visibilité sur Google et attirez un trafic qualifié vers votre site web.",
    features: [
      "Audit SEO complet de votre site",
      "Recherche et optimisation des mots-clés",
      "Optimisation technique et de contenu",
      "Création de backlinks de qualité",
      "Rapports mensuels détaillés"
    ],
    videoId: "VRMeQ9rCW8k",
    link: "/services/seo"
  },
  {
    icon: Target,
    title: "Publicité en Ligne (SEA)",
    description: "Maximisez votre ROI avec des campagnes publicitaires ciblées sur Google Ads et les réseaux sociaux.",
    features: [
      "Stratégie publicitaire personnalisée",
      "Création et gestion des campagnes",
      "Optimisation continue des performances",
      "Ciblage précis de votre audience",
      "Reporting et analyse des résultats"
    ],
    link: "/services/seo"
  },
  {
    icon: Megaphone,
    title: "Gestion des Réseaux Sociaux",
    description: "Développez votre communauté et engagez votre audience sur Facebook, Instagram, LinkedIn et TikTok.",
    features: [
      "Stratégie de contenu adaptée",
      "Création de visuels attractifs",
      "Planification et publication",
      "Community management",
      "Analyse des performances"
    ],
    link: "/services/seo"
  },
  {
    icon: Camera,
    title: "Création de Contenu Vidéo",
    description: "Captivez votre audience avec des vidéos professionnelles qui racontent votre histoire.",
    features: [
      "Conception et scénarisation",
      "Tournage professionnel",
      "Montage et post-production",
      "Vidéos pour réseaux sociaux",
      "Contenus promotionnels"
    ],
    link: "/services/seo"
  },
  {
    icon: PenTool,
    title: "Stratégie de Contenu",
    description: "Développez une stratégie de contenu qui engage et convertit votre audience cible.",
    features: [
      "Audit de contenu existant",
      "Calendrier éditorial personnalisé",
      "Création de contenu optimisé",
      "Storytelling de marque",
      "Mesure de l'engagement"
    ],
    link: "/services/seo"
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Mesurez l'impact de vos actions digitales avec des rapports détaillés et actionables.",
    features: [
      "Configuration Google Analytics",
      "Tableaux de bord personnalisés",
      "Rapports mensuels détaillés",
      "Recommandations d'optimisation",
      "Suivi des KPIs métier"
    ],
    link: "/services/seo"
  },
  {
    icon: Globe,
    title: "Création de Sites Web",
    description: "Développez votre présence en ligne avec un site web moderne, responsive et optimisé.",
    features: [
      "Design responsive et moderne",
      "Optimisation SEO intégrée",
      "Intégration CMS facile",
      "Sécurité et performance",
      "Maintenance et support"
    ],
    link: "/services/seo"
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Fidélisez vos clients et prospects avec des campagnes email ciblées et personnalisées.",
    features: [
      "Stratégie d'email marketing",
      "Design de newsletters attractives",
      "Segmentation de base de données",
      "Automatisation des campagnes",
      "Analyse des performances"
    ],
    link: "/services/seo"
  }
];

export default function ServicesPage() {
  
const router = useRouter();

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
              Nos Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2A32] mb-6">
              Des Solutions <span className="gradient-text">Digitales</span> Complètes
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              De la stratégie à l&apos;exécution, nous vous accompagnons dans tous les aspects de votre transformation digitale pour maximiser votre impact en ligne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
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
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-[#C5A54F]/10 rounded-xl">
                          <IconComponent className="w-6 h-6 text-[#C5A54F]" />
                        </div>
                        <CardTitle className="text-2xl text-[#2D2A32]">
                          {service.title}
                        </CardTitle>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#C5A54F] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {service.videoId && (
                        <div className="mb-6">
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <iframe
                              src={`https://www.youtube.com/embed/${service.videoId}`}
                              title={`Vidéo explicative - ${service.title}`}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                        </div>
                      )}
                      
                      <Button 
                        className="w-full bg-[#C5A54F] hover:bg-[#B8954A] text-white"
                        onClick={() => router.push(service.link)}
                      >
                        En Savoir Plus
                      </Button>

                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
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
              Prêt à Transformer votre Présence Digitale ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez-nous dès aujourd&apos;hui pour une consultation gratuite et découvrez comment nous pouvons propulser votre entreprise vers de nouveaux sommets.
            </p>
            <Button size="lg" className="bg-[#C5A54F] hover:bg-[#B8954A] text-white px-8 py-4">
              Demander une Consultation Gratuite
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}