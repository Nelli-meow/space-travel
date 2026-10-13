import Card from './Card.tsx';
import type { Destination } from './Card.tsx';

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
    <section className="w-full bg-black text-white">
      <div className="flex w-full flex-col">
        {destinations.map((destination, index) => (
          <Card
            key={destination.title}
            destination={destination}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
