import { type FormEvent, useState } from 'react';
import { CanvasStars } from '../components/CanvasStars.tsx';
import Footer from '../components/Footer.tsx';
import Header from '../components/header.tsx';
import { destinations } from '../types/destination.ts';
import { ships } from '../types/fleet.ts';
import { hotels } from '../types/hotels.ts';

const fieldClassName =
  'h-12 w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 text-sm text-white outline-none [color-scheme:dark] focus:border-[#67d4e0]';

const Booking = () => {
  const [destinationSlug, setDestinationSlug] = useState('');
  const [hotelSlug, setHotelSlug] = useState('');
  const [shipSlug, setShipSlug] = useState('');
  const [departure, setDeparture] = useState('');
  const [guests, setGuests] = useState('2');

  const destination = destinations.find(
    (item) => item.slug === destinationSlug,
  );
  const hotel = hotels.find((item) => item.slug === hotelSlug);
  const ship = ships.find((item) => item.slug === shipSlug);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main className="relative isolate min-h-screen bg-black pt-32 text-white">
      <Header />
      <CanvasStars />
      <section className="relative z-10 mx-auto max-w-xl px-6 pb-24">
        <p className="text-[11px] tracking-[0.28em] text-[#67d4e0] uppercase">
          Reserve
        </p>
        <h1 className="mt-4 font-['Playfair_Display',serif] text-5xl leading-none font-medium">
          Plan your journey
        </h1>
        <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
          Choose where you travel, where you stay, and how you fly.
        </p>

        <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="mb-2 block text-[11px] tracking-[0.18em] text-white/40 uppercase">
              Destination
            </span>
            <select
              className={fieldClassName}
              value={destinationSlug}
              onChange={(event) => setDestinationSlug(event.target.value)}
            >
              <option value="">Select a planet</option>
              {destinations.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-[11px] tracking-[0.18em] text-white/40 uppercase">
              Stay
            </span>
            <select
              className={fieldClassName}
              value={hotelSlug}
              onChange={(event) => setHotelSlug(event.target.value)}
            >
              <option value="">Select a hotel</option>
              {hotels.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-[11px] tracking-[0.18em] text-white/40 uppercase">
              Vessel
            </span>
            <select
              className={fieldClassName}
              value={shipSlug}
              onChange={(event) => setShipSlug(event.target.value)}
            >
              <option value="">Select a ship</option>
              {ships.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="mb-2 block text-[11px] tracking-[0.18em] text-white/40 uppercase">
                Departure
              </span>
              <input
                className={fieldClassName}
                type="date"
                value={departure}
                onChange={(event) => setDeparture(event.target.value)}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-[11px] tracking-[0.18em] text-white/40 uppercase">
                Guests
              </span>
              <select
                className={fieldClassName}
                value={guests}
                onChange={(event) => setGuests(event.target.value)}
              >
                {['1', '2', '3', '4', '5', '6'].map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <button
            type="submit"
            className="mt-2 h-12 w-full cursor-pointer rounded-full bg-[linear-gradient(100deg,#3b78ff_0%,#3ad4f0_100%)] text-[12px] font-medium tracking-[0.16em] text-white uppercase"
          >
            Continue
          </button>
        </form>

        {destination && hotel && ship && (
          <p className="mt-6 text-sm text-white/45">
            {destination.title} · {hotel.name} · {ship.name} · {guests} guests
          </p>
        )}
      </section>
      <Footer />
    </main>
  );
};

export default Booking;
