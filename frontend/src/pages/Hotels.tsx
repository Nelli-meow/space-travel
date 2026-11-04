import Header from '../components/header.tsx';
import { CanvasStars } from '../components/CanvasStars.tsx';
import Footer from '../components/Footer.tsx';
import Hotel from '../components/Hotel.tsx';
import { hotels } from '../types/hotels.ts';
import { useState } from 'react';
import { Paginator, type PaginatorPageChangeEvent } from 'primereact/paginator';
import { RevealOnScroll } from '../components/RevealOnScroll.tsx';


const Hotels = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(9);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const visibleHotels = hotels.slice(first, first + rows);

  return (
    <main className="relative isolate min-h-screen bg-black pt-32 text-white">
      <Header />
      <CanvasStars />
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-16">
        <RevealOnScroll>
          <p className="text-[11px] tracking-[0.28em] text-[#67d4e0] uppercase relative">
            Manifest
          </p>
          <h1 className="mt-4 font-['Playfair_Display',serif] text-5xl leading-none font-medium relative">
            Hotels
          </h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/45 relative">
            A sanctuary among the stars. Every stay is a world of its own.
          </p>
        </RevealOnScroll>


        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-14">
          {visibleHotels.map((hotel) => (
            <Hotel hotel={hotel} key={hotel.slug} />
          ))}
        </div>

        <Paginator
          className="mt-10 bg-transparent"
          first={first}
          rows={rows}
          totalRecords={hotels.length}
          rowsPerPageOptions={[9, 18, 27]}
          onPageChange={onPageChange}
        />
      </section>
      <Footer />
    </main>
  );
};

export default Hotels;