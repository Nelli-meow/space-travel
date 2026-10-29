import { CanvasStars } from './CanvasStars.tsx';
import { RevealOnScroll } from './RevealOnScroll.tsx';

const Manifesto = () => {
  return (

    <section className="relative isolate overflow-hidden bg-black px-6 py-24 text-white sm:px-12 lg:px-20 lg:py-32">
      <CanvasStars />
      <RevealOnScroll>
        <div className="relative z-10 mx-auto grid max-w-6xl gap-y-16 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-x-16">
          <p className="flex items-center gap-4 self-start pt-3 text-[11px] tracking-[0.28em] text-[#3ecfdb] uppercase">
            <span className="h-px w-8 bg-white/35 " aria-hidden="true" />
            Manifesto
          </p>

          <blockquote className="font-['Playfair_Display',serif] text-4xl leading-[1.2] font-medium text-white italic sm:text-5xl lg:text-[3.15rem]">
            “For those who have stood at every peak, dived every depth, and
            witnessed every sunrise this planet has to offer — there are still
            twelve destinations waiting.”
          </blockquote>

          <div className="flex flex-col gap-12 lg:col-start-2 lg:flex-row lg:items-start lg:justify-between">
            <p className="max-w-xs text-sm leading-7 text-white/45">
              Founded in 2031 by aerospace engineers, luxury hospitality veterans,
              and former astronauts united by one belief: the greatest journeys
              still await us above the clouds.
            </p>

            <div className="flex gap-10 sm:gap-14">
              <div>
                <p className="text-4xl font-['Playfair_Display',serif]  font-extrabold tracking-tight ">100%</p>
                <p className="mt-2 text-[10px] tracking-[0.16em] text-white/40 uppercase">
                  Safety record
                </p>
              </div>
              <div>
                <p className="text-4xl font-['Playfair_Display',serif]  font-extrabold tracking-tight">94%</p>
                <p className="mt-2 text-[10px] tracking-[0.16em] text-white/40 uppercase">
                  Return guests
                </p>
              </div>
              <div>
                <p className="text-4xl font-['Playfair_Display',serif] font-extrabold tracking-tight">147</p>
                <p className="mt-2 text-[10px] tracking-[0.16em] text-white/40 uppercase">
                  Missions
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Manifesto;
