import { type FormEvent, useState } from 'react';
import { Link } from 'react-router';
import './componentsCSS.css';

const explore = ['Destinations', 'Fleet', 'Experience', 'Training Academy'];
const company = ['About Orbit', 'Careers', 'Press', 'Investors'];
const support = ['FAQ', 'Safety', 'Medical Info', 'Contact Us'];

const socials = [
  { label: 'X', name: 'X' },
  { label: 'in', name: 'LinkedIn' },
  { label: 'IG', name: 'Instagram' },
  { label: 'YT', name: 'YouTube' },
];

const FooterLinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: string[];
}) => {
  return (
    <div>
      <p className="text-[11px] tracking-[0.22em] text-white/40 uppercase">
        {title}
      </p>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-white/75 transition-colors hover:text-white"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <footer className="bg-black px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.72fr)_minmax(0,0.72fr)_minmax(0,0.8fr)_minmax(0,1.35fr)] lg:gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="orbit-logo origin-left scale-[0.82]">
                <div className="orbit-ring">
                  <div className="orbit-planet" />
                </div>
              </div>
              <Link
                to="/"
                className="font-['Outfit',sans-serif] text-sm font-bold tracking-[0.28em] uppercase"
              >
                Orbit
              </Link>
            </div>
            <p className="mt-5 max-w-[190px] text-sm leading-6 text-white/45">
              Redefining luxury beyond the atmosphere since 2031.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-[11px] text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <FooterLinkColumn title="Explore" links={explore} />
          <FooterLinkColumn title="Company" links={company} />
          <FooterLinkColumn title="Support" links={support} />

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-[11px] tracking-[0.22em] text-white/40 uppercase">
              Mission updates
            </p>
            <p className="mt-5 max-w-[240px] text-sm leading-6 text-white/45">
              Exclusive destination reveals and launch windows.
            </p>
            <form
              className="mt-5 flex max-w-sm items-center gap-2"
              onSubmit={handleSubmit}
            >
              <label htmlFor="mission-email" className="sr-only">
                Email
              </label>
              <input
                id="mission-email"
                type="email"
                required
                value={email}
                placeholder="your@email.com"
                onChange={(event) => setEmail(event.target.value)}
                className="h-11 min-w-0 flex-1 rounded-lg border border-white/12 bg-[#141414] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-[#67d4e0]"
              />
              <button
                type="submit"
                className="inline-flex h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-[linear-gradient(100deg,#3b78ff_0%,#3ad4f0_100%)] px-4 text-sm font-medium text-white"
              >
                Join
                <span aria-hidden="true">→</span>
              </button>
            </form>
            <div className="mt-4 space-y-1.5 text-xs text-white/40">
              <a href="mailto:contact@orbitspace.com" className="block">
                contact@orbitspace.com
              </a>
              <a href="tel:+18886730031" className="block">
                +1 (888) 673-0031
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/12 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2039 Orbit Space Tourism, Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white">
              Mission Safety
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
