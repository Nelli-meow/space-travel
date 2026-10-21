import { Link } from 'react-router';
import type { IDestination } from '../types/destination.ts';
import { RevealOnScroll } from './RevealOnScroll.tsx';


type CardProps = {
  destination: IDestination;
  reversed: boolean;
};

const Card = ({ destination, reversed }: CardProps) => {
  return (
    <article className="relative w-full overflow-hidden border-t-1 border-gray-700 bg-[#0a0d16]">
      <div className="relative mx-auto max-w-6xl px-8 py-12 ">
        <RevealOnScroll>
          {/*<p*/}
          {/*  aria-hidden="true"*/}
          {/*  className={`pointer-events-none absolute top-1/2 -translate-y-1/2 font-['Playfair_Display',serif] text-[23rem] leading-none font-medium tracking-tight text-[#8ea0c4]/10 select-none ${*/}
          {/*    reversed ? 'left-6' : 'right-6'*/}
          {/*  }`}*/}
          {/*>*/}
          {/*  {destination.title}*/}
          {/*</p>*/}

          <div
            className={`relative flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-between ${
              reversed ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div>
              <p className="flex items-center gap-3 text-[11px] tracking-[0.22em] text-[#e8843a] uppercase">
                <span className="h-px w-6 bg-[#e8843a]" aria-hidden="true" />
                {destination.eyebrow}
              </p>

              <h2 className="mt-5 font-['Playfair_Display',serif] text-6xl leading-none font-medium tracking-tight lg:text-8xl">
                {destination.title}
              </h2>
              <p className="mt-3 text-sm text-white/55">
                {destination.residence}
              </p>
              <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
                {destination.description}
              </p>

              <div className="mt-8 grid max-w-xl grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:grid-cols-3">
                <div className="px-5 py-4 sm:border-r sm:border-white/10">
                  <p className="text-[10px] tracking-[0.16em] text-white/40 uppercase">
                    Duration
                  </p>
                  <p className="mt-2 text-lg text-white">
                    {destination.duration}
                  </p>
                </div>
                <div className="px-5 py-4 sm:border-r sm:border-white/10">
                  <p className="text-[10px] tracking-[0.16em] text-white/40 uppercase">
                    From
                  </p>
                  <p className="mt-2 text-lg text-[#e8843a]">
                    {destination.price}
                  </p>
                </div>
                <div className="px-5 py-4">
                  <p className="text-[10px] tracking-[0.16em] text-white/40 uppercase">
                    Coordinates
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    {destination.coordinates}
                  </p>
                </div>
              </div>

              <Link
                to={'/destinations/' + destination.slug}
                className="mt-8 inline-flex cursor-pointer items-center gap-3 text-xs tracking-[0.16em] text-[#e8843a] uppercase"
              >
                Book this journey
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div
              aria-hidden="true"
              className="mx-auto h-72 w-72 shrink-0 rounded-full lg:mx-0 lg:h-[22rem] lg:w-[22rem]"
              style={{
                background: `radial-gradient(circle at 58% 38%, ${destination.highlight} 0%, ${destination.surface} 34%, ${destination.shadow} 74%)`,
                boxShadow: `inset -20px -15px 35px rgba(0, 0, 0, 0.65),
                    0 0 40px ${destination.highlight}30,
                    0 0 260px ${destination.surface}20`,
              }}
            />
          </div>

          <p className="mt-10 text-right text-[10px] tracking-[0.2em] text-white/35 uppercase lg:absolute lg:right-14 lg:bottom-8 lg:mt-0">
            {destination.distance}
          </p>
        </RevealOnScroll>
      </div>
    </article>
  );
};

export default Card;
