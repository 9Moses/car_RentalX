import { useState, useEffect } from "react";

import { close, menu } from "../../assets";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeLink, setActiveLink] = useState(navLinks[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Adjusted for better accuracy

      // Iterate through each section and find the one in view
      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveLink(nav.id);
          }
        }
      });
    };
    // Add an event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full flex py-3 justify-between items-center navbar font-montserrat font-medium text-[14px] ">
      <h1 className="w-[124px] h-[32px] text-[28px]">RentalX.</h1>
      <ul className="list-none sm:flex hidden justify-end items-center">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-montserrat font-medium cursor-pointer text-[14px] navbar
         ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}  ${
              activeLink === nav.id
                ? " border-b-2 rounded-t-lg border-d_orange"
                : "" // Add this line
            } pb-2`}
            onClick={() => setActiveLink(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:flex hidden items-center">
        <a href="" className="px-6 outline-none rounded-[10px] ">
          Sign up
        </a>
        <a
          href=""
          className="px-6 py-2.5 bg-blue-800 text-white outline-none rounded-[5px]"
        >
          Sign in
        </a>
      </div>

      {/* Mobile  */}
      <div className="sm:hidden flex flex-1 justify-end items-center relative">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-white fixed top-[4rem] right-0 w-full z-10`}
        >
          <ul className="list-none flex flex-col  items-center ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] list_style w-full
                  ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-10"
                  } text-black`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
