import './componentsCSS.css';

const Header = () => {
  return (
    <div className="header relative z-20 flex justify-between items-center bg-transparent p-5">
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
        <button className="cursor-pointer text-white">login</button>
      </div>
    </div>
  );
};

export default Header;
