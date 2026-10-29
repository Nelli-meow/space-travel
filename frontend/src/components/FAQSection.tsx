import { useState } from 'react';
import { CanvasStars } from './CanvasStars.tsx';
import { RevealOnScroll } from './RevealOnScroll.tsx';

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: 'How safe is space travel with Orbit?',
    answer:
      'Every departure flies with a redundant life-support stack and a crew trained for abort at each phase. Our safety record covers every crewed flight since 2031, and each ship is certified for the orbit it is booked to fly.',
  },
  {
    question: 'What training is required before my journey?',
    answer:
      'Most guests complete five days of preparation: suit familiarization, emergency drills, and a short adaptation flight. Deep-space itineraries add a further week before departure.',
  },
  {
    question: 'Is there an age requirement?',
    answer:
      'Guests must be at least 18 years of age. There is no upper age limit — our oldest traveler completed the Lunar circuit at 82. Individual assessments ensure every guest is matched to the right mission profile.',
  },
  {
    question: 'How long are typical journeys?',
    answer:
      'A lunar circuit is about eight days. Mars residencies are typically fourteen. Saturn-range cruises are planned at roughly three weeks, door to door.',
  },
  {
    question: 'What medical evaluations are required?',
    answer:
      'A physician reviews your records and completes a short in-person exam. We screen for conditions that are unsafe in microgravity, then match the cabin and timeline to what you can comfortably do.',
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-24 text-white">
      <CanvasStars />
      <RevealOnScroll>
        <div className="relative z-10 mx-auto grid max-w-6xl items-start gap-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="flex items-center gap-4 text-[11px] tracking-[0.28em] text-[#3ecfdb] uppercase">
              <span className="h-px w-8 bg-[#3ecfdb]" aria-hidden="true" />
              Faq
            </p>
            <h2 className="mt-6 font-['Playfair_Display',serif] text-5xl leading-[0.95] font-medium lg:text-7xl">
              Questions,
              <span className="mt-1 block italic">Answered</span>
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/45">
              Everything you need before your first conversation with an Orbit
              travel architect.
            </p>
          </div>

          <div>
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.question} className="border-b border-white/15">
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => toggle(index)}
                  >
                  <span className="text-base font-medium text-white">
                    {item.question}
                  </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3ecfdb] text-lg leading-none text-[#3ecfdb] transition-transform duration-500 ease-out motion-reduce:transition-none ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                    +
                  </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden" aria-hidden={!isOpen}>
                      <p
                        className={`max-w-xl pb-5 text-sm leading-7 text-white/50 transition-opacity duration-500 ease-out motion-reduce:transition-none ${
                          isOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default FaqSection;
