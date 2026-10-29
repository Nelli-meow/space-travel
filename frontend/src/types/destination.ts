export interface IDestination {
  slug: string;
  eyebrow: string;
  title: string;
  residence: string;
  description: string;
  duration: string;
  price: number;
  coordinates: string;
  distance: string;
  highlight: string;
  surface: string;
  shadow: string;
}

export const destinations: IDestination[] = [
  {
    slug: 'mars',
    eyebrow: 'The red frontier',
    title: 'Mars',
    residence: 'Olympus Mons Residence',
    description:
      'Stand on the soil of another world. Our pressurized habitat overlooks the slopes of Olympus Mons — the tallest volcano in the solar system. Watch the sun set in butterscotch skies while dining in a glass-enclosed observatory.',
    duration: '14 days',
    price: 2400000,
    coordinates: '18.65°N · 226.2°W',
    distance: '138,000,000 km from Earth',
    highlight: '#ffb067',
    surface: '#c44b28',
    shadow: '#3a120e',
  },
  {
    slug: 'europa',
    eyebrow: 'The ice ocean',
    title: 'Europa',
    residence: 'Subsurface Haven',
    description:
      'Descend beneath a shell of ice to a lit ridge above Europa’s hidden ocean. The residence is quiet, warm, and close enough to the water that the ice above still glows blue at noon.',
    duration: '21 days',
    price: 3100000,
    coordinates: '12.40°S · 78.10°W',
    distance: '628,000,000 km from Earth',
    highlight: '#d7f4ff',
    surface: '#7eb4d4',
    shadow: '#16324a',
  },
  {
    slug: 'titan',
    eyebrow: 'The amber moon',
    title: 'Titan',
    residence: 'Kraken Sea Lodge',
    description:
      'A low orange dusk lasts for days on Titan. The lodge sits above a dark methane shore, with a viewing deck for the slow weather and a dining room that never quite loses the color of the sky.',
    duration: '18 days',
    price: 2800000,
    coordinates: '42.10°N · 150.40°E',
    distance: '1,200,000,000 km from Earth',
    highlight: '#ffd089',
    surface: '#c47a32',
    shadow: '#4a2a12',
  },
  {
    slug: 'kepler-452b',
    eyebrow: 'The second Earth',
    title: 'Kepler-452b',
    residence: 'New Eden Biosphere',
    description:
      'Orbiting a star similar to our Sun, Kepler-452b offers a tantalizing glimpse of what another world might become. New Eden is a fully enclosed research resort designed for guests to experience simulated temperate landscapes, artificial lakes, and carefully controlled Earth-like gardens. The planet’s actual surface conditions remain unknown.',
    duration: '96 days',
    price: 14800000,
    coordinates: 'Cygnus constellation',
    distance: '1,400 light-years from Earth',
    highlight: '#a6d89b',
    surface: '#477c55',
    shadow: '#183a2b',
  },
  {
    slug: 'toi-700-d',
    eyebrow: 'The ocean world',
    title: 'TOI-700 d',
    residence: 'Pelagic Research Haven',
    description:
      'Located in the habitable zone of a relatively small, cool star, TOI-700 d is a promising candidate for studying potentially temperate worlds. Our fictional research haven recreates the experience of an alien ocean planet, with expansive water gardens and panoramic underwater observatories inside a sealed habitat.',
    duration: '42 days',
    price: 9600000,
    coordinates: 'Dorado constellation',
    distance: '101.4 light-years from Earth',
    highlight: '#85e3df',
    surface: '#287f8e',
    shadow: '#123748',
  },
  {
    slug: 'proxima-centauri-b',
    eyebrow: 'The crimson horizon',
    title: 'Proxima Centauri b',
    residence: 'Redshift Sanctuary',
    description:
      'Our nearest known exoplanetary neighbor orbits Proxima Centauri, a red dwarf star. Redshift Sanctuary is an entirely enclosed settlement concept, shielded against stellar radiation and designed around artificial daylight cycles. Whether the real planet has an atmosphere, liquid water, or conditions suitable for life remains unknown.',
    duration: '124 days',
    price: 18200000,
    coordinates: 'Centaurus constellation',
    distance: '4.24 light-years from Earth',
    highlight: '#ff9b86',
    surface: '#9d514b',
    shadow: '#401f30',
  },
  {
    slug: 'trappist-1e',
    eyebrow: 'The distant garden',
    title: 'TRAPPIST-1e',
    residence: 'Asteria Biosphere',
    description:
      'TRAPPIST-1e is a rocky-sized world in the habitable zone of a small red star. Asteria is imagined as a protected botanical settlement, with immense transparent domes, engineered wetlands, and carefully regulated atmospheric conditions. Its true climate and habitability have yet to be established.',
    duration: '38 days',
    price: 11300000,
    coordinates: 'Aquarius constellation',
    distance: 'Approximately 40 light-years from Earth',
    highlight: '#c4b4ff',
    surface: '#655a9e',
    shadow: '#29264f',
  },
  {
    slug: 'lhs-1140-b',
    eyebrow: 'The twilight world',
    title: 'LHS 1140 b',
    residence: 'Terminus Ocean Lodge',
    description:
      'A dense, rocky world orbiting a cool red dwarf, LHS 1140 b is an intriguing target in the search for potentially habitable environments. Terminus is a fictional research resort built around a climate-controlled ocean habitat, where guests can observe simulated alien tides beneath a permanent twilight sky.',
    duration: '57 days',
    price: 13700000,
    coordinates: 'Cetus constellation',
    distance: 'Approximately 49 light-years from Earth',
    highlight: '#8ac9e8',
    surface: '#426f91',
    shadow: '#1b314d',
  },
  {
    slug: 'kepler-186f',
    eyebrow: 'The violet frontier',
    title: 'Kepler-186f',
    residence: 'Vesper Garden Estate',
    description:
      'Explore a distant world beneath a soft crimson sun. The estate rests within a protected valley of alien flora, where violet horizons, unfamiliar constellations, and carefully curated wilderness create a sense of absolute seclusion.',
    duration: '68 days',
    price: 12500000,
    coordinates: '04.80°N · 121.30°E',
    distance: '4.1 quadrillion km from Earth',
    highlight: '#d6a3ff',
    surface: '#7252a8',
    shadow: '#24183e',
  },
];