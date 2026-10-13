import './componentsCSS.css';
import { IoMdPlanet } from 'react-icons/io';

const Header = () => {
  return (
    <div className="header absolute inset-x-0 top-0 z-20 flex items-center justify-between bg-transparent p-5">
      <div className="flex items-center gap-3">
        <div className="orbit-logo">
          <div className="orbit-ring">
            <div className="orbit-planet" />
          </div>
        </div>

        <h1 className="uppercase text-white font-['Outfit',_sans-serif]">
          Orbit
        </h1>
      </div>

      <nav className="flex justify-between gap-10 text-gray-600 font-semibold items-center">
        <a href="#">Destinations</a>
        <a href="#">Fleet</a>
        <a href="#">Experience</a>
        <a href="#">Stories</a>
      </nav>

      <div className="user">
        <button className="cursor-pointer group flex items-center gap-3 rounded-full border border-[#52657A] p-3  text-sm font-medium text-[#F8F9FC] transition-all duration-300 hover:border-[#8DEBFF] hover:bg-[#8DEBFF]/5 hover:shadow-[0_0_24px_rgba(139,233,253,0.12)]">
          <IoMdPlanet className="text-[#8DEBFF]" />
          <span>Guest Access</span>
          <span className="text-[#8DEBFF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
            ↗
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
