import { useQuery } from '@tanstack/react-query';
import { getReservations } from '../api/reservations.ts';
import { RevealOnScroll } from './RevealOnScroll.tsx';
import { Paginator, type PaginatorPageChangeEvent } from 'primereact/paginator';
import { useState } from 'react';
import { ships } from '../types/fleet.ts';
import { hotels } from '../types/hotels.ts';
import { destinations } from '../types/destination.ts';

const formatDeparture = (value: string) => {
  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date);
};

const ReservationSection = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  const {
    data: reservations,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['reservations'],
    queryFn: getReservations,
  });

  console.log(reservations);

  const visibleReservations = reservations?.slice(first, first + rows);

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 pb-28">
      <RevealOnScroll>
        <p className="text-[11px] tracking-[0.28em] text-[#67d4e0] uppercase">
          Manifest
        </p>
        <h1 className="mt-4 font-['Playfair_Display',serif] text-5xl leading-none font-medium">
          Reservations
        </h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
          Each passage is logged as a boarding slip. The stars keep the rest.
        </p>

        {isPending && (
          <p className="mt-16 text-center text-sm tracking-[0.18em] text-white/40 uppercase">
            Loading reservations
          </p>
        )}

        {isError && (
          <p className="mt-16 text-center text-sm text-red-400">
            Could not load reservations
          </p>
        )}

        {!isPending && !isError && reservations?.length === 0 && (
          <div className="mt-16 border-y border-white/10 py-16 text-center">
            <p className="text-[#e6c15a]">✦</p>
            <h2 className="mt-4 font-['Playfair_Display',serif] text-3xl">
              No reservations yet
            </h2>
            <p className="mt-3 text-sm text-white/45">
              Your next journey is waiting among the stars.
            </p>
          </div>
        )}

        {!isPending && !isError && reservations && reservations.length > 0 && (
          <div className="mt-14">
            <ol className="flex flex-col gap-4">
              {visibleReservations?.map((reservation) => {
                const destination = destinations.find(
                  (item) => item.slug === reservation.destinationSlug,
                );
                const hotel = hotels.find(
                  (item) => item.slug === reservation.hotelSlug,
                );
                const ship = ships.find(
                  (item) => item.slug === reservation.shipSlug,
                );

                return (
                  <li
                    key={reservation.id}
                    className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-7 sm:grid-cols-[minmax(0,1fr)_9.5rem] sm:gap-8 sm:px-8"
                  >
                    <div>
                      <p className="text-[11px] tracking-[0.22em] text-[#67d4e0] uppercase">
                        {formatDeparture(reservation.departure)}
                      </p>
                      <h2 className="mt-3 font-['Playfair_Display',serif] text-4xl leading-none">
                        {destination?.title ?? reservation.destinationSlug}
                      </h2>
                      <p className="mt-4 text-sm text-white/70">
                        {hotel?.name ?? reservation.hotelSlug}
                      </p>
                      <p className="mt-1 text-sm text-white/45">
                        {ship?.name ?? reservation.shipSlug}
                        <span className="px-2 text-white/20">·</span>
                        {reservation.guests}{' '}
                        {reservation.guests === 1 ? 'guest' : 'guests'}
                      </p>
                    </div>

                    <div className="flex items-end justify-between gap-4 border-white/15 sm:flex-col sm:items-end sm:justify-between sm:border-l sm:border-dashed sm:pl-6">
                      <p className="text-[10px] tracking-[0.28em] text-white/35 uppercase">
                        Confirmed
                      </p>
                      <p className="font-mono text-sm tracking-[0.14em] text-[#e6c15a]">
                        #{reservation.id.slice(0, 8).toUpperCase()}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <Paginator
              className="mt-8 bg-transparent"
              first={first}
              rows={rows}
              totalRecords={reservations.length}
              rowsPerPageOptions={[5, 10, 15]}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </RevealOnScroll>
    </section>
  );
};

export default ReservationSection;
