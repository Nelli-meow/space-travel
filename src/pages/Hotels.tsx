import Header from '../components/header.tsx';
import { CanvasStars } from '../components/CanvasStars.tsx';
import Footer from '../components/Footer.tsx';


const Hotels = () => {
  return (
    <main className="relative isolate min-h-screen bg-black pt-32 text-white">
      <Header />
      <CanvasStars />
      <section className=" relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-16">

      </section>
      <Footer />
    </main>
  );
};

export default Hotels;