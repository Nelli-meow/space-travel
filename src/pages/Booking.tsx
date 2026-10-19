import Footer from '../components/Footer.tsx';
import Header from '../components/header.tsx';
import ShipCard from '../components/Ship.tsx';
import type { Ship } from '../components/Ship.tsx';

const ships: Ship[] = [
  {
    eyebrow: 'Earth-Mars shuttle',
    name: 'Horizon I',
    capacity: '12 guests',
    speed: '28,000 km/h',
    range: 'LEO — Mars orbit',
    comfort: 5,
    amenities: [
      'Pressurized observation dome',
      'Zero-G dining suite',
      'Private sleeping quarters',
      'On-board medical bay',
    ],
    backdrop: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1400&h=800&fit=crop&auto=format'
  },
  {
    eyebrow: 'Deep space cruiser',
    name: 'Aether II',
    capacity: '6 guests',
    speed: '52,000 km/h',
    range: 'Mars — Saturn orbit',
    comfort: 5,
    amenities: [
      'Deep-space certified hull',
      'Radiation-shielded suites',
      'On-board sommelier',
      'VR recreation bay',
    ],
    backdrop:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1400&h=800&fit=crop&auto=format',
  },
  {
    eyebrow: 'Lunar shuttle',
    name: 'Celestia III',
    capacity: '20 guests',
    speed: '18,500 km/h',
    range: 'LEO — Lunar orbit',
    comfort: 4,
    amenities: [
      'Grand observation lounge',
      'Michelin-starred kitchen',
      'Spa & wellness deck',
      'Lunar surface rated',
    ],
    backdrop: 'https://images.unsplash.com/photo-1770819372130-351294e3340e?w=1400&h=800&fit=crop&auto=format'
  },
];

const Booking = () => {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      <Header />
      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16">
        {ships.map((ship) => (
          <ShipCard key={ship.name} ship={ship} />
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default Booking;
