import { RevealOnScroll } from './RevealOnScroll.tsx';
import type { IHotel } from '../types/hotels.ts';
import { Link } from 'react-router';

type HotelProps = {
  hotel: IHotel;
};

const Hotel = ({hotel}: HotelProps) => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'USD', // Код валюты (USD, EUR, KGS, RUB и т.д.)
    minimumFractionDigits: 0 // Убрать копейки, если они равны нулю
  });

  return (
    <RevealOnScroll>
      <div className="liquid-glass flex h-full w-full flex-col overflow-hidden rounded-2xl px-4 py-6 transition-transform duration-500 hover:scale-[1.03]">
        <img
          className="h-58 w-full rounded-xl object-cover"
          src={hotel.image}
          alt={hotel.name}
        />
        <div className=" py-4">
          <div className="font-bold text-xl mb-2">{hotel.name}</div>
          <p className="text-gray-500 text-base line-clamp-4">
            {hotel.description}
          </p>
        </div>
        <div className="mt-auto">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 liquid-glass">
            ${formatter.format(hotel.price)}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 liquid-glass">
            <p className="text-sm tracking-wide">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={
                        index < hotel.rating
                          ? 'text-[#e6c15a]'
                          : 'text-white/25'
                      }
                    >
                    ★
                  </span>
                  ))}
                </p>
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 liquid-glass">
            duration {hotel.duration}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 liquid-glass">
            {hotel.destinationSlug}
          </span>
        </div>
        <div className="mt-auto flex flex-wrap gap-3 pt-4">
          <Link to={`/hotels/${hotel.slug}`}  className="cursor-pointer p-2 rounded-full bg-[linear-gradient(135deg,rgb(79,141,255),rgb(75,234,255))] shadow-[0_16px_28px_-6px_rgba(0,220,250,0.09)]">
            Reserve your stay
          </Link>
          <Link to={`/hotels/${hotel.slug}`} className="cursor-pointer  p-2 rounded-full bg-[rgba(248,249,252,0.04)] border border-gray-400 text-white">
            Explore hotel
          </Link>
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default Hotel;