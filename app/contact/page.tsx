'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_53dvhb4',
      'template_upvoz44',
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      },
      'toTcm0Fv3YPZLqinf'
    ).then(() => {
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }).catch(() => {
      setSubmitStatus('error');
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

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
              Contactez-Nous
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-[#2D2A32] mb-6">
              Parlons de votre <span className="gradient-text">Projet</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nous sommes là pour transformer vos idées en succès digital. Contactez-nous dès aujourd&apos;hui pour une consultation gratuite.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C5A54F]/10 rounded-2xl mb-6">
                    <MapPin className="w-8 h-8 text-[#C5A54F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D2A32] mb-4">Adresse</h3>
                  <p className="text-gray-600">
                    route de kempinski, Ilot du heron<br />
                    Djibouti, République de Djibouti
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C5A54F]/10 rounded-2xl mb-6">
                    <Phone className="w-8 h-8 text-[#C5A54F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D2A32] mb-4">Téléphone</h3>
                  <p className="text-gray-600">
                    +253 21 34 70 40<br />
                    +253 77 11 18 18
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C5A54F]/10 rounded-2xl mb-6">
                    <Mail className="w-8 h-8 text-[#C5A54F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D2A32] mb-4">Email</h3>
                  <p className="text-gray-600">
                    contact@cabinet-incom.com<br />
                    info@incom.dj
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#C5A54F]/10 rounded-2xl mb-6">
                    <Clock className="w-8 h-8 text-[#C5A54F]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2D2A32] mb-4">Horaires</h3>
                  <p className="text-gray-600">
                    Lun-Ven: 8h00 - 17h00<br />
                    Sam: 9h00 - 13h00
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2D2A32] flex items-center gap-3">
                    <MessageCircle className="w-6 h-6 text-[#C5A54F]" />
                    Envoyez-nous un Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                      Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                      Une erreur est survenue. Veuillez réessayer plus tard.
                    </div>
                  )}

                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Prénom *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nom *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="votre@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+253 77 12 34 56"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Nom de l&apos;Entreprise</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Votre entreprise"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Votre Besoin / Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Décrivez votre projet ou vos besoins..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#C5A54F] hover:bg-[#B8954A] text-white py-3"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#2D2A32] flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-[#C5A54F]" />
                    Notre Localisation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1954.0938956849936!2d43.14632111044743!3d11.609957511291427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1623013fb873be0b%3A0x151f2d4c14fa7b82!2sCabinet%20in&#39;COM%20-%20Communication%20%26%20Marketing!5e0!3m2!1sfr!2sfr!4v1751096499436!5m2!1sfr!2sfr"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localisation in'COM Djibouti"
                    />
                  </div>
                  <div className="mt-6 space-y-3">
                    <p className="text-gray-600">
                      <strong>Adresse complète :</strong><br />
                      route de kempinski, Ilot du heron<br />
                      République de Djibouti
                    </p>
                    <p className="text-gray-600">
                      <strong>Points de repère :</strong><br />
                      Près de Supermarché Cash center
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}