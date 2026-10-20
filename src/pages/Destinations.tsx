import Header from '../components/header.tsx';
import Footer from '../components/Footer.tsx';
import Card from '../components/Card.tsx';
import { destinations } from '../types/destination.ts';



const Destinations = () => {
  return (
    <main className="min-h-screen bg-black pt-32 text-white">
      <Header />
      <section className=" mx-auto flex flex-col gap-6  pb-16">
        <div className="flex w-full flex-col">
          {destinations.map((destination, index) => (
            <Card
              key={destination.title}
              destination={destination}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Destinations;