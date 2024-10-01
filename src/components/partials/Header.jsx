import React from "react";

const Header = () => {
  return (
    <nav className="w-full fixed bg-black bg-opacity-80 z-[999]">
      <div className="p-4 flex items-center">
        <span className="text-[var(--brand-color)] text-4xl md:text-5xl font-bold">
          F
        </span>
        <span className="text-white text-3xl md:text-4xl font-bold">
          LICKNEST
        </span>
      </div>
    </nav>
  );
};

export default Header;
