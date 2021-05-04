import React from "react";
import { avatar, paper_plane, download, house, menu } from '../.././icons';

export default function Nav({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl  leading-relaxed inline-block mr-4 py-1 whitespace-nowrap uppercase text-white"
              href="/"
            >
              Dave Rillera
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-2 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            ><span >
              <i><img src={menu} alt='icon' className="h-6 filter brightness-0 invert" /></i>
            </span>  
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/"
                >
                <i className="text-lg leading-lg text-white"><img src={house} alt='icon' className="h-4 filter brightness-0 invert" /></i><span className="ml-2">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/about"
                >
                <i className="text-lg leading-lg text-white"><img src={avatar} alt='icon' className="h-4 filter brightness-0 invert" /></i><span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/contact"
                >
                  <i className="text-lg leading-lg text-white"></i><img src={paper_plane} alt='icon' className="h-4 filter brightness-0 invert" /><span className="ml-2">Contact</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/resume"
                >
                  <i className="text-lg leading-lg text-white"><img src={download} alt='icon' className="h-4 filter brightness-0 invert" /></i><span className="ml-2">Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}