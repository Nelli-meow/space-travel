import { Link } from 'react-router';
import { CanvasStars } from './CanvasStars.tsx';

const JourneyCta = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#050910] px-6 py-28 text-center text-white sm:px-12 lg:py-36">
      <CanvasStars />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(18,48,82,0.55)_0%,rgba(6,14,28,0.15)_48%,rgba(0,0,0,0.72)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
        <p className="flex items-center gap-4 text-[11px] tracking-[0.34em] text-[#67d4e0] uppercase">
          <span className="h-px w-7 bg-[#67d4e0]/80" aria-hidden="true" />
          Ready to depart
          <span className="h-px w-7 bg-[#67d4e0]/80" aria-hidden="true" />
        </p>

        <h2 className="mt-8 font-['Playfair_Display',serif] text-8xl leading-[0.92] font-black ">
          <span className="block bg-clip-text text-transparent bg-[linear-gradient(160deg,rgb(191,200,216)_0%,rgb(248,249,252)_40%,rgb(139,233,253)_100%)]">Your Next Vacation</span>
          <span className="mt-1 block bg-clip-text text-transparent bg-[linear-gradient(160deg,rgb(191,200,216)_0%,rgb(248,249,252)_40%,rgb(139,233,253)_100%)]">Starts Above</span>
          <span className="mt-1 block bg-clip-text text-transparent bg-[linear-gradient(160deg,rgb(191,200,216)_0%,rgb(248,249,252)_40%,rgb(139,233,253)_100%)]">the Clouds</span>
        </h2>

        <p className="mt-8 max-w-md text-sm leading-7 text-white/45">
          Speak with an Orbit travel architect today. We handle everything from
          training to touchdown — so you can focus on the wonder.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <span className="relative">
            <span
              className="pointer-events-none absolute -inset-x-1 -bottom-2 h-7 rounded-full bg-[#7eebff] blur-xl"
              aria-hidden="true"
            />
            <Link
              to="/booking"
              className="relative rounded-full bg-[linear-gradient(100deg,#3b78ff_0%,#3ad4f0_100%)] px-8 py-3.5 text-[12px] font-medium tracking-[0.16em] text-white uppercase shadow-[0_16px_28px_-6px_rgba(0,220,230,0.002)]"
            >
              Reserve your seat
            </Link>
          </span>
          <button
            type="button"
            className="cursor-pointer rounded-full border border-white/35 bg-white/4 px-8 py-3.5 text-[12px] font-medium tracking-[0.16em] text-white uppercase"
          >
            Request brochure
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneyCta;
