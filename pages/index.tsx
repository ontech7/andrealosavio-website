import Background from "@/components/background";
import Layout from '@/components/layout';

import HeroSection from "@/sections/homepage/hero.section";
import WorkSection from "@/sections/homepage/work.section";

export default function Homepage() {
  return (
    <Layout
      title="Sviluppo siti Web, Consulenza, Collaborazioni, ..."
      description="Vuoi raggiungere più clienti sul web in maniera che il messaggio arrivi in modo semplice, chiaro e preciso ai tuoi clienti? Scopri di più"
    >  
      <HeroSection />

      <Background bgImg="hero" placement="bottom" />

      <WorkSection />

      <Background bgImg="light-short" placement="bottom" />
    </Layout>
  )
}
