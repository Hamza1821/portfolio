import { CgMenuRightAlt } from "react-icons/cg";
import { HiSun, HiMoon } from "react-icons/hi";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import gsap from 'gsap';
import { tl } from './gsap.js';  

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.from('#heading', {
        y: -10,
        opacity: 0,
        delay:0.5,
        duration: 0.3
      })
      .from('.nav-link a', {
        y: -10,
        opacity: 0,
        duration: 0.3,
        stagger: 0.3
      });
    });

    tl.play();  // Play the timeline
    return () => ctx.revert();
  }, []);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <section className="NAVBAR p-5 mx-20 mt-5 font-['Poppins'] max-sm:p-2 max-sm:mx-5 max-sm:max-h-[48px]">
        <div className="NAVBAR flex  justify-between capitalize">
          <div className="LOGO">
            <a
              href="#"
              id="heading"
              className="text-3xl bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:text-cyan-500 max-sm:text-2xl"
            >
              {"<Hamza/>"}
            </a>
          </div>
          <div className="NAVLINKS nav-link text-[20px] translate-x-[80px] max-sm:hidden flex gap-12 text-[#00040f] dark:text-[#e1e1e1] ">
            <a href="#about" className=" hover:text-cyan-500">
              Home
            </a>
            <a href="#experience" className="hover:text-cyan-500">
              Experience
            </a>
            <a href="#education" className="hover:text-cyan-500 ">
              Education
            </a>
            <a href="#projects" className="hover:text-cyan-500 ">
              Projects
            </a>
            <a href="#contact" className="hover:text-cyan-500 ">
              Contact
            </a>
            <button onClick={handleTheme}>
              {theme === "dark" ? (
                <HiMoon className="-translate-y-1 text-2xl" />
              ) : (
                <HiSun className="-translate-y-1 text-2xl" />
              )}
            </button>
          </div>

          <button onClick={() => setNav(!nav)}>
            <CgMenuRightAlt className="hidden max-sm:block text-[#00040f] dark:text-[#e1e1e1] text-[32px]" />
          </button>
        </div>
        {nav && <Menu />}
      </section>
    </>
  );
};
export default Navbar;
