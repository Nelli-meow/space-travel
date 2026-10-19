
export type Ship = {
  eyebrow: string;
  name: string;
  capacity: string;
  speed: string;
  range: string;
  comfort: number;
  amenities: string[];
  backdrop: string;
};

type ShipCardProps = {
  ship: Ship;
};

const stats = [
  { label: 'Capacity', key: 'capacity' },
  { label: 'Max. speed', key: 'speed' },
  { label: 'Range', key: 'range' },
] as const;

const ShipCard = ({ ship }: ShipCardProps) => {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 px-8 py-10 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-100 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url("${ship.backdrop}")` }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-r from-[#06080e]/90 via-[#06080e]/65 to-[#06080e]/40"
      />

      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-[#8BE9FD] uppercase">
            {ship.eyebrow}
          </p>

          <h2 className="mt-3 font-['Playfair_Display',serif] text-5xl leading-none font-medium tracking-tight lg:text-6xl">
            {ship.name}
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-28 rounded-lg bg-black/45 px-3 py-2"
              >
                <p className="text-[10px] tracking-[0.14em] text-white/40 uppercase">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-white">
                  {ship[stat.key]}
                </p>
              </div>
            ))}

            <div className="min-w-28 rounded-lg bg-black/45 px-3 py-2">
              <p className="text-[10px] tracking-[0.14em] text-white/40 uppercase">
                Comfort
              </p>
              <p className="mt-1 text-sm tracking-wide">
                {Array.from({ length: 5 }, (_, index) => (
                  <span
                    key={index}
                    className={
                      index < ship.comfort
                        ? 'text-[#e6c15a]'
                        : 'text-white/25'
                    }
                  >
                    ★
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        <ul className="space-y-3 text-sm text-white/80 lg:max-w-xs">
          {ship.amenities.map((amenity) => (
            <li key={amenity} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8BE9FD]" />
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ShipCard;