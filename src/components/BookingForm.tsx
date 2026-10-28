import { type FormEvent, useState } from 'react';
import { destinations } from '../types/destination.ts';
import { hotels } from '../types/hotels.ts';
import { ships } from '../types/fleet.ts';

const fieldClassName =
  'cursor-pointer h-12 w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 pr-11 text-sm text-white outline-none [color-scheme:dark] focus:border-[#67d4e0]';

const fieldDisabledClassName =
  'cursor-not-allowed h-12 w-full appearance-none rounded-xl border border-white/15 bg-white/[0.04] px-4 pr-11 text-sm text-white outline-none [color-scheme:dark] focus:border-[#67d4e0]';


const SelectArrow = () => (
  <svg
    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      d="m7 10 5 5 5-5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BookingForm = () => {
  const [destinationSlug, setDestinationSlug] = useState('');
  const [hotelSlug, setHotelSlug] = useState('');
  const [shipSlug, setShipSlug] = useState('');
  const [departure, setDeparture] = useState('');
  const [guests, setGuests] = useState('2');
  const [errors, setErrors] = useState('');

  const destination = destinations.find(
    (item) => item.slug === destinationSlug,
  );
  const hotel = hotels.find((item) => item.slug === hotelSlug);
  const ship = ships.find((item) => item.slug === shipSlug);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!destinationSlug) {
      setErrors('Choose a destination');
      return;
    } if (!hotelSlug) {
      setErrors('Choose a hotel');
      return;
    } if (!shipSlug) {
      setErrors('Choose a ship');
      return;
    }
    setErrors('');
  };

  const filteredHotels = hotels.filter(item => item.destinationSlug === destinationSlug);
  const filteredShips = ships.filter(item => item.destinations.includes(destinationSlug));


  return (
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

          <div className="relative">
            <select
              className={fieldClassName}
              value={destinationSlug}
              onChange={(event) => {
                setDestinationSlug(event.target.value);
                setHotelSlug('');
                setShipSlug('');
                setErrors('');
              }}
            >
              <option value="" disabled>
                Select a planet
              </option>

              {destinations.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </select>

            <SelectArrow />
          </div>
        </label>

        <label className="block">
            <span className="mb-2 block text-[11px] tracking-[0.18em] text-white/40 uppercase">
              Stay
            </span>

          <div className="relative">
            <select
              disabled={!destinationSlug}
              className={!destinationSlug ? fieldDisabledClassName : fieldClassName}
              value={hotelSlug}
              onChange={(event) => {
                setHotelSlug(event.target.value);
                setErrors('');
              }}
            >
              <option value="" disabled>
                Select a hotel
              </option>

              {filteredHotels.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>

            <SelectArrow />
          </div>
        </label>

        <label className="block">
            <span className="mb-2 block text-[11px] tracking-[0.18em] text-white/40 uppercase">
              Vessel
            </span>

          <div className="relative">
            <select
              disabled={!hotelSlug}
              className={!hotelSlug ? fieldDisabledClassName : fieldClassName}
              value={shipSlug}
              onChange={(event) => {
                setShipSlug(event.target.value);
                setErrors('');
              }}
            >
              <option value="" disabled>
                Select a ship
              </option>

              {filteredShips.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>

            <SelectArrow />
          </div>
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

            <div className="relative">
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

              <SelectArrow />
            </div>
          </label>
        </div>

        <button
          type="submit"
          className="mt-2 h-12 w-full cursor-pointer rounded-full bg-[linear-gradient(100deg,#3b78ff_0%,#3ad4f0_100%)] text-[12px] font-medium tracking-[0.16em] text-white uppercase"
        >
          Continue
        </button>
        {errors && (
          <p className=" text-sm text-red-800">
            {errors}
          </p>
        )}
      </form>

      {destination && hotel && ship && (
        <p className="mt-6 text-sm text-white/45">
          {destination.title} · {hotel.name} · {ship.name} · {guests} guests
        </p>
      )}
    </section>
  );
};

export default BookingForm;