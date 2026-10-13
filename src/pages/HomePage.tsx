import CardSection from '../components/CardSection.tsx';
import Header from '../components/header.tsx';
import Hero from '../components/hero.tsx';
import Manifesto from '../components/Manifesto.tsx';

export function HomePage() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Manifesto />
      <CardSection />
    </main>
  );
}
