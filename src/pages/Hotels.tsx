import Header from '../components/header.tsx';
import { CanvasStars } from '../components/CanvasStars.tsx';
import Footer from '../components/Footer.tsx';
import Hotel from '../components/Hotel.tsx';
import { hotels } from '../types/hotels.ts';


const Hotels = () => {
  return (
    <main className="relative isolate min-h-screen bg-black pt-32 text-white">
      <Header />
      <CanvasStars />
      <section className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel) => (
          <Hotel hotel={hotel} key={hotel.slug}/>
        ))}
      </section>
      <Footer />
    </main>
  );
};

export default Hotels;