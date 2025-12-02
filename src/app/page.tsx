import HeaderNavigation from '@/components/sections/header-navigation';
import HeroSection from '@/components/sections/hero-section';
import CoreServices from '@/components/sections/core-services';
import ObservabilityStack from '@/components/sections/observability-stack';
import DataEngineeringSection from '@/components/sections/data-engineering';
import MvpDevelopment from '@/components/sections/mvp-development';
import ContactSection from '@/components/sections/contact-section';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeaderNavigation />
      <main>
        <HeroSection />
        <CoreServices />
        <ObservabilityStack />
        <DataEngineeringSection />
        <MvpDevelopment />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}