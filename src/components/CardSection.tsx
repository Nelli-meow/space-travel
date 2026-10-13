type Destination = {
  eyebrow: string;
  title: string;
  residence: string;
  description: string;
  duration: string;
  price: string;
  coordinates: string;
  distance: string;
  highlight: string;
  surface: string;
  shadow: string;
};

const destinations: Destination[] = [
  {
    eyebrow: 'The red frontier',
    title: 'Mars',
    residence: 'Olympus Mons Residence',
    description:
      'Stand on the soil of another world. Our pressurized habitat overlooks the slopes of Olympus Mons — the tallest volcano in the solar system. Watch the sun set in butterscotch skies while dining in a glass-enclosed observatory.',
    duration: '14 days',
    price: '$2.4M',
    coordinates: '18.65°N · 226.2°W',
    distance: '138,000,000 km from Earth',
    highlight: '#ffb067',
    surface: '#c44b28',
    shadow: '#3a120e',
  },
  {
    eyebrow: 'The ice ocean',
    title: 'Europa',
    residence: 'Subsurface Haven',
    description:
      'Descend beneath a shell of ice to a lit ridge above Europa’s hidden ocean. The residence is quiet, warm, and close enough to the water that the ice above still glows blue at noon.',
    duration: '21 days',
    price: '$3.1M',
    coordinates: '12.40°S · 78.10°W',
    distance: '628,000,000 km from Earth',
    highlight: '#d7f4ff',
    surface: '#7eb4d4',
    shadow: '#16324a',
  },
  {
    eyebrow: 'The amber moon',
    title: 'Titan',
    residence: 'Kraken Sea Lodge',
    description:
      'A low orange dusk lasts for days on Titan. The lodge sits above a dark methane shore, with a viewing deck for the slow weather and a dining room that never quite loses the color of the sky.',
    duration: '18 days',
    price: '$2.8M',
    coordinates: '42.10°N · 150.40°E',
    distance: '1,200,000,000 km from Earth',
    highlight: '#ffd089',
    surface: '#c47a32',
    shadow: '#4a2a12',
  },
];

const CardSection = () => {
  return (
    <section className="bg-black w-full text-white">
      <div className="flex justify-center items-center flex-col">
        {destinations.map((destination, index) => {
          const reversed = index % 2 !== 0;

          return (
            <article
              key={destination.title}
              className="relative overflow-hidden bg-[#0a0d16] px-8 py-12 lg:px-14 lg:py-16 border-t-1 border-gray-700"
            >
              <p
                aria-hidden="true"
                className={`pointer-events-none absolute top-1/2 -translate-y-1/2 font-['Playfair_Display',serif] text-[7rem] leading-none font-medium tracking-tight text-[#8ea0c4]/10 select-none lg:text-[12rem] ${
                  reversed ? 'left-6' : 'right-6'
                }`}
              >
                {destination.title}
              </p>

              <div
                className={`relative flex w-full flex-col items-center gap-12 lg:flex-row lg:justify-between ${
                  reversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div>
                  <p className="flex items-center gap-3 text-[11px] tracking-[0.22em] text-[#e8843a] uppercase">
                    <span
                      className="h-px w-6 bg-[#e8843a]"
                      aria-hidden="true"
                    />
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

                  <button
                    type="button"
                    className="mt-8 inline-flex cursor-pointer items-center gap-3 text-xs tracking-[0.16em] text-[#e8843a] uppercase"
                  >
                    Book this journey
                    <span aria-hidden="true">→</span>
                  </button>
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
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CardSection;
