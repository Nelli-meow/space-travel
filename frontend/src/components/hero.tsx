import { Starfield } from './Starfield.tsx';
import { Link } from 'react-router';
import { RevealOnScroll } from './RevealOnScroll.tsx';

const Hero = () => {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#06111e] pt-[152px] text-center">
      <Starfield />
      <RevealOnScroll>
        <div className=" relative z-10 text-9xl font-black font-['Playfair_Display',serif] flex justify-center flex-col mb-20">
          <span className="text-white">Luxury</span>
          <span className="italic bg-clip-text text-transparent bg-[linear-gradient(160deg,rgb(191,200,216)_0%,rgb(248,249,252)_40%,rgb(139,233,253)_100%)]">
          Beyond
        </span>
          <span className="text-white">Earth</span>
        </div>

        <div className="flex justify-center mb-15 relative z-10">
          <p className="w-150 text-gray-600 font-semibold">
            The universe is not a destination — it is a state of being. Orbit
            curates private journeys across the solar system for those who have
            seen everything this world has to offer.
          </p>
        </div>

        <div className="text-center gap-5 flex justify-center mb-20 relative z-10">
          <Link to="/booking" className="cursor-pointer w-56 py-4 rounded-full bg-[linear-gradient(135deg,rgb(79,141,255),rgb(75,234,255))] shadow-[0_16px_28px_-6px_rgba(0,220,250,0.09)]">
            Book your journey
          </Link>
          <Link to="/destinations" className="cursor-pointer w-56 py-4 rounded-full bg-[rgba(248,249,252,0.04)] border border-gray-400 text-white">
            Explore destinations
          </Link>
        </div>

        <div className="text-center gap-5 flex justify-center relative z-10">
          <div className="text-center flex justify-center flex-col w-[180px]">
          <span className="text-white font-['Playfair_Display',serif] text-5xl font-extrabold">
            2,847
          </span>
            <span className="text-gray-600">Passengers</span>
          </div>

          <div className="text-center  flex justify-center flex-col border-x border-gray-700 w-[180px] relative z-10">
          <span className="text-white font-['Playfair_Display',serif] text-5xl font-extrabold">
            12
          </span>
            <span className="text-gray-600 font-['DM_Mono',monospace]">
            Destinations
          </span>
          </div>

          <div className="text-center  flex justify-center flex-col w-[180px] relative z-10">
          <span className="text-white font-['Playfair_Display',serif] text-5xl font-extrabold">
            8 yrs
          </span>
            <span className="text-gray-600 font-['DM_Mono',monospace]">
            Operations
          </span>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Hero;
