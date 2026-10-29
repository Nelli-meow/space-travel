import CardSection from '../components/CardSection.tsx';
import Header from '../components/header.tsx';
import Hero from '../components/hero.tsx';
import Manifesto from '../components/Manifesto.tsx';
import JourneyCta from '../components/JourneyCTA.tsx';
import FaqSection from '../components/FAQSection.tsx';
import Footer from '../components/Footer.tsx';

export function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Manifesto />
      <CardSection />
      <FaqSection />
      <JourneyCta />
      <Footer />
    </main>
  );
}
