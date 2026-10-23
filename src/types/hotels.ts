import hotel1 from '../assets/images/hotels/hotel1.jpeg';
import hotel2 from '../assets/images/hotels/hotel2.jpeg';
import hotel3 from '../assets/images/hotels/hotel3.jpeg';
import hotel4 from '../assets/images/hotels/hotel4.jpeg';
import hotel5 from '../assets/images/hotels/hotel5.jpeg';
import hotel6 from '../assets/images/hotels/hotel6.jpeg';
import hotel7 from '../assets/images/hotels/hotel7.jpeg';
import hotel8 from '../assets/images/hotels/hotel8.jpeg';
import hotel9 from '../assets/images/hotels/hotel9.jpeg';

export {
  hotel1,
  hotel2,
  hotel3,
  hotel4,
  hotel5,
  hotel6,
  hotel7,
  hotel8,
  hotel9,
};

export interface IHotel {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  destinationSlug: string;
  rating: number;
  price: string;
  duration: string;
  amenities: string[];
  image: string;
}

export const hotels: IHotel[] = [
  // MARS
  {
    slug: 'olympus-sky-resort',
    name: 'Olympus Sky Resort',
    eyebrow: 'THE RED FRONTIER',
    description:
      'A secluded luxury retreat overlooking the colossal slopes of Olympus Mons. Watch the Martian sunset from a private glass suite before dining beneath the stars.',
    destinationSlug: 'mars',
    rating: 5,
    price: 'From $2.1M',
    duration: '10 days',
    amenities: [
      'Panoramic Olympus Mons views',
      'Glass-enclosed observatory',
      'Private rover expeditions',
    ],
    image: hotel1,
  },
  {
    slug: 'mars-dust-and-dawn',
    name: 'Dust & Dawn',
    eyebrow: 'MARTIAN HORIZON',
    description:
      'An intimate residence on the edge of the Martian wilderness, designed around warm interiors, expansive windows, and the quiet beauty of the red desert.',
    destinationSlug: 'mars',
    rating: 5,
    price: 'From $1.8M',
    duration: '7 days',
    amenities: [
      'Private desert-view suites',
      'Low-gravity wellness lounge',
      'Guided sunset excursions',
    ],
    image: hotel2,
  },

  // EUROPA
  {
    slug: 'subsurface-haven',
    name: 'Subsurface Haven',
    eyebrow: 'THE ICE OCEAN',
    description:
      'A warm, protected residence beneath Europa’s frozen shell, overlooking a luminous ridge above the hidden ocean. Blue light filters through the ice throughout the day.',
    destinationSlug: 'europa',
    rating: 5,
    price: 'From $3.1M',
    duration: '14 days',
    amenities: [
      'Illuminated ice-view suites',
      'Subsurface ocean observatory',
      'Private hydrotherapy spa',
    ],
    image: hotel3,
  },
  {
    slug: 'europa-glacial',
    name: 'Glacial',
    eyebrow: 'BEYOND THE ICE',
    description:
      'A minimalist sanctuary carved into the concept of a frozen world, where crystalline architecture frames the extraordinary landscapes beneath Europa’s surface.',
    destinationSlug: 'europa',
    rating: 5,
    price: 'From $2.7M',
    duration: '10 days',
    amenities: [
      'Panoramic ice galleries',
      'Immersive ocean simulations',
      'Private dining observatory',
    ],
    image: hotel4,
  },

  // TITAN
  {
    slug: 'kraken-sea-lodge',
    name: 'Kraken Sea Lodge',
    eyebrow: 'THE AMBER MOON',
    description:
      'Set above a dark methane shore, this atmospheric lodge offers a front-row seat to Titan’s orange twilight, slow-moving clouds, and mysterious alien seas.',
    destinationSlug: 'titan',
    rating: 5,
    price: 'From $2.8M',
    duration: '12 days',
    amenities: [
      'Methane-sea panoramic deck',
      'Amber-lit private suites',
      'Guided surface expeditions',
    ],
    image: hotel5,
  },
  {
    slug: 'titan-saturnia',
    name: 'Saturnia',
    eyebrow: 'RINGSIDE RETREAT',
    description:
      'A remote luxury residence designed around the spectacle of Saturn. Warm amber interiors and elevated viewing galleries make the distant rings part of every stay.',
    destinationSlug: 'titan',
    rating: 4,
    price: 'From $2.3M',
    duration: '9 days',
    amenities: [
      'Saturn-facing observation suites',
      'Panoramic dining hall',
      'Private atmospheric excursions',
    ],
    image: hotel6,
  },

  // KEPLER-452B
  {
    slug: 'new-eden-biosphere',
    name: 'New Eden Biosphere',
    eyebrow: 'THE SECOND EARTH',
    description:
      'A vast enclosed resort recreating temperate landscapes beneath an unfamiliar sky. Artificial lakes, lush gardens, and carefully controlled environments offer a glimpse of another possible home.',
    destinationSlug: 'kepler-452b',
    rating: 5,
    price: 'From $14.8M',
    duration: '30 days',
    amenities: [
      'Earth-like botanical gardens',
      'Artificial lakes and walking trails',
      'Private biosphere villas',
    ],
    image: hotel7,
  },
  {
    slug: 'kepler-452b-verdant',
    name: 'Verdant',
    eyebrow: 'THE LIVING HORIZON',
    description:
      'An exclusive garden estate inside a climate-controlled biosphere, blending elegant architecture with engineered forests and peaceful green spaces.',
    destinationSlug: 'kepler-452b',
    rating: 5,
    price: 'From $12.6M',
    duration: '21 days',
    amenities: [
      'Private garden residences',
      'Immersive nature conservatory',
      'Panoramic sky lounge',
    ],
    image: hotel8,
  },

  // TOI-700 D
  {
    slug: 'pelagic-research-haven',
    name: 'Pelagic Research Haven',
    eyebrow: 'THE OCEAN WORLD',
    description:
      'An ocean-inspired sanctuary with immense water gardens and panoramic underwater observatories. Explore the idea of an alien marine world without leaving the safety of a sealed habitat.',
    destinationSlug: 'toi-700-d',
    rating: 5,
    price: 'From $9.6M',
    duration: '21 days',
    amenities: [
      'Panoramic aquatic observatory',
      'Immersive water gardens',
      'Private marine-inspired suites',
    ],
    image: hotel9,
  },
  {
    slug: 'toi-700-d-tidal',
    name: 'Tidal',
    eyebrow: 'THE BLUE EXPANSE',
    description:
      'A tranquil retreat inspired by distant oceans, with sculptural water features, cool blue interiors, and expansive views across a carefully simulated alien seascape.',
    destinationSlug: 'toi-700-d',
    rating: 5,
    price: 'From $8.2M',
    duration: '16 days',
    amenities: [
      'Private aquatic-view suites',
      'Hydrotherapy and wellness center',
      'Underwater light installations',
    ],
    image: hotel1,
  },

  // PROXIMA CENTAURI B
  {
    slug: 'redshift-sanctuary',
    name: 'Redshift Sanctuary',
    eyebrow: 'THE CRIMSON HORIZON',
    description:
      'A fully enclosed settlement concept beneath the light of Proxima Centauri. Artificial daylight cycles, radiation shielding, and refined interiors create a secluded refuge around the nearest known exoplanetary neighbor.',
    destinationSlug: 'proxima-centauri-b',
    rating: 5,
    price: 'From $18.2M',
    duration: '42 days',
    amenities: [
      'Radiation-shielded luxury suites',
      'Custom artificial daylight cycles',
      'Private stellar observatory',
    ],
    image: hotel2,
  },
  {
    slug: 'proxima-centauri-b-cinder',
    name: 'Cinder',
    eyebrow: 'THE RED DWARF COLLECTION',
    description:
      'A dramatic architectural retreat built around deep crimson lighting, quiet private spaces, and extraordinary views of a distant red star.',
    destinationSlug: 'proxima-centauri-b',
    rating: 5,
    price: 'From $15.7M',
    duration: '28 days',
    amenities: [
      'Crimson panoramic lounges',
      'Zero-gravity relaxation chamber',
      'Personalized expedition planning',
    ],
    image: hotel3,
  },

  // TRAPPIST-1E
  {
    slug: 'asteria-biosphere',
    name: 'Asteria Biosphere',
    eyebrow: 'THE DISTANT GARDEN',
    description:
      'A protected botanical settlement beneath a distant red star, with transparent domes, engineered wetlands, and carefully regulated atmospheric conditions.',
    destinationSlug: 'trappist-1e',
    rating: 5,
    price: 'From $11.3M',
    duration: '18 days',
    amenities: [
      'Immersive botanical domes',
      'Engineered wetlands',
      'Private garden residences',
    ],
    image: hotel4,
  },
  {
    slug: 'trappist-1e-vesper',
    name: 'Vesper',
    eyebrow: 'THE QUIET GARDEN',
    description:
      'An intimate retreat where sculptural glass architecture surrounds tranquil gardens, softly illuminated pathways, and peaceful observation spaces.',
    destinationSlug: 'trappist-1e',
    rating: 5,
    price: 'From $9.4M',
    duration: '14 days',
    amenities: [
      'Private conservatory suites',
      'Night-sky observation lounge',
      'Botanical wellness pavilion',
    ],
    image: hotel5,
  },

  // LHS 1140 B
  {
    slug: 'terminus-ocean-lodge',
    name: 'Terminus Ocean Lodge',
    eyebrow: 'THE TWILIGHT WORLD',
    description:
      'A climate-controlled ocean retreat beneath a permanent twilight sky, offering an immersive vision of alien tides and the quiet mystery of a distant rocky world.',
    destinationSlug: 'lhs-1140-b',
    rating: 5,
    price: 'From $13.7M',
    duration: '24 days',
    amenities: [
      'Simulated ocean-view suites',
      'Twilight observation deck',
      'Private wellness facilities',
    ],
    image: hotel6,
  },
  {
    slug: 'lhs-1140-b-blue-hour',
    name: 'Blue Hour',
    eyebrow: 'BETWEEN LIGHT & DARK',
    description:
      'A secluded residence inspired by the stillness of permanent dusk, with blue-toned interiors, reflective architecture, and panoramic atmospheric displays.',
    destinationSlug: 'lhs-1140-b',
    rating: 5,
    price: 'From $11.9M',
    duration: '18 days',
    amenities: [
      'Blue-hour panoramic suites',
      'Immersive tidal observatory',
      'Private dining salons',
    ],
    image: hotel7,
  },

  // KEPLER-186F
  {
    slug: 'vesper-garden-estate',
    name: 'Vesper Garden Estate',
    eyebrow: 'THE VIOLET FRONTIER',
    description:
      'A protected valley estate imagined beneath a soft crimson sun, where alien flora, violet horizons, and carefully curated wilderness create an atmosphere of absolute seclusion.',
    destinationSlug: 'kepler-186f',
    rating: 5,
    price: 'From $12.5M',
    duration: '28 days',
    amenities: [
      'Private alien botanical gardens',
      'Violet-horizon observation suites',
      'Guided wilderness excursions',
    ],
    image: hotel8,
  },
  {
    slug: 'kepler-186f-amaranth',
    name: 'Amaranth',
    eyebrow: 'THE CRIMSON GARDENS',
    description:
      'An elegant hideaway among imagined alien gardens, with sculptural architecture, atmospheric lighting, and uninterrupted views of the distant horizon.',
    destinationSlug: 'kepler-186f',
    rating: 5,
    price: 'From $10.8M',
    duration: '21 days',
    amenities: [
      'Panoramic garden villas',
      'Immersive astronomy theater',
      'Private botanical walking paths',
    ],
    image: hotel9,
  },
];