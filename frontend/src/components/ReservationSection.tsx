import { useQuery } from '@tanstack/react-query';
import { getReservations } from '../api/reservations.ts';
import { RevealOnScroll } from './RevealOnScroll.tsx';
import { Paginator, type PaginatorPageChangeEvent } from 'primereact/paginator';
import { useState } from 'react';

const ReservationSection = () => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(9);

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
    <>
      <RevealOnScroll>
        {isPending && (
          <p className="text-sm text-gray-400 text-center">Loading reservations...</p>
        )}

        {isError && (
          <p className="text-sm text-red-400 text-center">
            Could not load reservations. Please try again.
          </p>
        )}
        {!isPending && !isError && reservations?.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center backdrop-blur-xl">
            <p className="mb-3 text-3xl">✦</p>
            <h2 className="text-xl font-medium">No reservations yet</h2>
            <p className="mt-2 text-sm text-gray-400">
              Your next journey is waiting among the stars.
            </p>
          </div>
        )}

        {!isPending && !isError && reservations && reservations.length > 0 && (
          <div>
            <div className="grid gap-5 md:grid-cols-2 m-10">
              {visibleReservations?.map((reservation) => (
                <article
                  key={reservation.id}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/30 hover:bg-white/[0.055]"
                >
                  <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-emerald-300">
                    Confirmed
                  </span>

                    <span className="font-mono text-xs text-gray-500">
                    #{reservation.id.slice(0, 8).toUpperCase()}
                  </span>
                  </div>

                  <div className="mb-7">
                    <p className="mb-2 font-mono text-[10px] tracking-[0.25em] text-cyan-400">
                      DESTINATION
                    </p>

                    <h2 className="text-3xl font-medium tracking-tight">
                      {reservation.destinationSlug}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-5 border-t border-white/10 pt-5">
                    <div>
                      <p className="mb-1 text-xs text-gray-500">HOTEL</p>
                      <p className="text-sm text-gray-200">
                        {reservation.hotelSlug}
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs text-gray-500">VESSEL</p>
                      <p className="text-sm text-gray-200">
                        {reservation.shipSlug}
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs text-gray-500">DEPARTURE</p>
                      <p className="text-sm text-gray-200">
                        {reservation.departure}
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 text-xs text-gray-500">TRAVELERS</p>
                      <p className="text-sm text-gray-200">
                        {reservation.guests}{' '}
                        {reservation.guests === 1 ? 'guest' : 'guests'}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <Paginator
              className="mt-10 bg-transparent"
              first={first}
              rows={rows}
              totalRecords={reservations.length}
              rowsPerPageOptions={[9, 18, 27]}
              onPageChange={onPageChange}
            />
          </div>

        )}
      </RevealOnScroll>
    </>
  );
};

export default ReservationSection;