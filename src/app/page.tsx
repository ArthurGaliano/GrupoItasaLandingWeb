import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Servicios from '@/components/Servicios';
import Propiedades from '@/components/Propiedades';
import PorQueElegirnos from '@/components/PorQueElegirnos';
import Contacto from '@/components/Contacto';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <Propiedades />
        <PorQueElegirnos />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
