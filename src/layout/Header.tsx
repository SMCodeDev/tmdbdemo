import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";

const Header = () => {
  const [headerClasses, setHeaderClasses] = useState("");

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setHeaderClasses("!py-5 bg-opacity-100");
      } else {
        setHeaderClasses("");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div
      className={`page-container py-9 fixed top-0 left-0 z-[100] w-full bg-[#0f0f0f] bg-opacity-0 transition-all duration-300 ${headerClasses}`}
    >
      <div className="h-full flex items-center justify-center md:justify-between">
        <Link to="/">
          <div className="flex flex-row items-center gap-3 text-white text-3xl md:text-4xl font-medium">
            <FaPlay className="text-indigo-500 scale-105" />
            <p>Movie Demo</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;