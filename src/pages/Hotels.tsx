import Header from '../components/header.tsx';
import { CanvasStars } from '../components/CanvasStars.tsx';
import Footer from '../components/Footer.tsx';
import Hotel from '../components/Hotel.tsx';
import { hotels } from '../types/hotels.ts';
import { useState } from 'react';
import { Paginator, type PaginatorPageChangeEvent } from 'primereact/paginator';


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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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