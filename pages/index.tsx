import type { NextPage } from 'next';

import Layout from '@/components/layout';

import CollaborationSection from '@/components/layout/sections/homepage/collaboration';
import DesignSection from "@/components/layout/sections/homepage/design";
import HeroSection from "@/components/layout/sections/homepage/hero";
import WebsiteSection from '@/components/layout/sections/homepage/website';
import WorkSection from "@/components/layout/sections/homepage/work";

const HomePage: NextPage = () => {
  return (
    <Layout
      title="Sviluppo siti Web, Consulenza, Collaborazioni, ..."
      description="Vuoi raggiungere più clienti sul web in maniera che il messaggio arrivi in modo semplice, chiaro e preciso ai tuoi clienti? Scopri di più"
    >  
      <HeroSection />
      <WorkSection />
      <DesignSection />
      <WebsiteSection />
      <CollaborationSection />
    </Layout>
  )
}

export default HomePage;