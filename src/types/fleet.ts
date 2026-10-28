import ship1 from '../assets/images/ships/ship1.png';
import ship2 from '../assets/images/ships/ship2.png';
import ship3 from '../assets/images/ships/ship3.png';
import ship4 from '../assets/images/ships/ship4.png';
import ship5 from '../assets/images/ships/ship5.png';
import ship6 from '../assets/images/ships/ship6.png';
import ship7 from '../assets/images/ships/ship7.jpeg';
import ship8 from '../assets/images/ships/ship8.jpg';
import ship9 from '../assets/images/ships/ship9.webp';

export {
  ship1,
  ship2,
  ship3,
  ship4,
  ship5,
  ship6,
  ship7,
};

export interface IShip  {
  slug: string;
  eyebrow: string,
  name: string,
  capacity: string,
  speed: string,
  range: string,
  comfort: number,
  amenities: string[],
  backdrop: string,
  destinations: string[],
  price: number,
}

export interface iShipCardProps  {
  ship: IShip,
}

export const ships: IShip[] = [
  {
    slug: 'horizon-i',
    eyebrow: 'Earth-Mars shuttle',
    name: 'Horizon I',
    capacity: '12 guests',
    speed: '28,000 km/h',
    range: 'Earth — Mars',
    comfort: 5,
    price: 18500,
    amenities: [
      'Pressurized observation dome',
      'Zero-G dining suite',
      'Private sleeping quarters',
      'On-board medical bay',
    ],
    backdrop: ship1,
    destinations: ['mars'],
  },
  {
    slug: 'aether-ii',
    eyebrow: 'Deep space cruiser',
    name: 'Aether II',
    capacity: '6 guests',
    speed: '52,000 km/h',
    range: 'Mars — Saturn',
    comfort: 5,
    price: 42000,
    amenities: [
      'Deep-space certified hull',
      'Radiation-shielded suites',
      'On-board sommelier',
      'VR recreation bay',
    ],
    backdrop: ship2,
    destinations: ['mars', 'titan'],
  },
  {
    slug: 'celestia-iii',
    eyebrow: 'Lunar & icy moon shuttle',
    name: 'Celestia III',
    capacity: '20 guests',
    speed: '18,500 km/h',
    range: 'Earth — Europa',
    comfort: 4,
    price: 26000,
    amenities: [
      'Grand observation lounge',
      'Fine dining kitchen',
      'Spa & wellness deck',
      'Ice-surface landing systems',
    ],
    backdrop: ship3,
    destinations: ['europa'],
  },
  {
    slug: 'odyssey-iv',
    eyebrow: 'Interplanetary explorer',
    name: 'Odyssey IV',
    capacity: '8 guests',
    speed: '64,000 km/h',
    range: 'Earth — Proxima Centauri b',
    comfort: 5,
    price: 185000,
    amenities: [
      'Panoramic viewing deck',
      'Radiation-shielded cabins',
      'Private dining room',
      'Advanced medical suite',
    ],
    backdrop: ship4,
    destinations: ['proxima-centauri-b'],
  },
  {
    slug: 'nova-v',
    eyebrow: 'Luxury orbital liner',
    name: 'Nova V',
    capacity: '48 guests',
    speed: '32,000 km/h',
    range: 'Earth — Mars',
    comfort: 4,
    price: 12500,
    amenities: [
      'Multi-level observation lounge',
      'Fine dining restaurant',
      'Private luxury suites',
      'Zero-G recreation hall',
    ],
    backdrop: ship5,
    destinations: ['mars'],
  },
  {
    slug: 'solstice-vi',
    eyebrow: 'Exoplanet expedition vessel',
    name: 'Solstice VI',
    capacity: '10 guests',
    speed: '75,000 km/h',
    range: 'Earth — TRAPPIST-1e',
    comfort: 4,
    price: 240000,
    amenities: [
      'Research observation laboratory',
      'Adaptive radiation shielding',
      'Scientific research deck',
      'Emergency medical station',
    ],
    backdrop: ship6,
    destinations: ['trappist-1e'],
  },
  {
    slug: 'eclipse-vii',
    eyebrow: 'Private expedition craft',
    name: 'Eclipse VII',
    capacity: '4 guests',
    speed: '58,000 km/h',
    range: 'Custom destinations',
    comfort: 5,
    price: 95000,
    amenities: [
      'Fully private cabin suite',
      'Custom flight itineraries',
      'Dedicated expedition crew',
      'Panoramic glass cockpit',
    ],
    backdrop: ship7,
    destinations: ['kepler-452b', 'kepler-186f'],
  },
  {
    slug: 'atlas-viii',
    eyebrow: 'Long-range exploration vessel',
    name: 'Atlas VIII',
    capacity: '32 guests',
    speed: '24,000 km/h',
    range: 'Earth — TOI-700 d',
    comfort: 4,
    price: 78000,
    amenities: [
      'Modular passenger cabins',
      'Long-duration life support',
      'Panoramic observation lounge',
      'On-board medical facility',
    ],
    backdrop: ship8,
    destinations: ['toi-700-d', 'lhs-1140-b'],
  },
  {
    slug: 'seraphim-ix',
    eyebrow: 'Ultra-luxury deep space yacht',
    name: 'Seraphim IX',
    capacity: '6 guests',
    speed: '68,000 km/h',
    range: 'Earth — Outer Exoplanets',
    comfort: 4,
    price: 320000,
    amenities: [
      'Private panoramic observatory',
      'Personal chef and concierge',
      'Luxury zero-G suites',
      'Dedicated wellness chamber',
    ],
    backdrop: ship9,
    destinations: [
      'kepler-452b',
      'toi-700-d',
      'proxima-centauri-b',
      'trappist-1e',
      'lhs-1140-b',
      'kepler-186f',
    ],
  },
];