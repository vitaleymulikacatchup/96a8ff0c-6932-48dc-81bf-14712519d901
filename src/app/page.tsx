"use client"
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Users, Handshake, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Inicio", id: "hero" },
            { name: "Nosotros", id: "about" },
            { name: "Equipo", id: "team" },
            { name: "Reservas", id: "contact" }
          ]}
          brandName="Hanbok"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Tradición Japonesa en Madrid"
          description="Descubra la auténtica cocina coreana en el corazón de Madrid. Respetamos los valores tradicionales y ofrecemos una experiencia gastronómica única que honra nuestro patrimonio cultural."
          tag="Hanbok Restaurant"
          tagIcon={Sparkles}
          buttons={[
            { text: "Hacer Reserva", href: "contact" },
            { text: "Ver Menú", href: "menu" }
          ]}
          imageSrc="https://images.pexels.com/photos/8351667/pexels-photo-8351667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Interior tradicional del restaurante coreano Hanbok"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Nuestra Historia"
          description={[
            "Fundado en Madrid por una familia coreana que llegó hace más de dos décadas, Hanbok nació del deseo de compartir la auténtica tradición culinaria de Corea.",
            "Cada plato que servimos está impregnado de respeto por nuestros ancestros y los valores tradicionales coreanos. Utilizamos ingredientes auténticos importados directamente de Corea y técnicas transmitidas de generación en generación.",
            "En Hanbok, no solo ofrecemos comida, sino una experiencia cultural que conecta España con el corazón de Corea."
          ]}
          showBorder={true}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Nuestro Equipo"
          description="Conoce a las personas que hacen posible la experiencia Hanbok"
          tag="Familia Hanbok"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Chef Kim Min-jun",
              role: "Chef Ejecutivo",
              imageSrc: "https://images.pexels.com/photos/20036081/pexels-photo-20036081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Retrato del Chef Kim Min-jun",
              socialLinks: [
                { icon: Instagram, url: "https://instagram.com/chefkimminjun" }
              ]
            },
            {
              id: "2",
              name: "Park Soo-jin",
              role: "Gerente General",
              imageSrc: "https://images.pexels.com/photos/3770093/pexels-photo-3770093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Retrato de Park Soo-jin",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com/in/parksoojin" }
              ]
            },
            {
              id: "3",
              name: "Lee Hye-rin",
              role: "Jefa de Servicio",
              imageSrc: "https://images.pexels.com/photos/6327560/pexels-photo-6327560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Retrato de Lee Hye-rin",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com/leehyerin" }
              ]
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Colaboradores y Socios"
          description="Trabajamos con los mejores proveedores para garantizar la autenticidad de nuestros platos"
          tag="Alianzas"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/18203253/pexels-photo-18203253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/31826559/pexels-photo-31826559.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/28349061/pexels-photo-28349061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18424851/pexels-photo-18424851.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1292294/pexels-photo-1292294.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6006990/pexels-photo-6006990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/8851560/pexels-photo-8851560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Hacer una Reserva"
          description="Reserve su mesa en Hanbok y disfrute de una experiencia gastronómica auténtica coreana en Madrid. Estaremos encantados de recibirle."
          inputs={[
            { name: "nombre", type: "text", placeholder: "Nombre completo", required: true },
            { name: "telefono", type: "tel", placeholder: "Teléfono", required: true },
            { name: "email", type: "email", placeholder: "Email", required: true },
            { name: "fecha", type: "date", placeholder: "Fecha de reserva", required: true },
            { name: "personas", type: "number", placeholder: "Número de personas", required: true }
          ]}
          textarea={{
            name: "comentarios",
            placeholder: "Comentarios especiales o restricciones alimentarias...",
            rows: 4,
            required: false
          }}
          buttonText="Confirmar Reserva"
          imageSrc="https://images.pexels.com/photos/323910/pexels-photo-323910.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Sala de comedor del restaurante Hanbok"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Restaurante",
              items: [
                { label: "Menú", href: "menu" },
                { label: "Reservas", href: "contact" },
                { label: "Eventos", href: "eventos" }
              ]
            },
            {
              title: "Información",
              items: [
                { label: "Nosotros", href: "about" },
                { label: "Ubicación", href: "ubicacion" },
                { label: "Horarios", href: "horarios" }
              ]
            },
            {
              title: "Contacto",
              items: [
                { label: "Teléfono: +34 911 234 567", href: "tel:+34911234567" },
                { label: "Email: info@hanbok.es", href: "mailto:info@hanbok.es" },
                { label: "Dirección", href: "ubicacion" }
              ]
            }
          ]}
          copyrightText="© 2025 Hanbok Restaurant | Madrid, España"
        />
      </div>
    </ThemeProvider>
  );
}