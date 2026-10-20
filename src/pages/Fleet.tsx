import Footer from '../components/Footer.tsx';
import Header from '../components/header.tsx';
import ShipCard from '../components/Ship.tsx';
import { CanvasStars } from '../components/CanvasStars.tsx';
import { ships } from '../types/fleet.ts';


const Fleet = () => {
  return (
    <main className="relative isolate min-h-screen bg-black pt-32 text-white">
      <Header />
      <CanvasStars />
      <section className=" relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16">
        {ships.map((ship) => (
          <ShipCard key={ship.slug} ship={ship} />
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default Fleet;
