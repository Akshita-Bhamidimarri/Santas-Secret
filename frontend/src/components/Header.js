import { Link, NavLink } from "react-router-dom";
import logo from "../assests/logo.jpeg";

export const Header = () => {

  const activeClass = "text-base block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500";
  const inactiveClass = "text-base block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  return (
    <header>
        <nav className="bg-white border-gray-200 dark:bg-red-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center">
                <img src={logo} className="h-10 mr-5" alt="SantasSecret logo" />
                    <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Santa's Secret</span>
                </Link>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-red-100 rounded-lg bg-red-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-red-800 md:dark:bg-red-900 dark:border-red-700">
                    <li>
                    <NavLink to="/" className={({isActive}) => isActive ? activeClass : inactiveClass } end>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/Add_Participants" className= {({isActive}) => isActive ? activeClass : inactiveClass } >Add Participants</NavLink>
                    </li>
                    <li>
                    <NavLink to="/About" className= {({isActive}) => isActive ? activeClass : inactiveClass }>About</NavLink>
                    </li>
                    <li>
                    <NavLink to="/Contact" className= {({isActive}) => isActive ? activeClass : inactiveClass }>Contact Us</NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}