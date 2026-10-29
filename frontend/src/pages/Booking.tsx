import { CanvasStars } from '../components/CanvasStars.tsx';
import Footer from '../components/Footer.tsx';
import Header from '../components/header.tsx';
import BookingForm from '../components/BookingForm.tsx';

const Booking = () => {

  return (
    <main className="relative isolate min-h-screen bg-black pt-32 text-white">
      <Header />
      <CanvasStars />
      <BookingForm/>
      <Footer />
    </main>
  );
};

export default Booking;
