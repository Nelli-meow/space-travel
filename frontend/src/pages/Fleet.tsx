import Footer from '../components/Footer.tsx';
import Header from '../components/header.tsx';
import ShipCard from '../components/Ship.tsx';
import { CanvasStars } from '../components/CanvasStars.tsx';
import { ships } from '../types/fleet.ts';
import { useState } from 'react';
import { Paginator, type PaginatorPageChangeEvent } from 'primereact/paginator';
import { RevealOnScroll } from '../components/RevealOnScroll.tsx';


const Fleet = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const visibleHotels = ships.slice(first, first + rows);

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
            Spaceships
          </h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/45 relative">
            Every vessel holds a passage beyond the stars. The journey is yours to define.
          </p>
        </RevealOnScroll>

        <div className="flex max-w-6xl flex-col gap-6 mt-14">
          {visibleHotels.map((ship) => (
            <ShipCard key={ship.slug} ship={ship} />
          ))}
        </div>

        <Paginator
          className="mt-10 bg-transparent"
          first={first}
          rows={rows}
          totalRecords={ships.length}
          rowsPerPageOptions={[5, 10, 15]}
          onPageChange={onPageChange}
        />
      </section>
      <Footer />
    </main>
  );
};

export default Fleet;
