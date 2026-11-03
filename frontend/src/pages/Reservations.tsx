import Header from '../components/header.tsx';
import { CanvasStars } from '../components/CanvasStars.tsx';
import Footer from '../components/Footer.tsx';
import ReservationSection from '../components/ReservationSection.tsx';

const Reservations = () => {

  return (
    <main className="relative isolate min-h-screen bg-black pt-32 text-white">
      <Header />
      <CanvasStars />
      <ReservationSection/>
      <Footer />
    </main>
  );
};

export default Reservations;
