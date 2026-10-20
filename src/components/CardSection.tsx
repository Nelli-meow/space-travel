import Card from './Card.tsx';
import { destinations } from '../types/destination.ts';


const CardSection = () => {
  return (
    <section className="w-full bg-black text-white">
      <div className="flex w-full flex-col">
        {destinations.slice(0, 3).map((destination, index) => (
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
