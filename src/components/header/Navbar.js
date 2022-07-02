import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ pathname }) => {
  const menuToggle = () => {
    const btn = document.getElementById('menu-btn')
    const menu = document.getElementById('menu')

    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
  }

  return (
    <React.Fragment>
      <div className="ml-8 flex items-center justify-between ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          className="w-1/4 mt-8"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>

        <nav className="mt-8  md:w-2/3 xl:w-2/4  ">
          <div className="hidden md:flex text-tertiary justify-around items-center bg-tertiary bg-opacity-[0.04]">
            <Link
              to="/"
              className={`flex space-x-3 py-10 font-barlow text-base focus:border-b  tracking-widest ${
                pathname === '/'
                  ? 'border-b-tertiary/100'
                  : 'border-b-tertiary/0'
              }`}
            >
              <span className="hidden xl:block">00</span>
              <span>Home</span>
            </Link>
            <Link
              to="/destination"
              className={`flex space-x-3 py-10 font-barlow md:text-sm xl:text-base  focus:border-b  tracking-widest ${
                pathname === '/destination'
                  ? 'border-b-tertiary/100'
                  : 'border-b-tertiary/0'
              } `}
            >
              <span className="hidden xl:block">01</span>
              <span>Destination</span>
            </Link>
            <Link
              to="/crew"
              className={`flex space-x-3 py-10 font-barlow  md:text-sm xl:text-base focus:border-b  tracking-widest ${
                pathname === '/crew'
                  ? 'border-b-tertiary/100'
                  : 'border-b-tertiary/0'
              } `}
            >
              <span className="hidden xl:block">02</span>
              <span>Crew</span>
            </Link>
            <Link
              to="/technology"
              className={`flex space-x-3 py-10 font-barlow  md:text-sm xl:text-base focus:border-b  tracking-widest ${
                pathname === '/technology'
                  ? 'border-b-tertiary/100'
                  : 'border-b-tertiary/0'
              } `}
            >
              <div className="hidden xl:block">03</div>
              <div>Technology</div>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="z-40 block hamburger md:hidden focus:outline-none"
              id="menu-btn"
              type="button"
              onClick={() => menuToggle()}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          <div
            id="menu"
            className="absolute top-0 bottom-0 right-0 z-30 hidden flex-col self-end backdrop-blur-[81.58px] w-full min-h-screen max-w-[50%] py-1 pt-40 pl-12 space-y-3 text-lg text-tertiary bg-tertiary-[0.04]"
          >
            <Link
              to="/"
              className={`flex space-x-3 py-10 font-barlow text-base focus:border-r-4 hover:text-tertiary/50 tracking-widest ${
                pathname === '/'
                  ? 'border-r-tertiary/100'
                  : 'border-r-tertiary/0'
              }`}
            >
              <span>00</span>
              <span>Home</span>
            </Link>
            <Link
              to="/destination"
              className={`flex space-x-3 py-10 font-barlow md:text-sm xl:text-base hover:text-tertiary/50  focus:border-r-4  tracking-widest ${
                pathname === '/destination'
                  ? 'border-r-tertiary/100'
                  : 'border-r-tertiary/0'
              } `}
            >
              <span>01</span>
              <span>Destination</span>
            </Link>
            <Link
              to="/crew"
              className={`flex space-x-3 py-10 font-barlow  md:text-sm xl:text-base hover:text-tertiary/50    focus:border-r-4  tracking-widest ${
                pathname === '/crew'
                  ? 'border-r-tertiary/100'
                  : 'border-r-tertiary/0'
              } `}
            >
              <span>02</span>
              <span>Crew</span>
            </Link>
            <Link
              to="/technology"
              className={`flex space-x-3 py-10 font-barlow  md:text-sm xl:text-base hover:text-tertiary/50  focus:border-r-4  tracking-widest ${
                pathname === '/technology'
                  ? 'border-r-tertiary/100'
                  : 'border-r-tertiary/0'
              } `}
            >
              <div>03</div>
              <div>Technology</div>
            </Link>
          </div>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default Navbar
