import { Link, NavLink } from "react-router-dom";
import DefaultUser from '../../../assets/user.png'

const Navbar = () => {

    const navLinks = 
    <>
        <li><NavLink to={'/'} className={({isActive}) => isActive ? 'text-[#D72050]' : 'text-[#706F6F]'}>Home</NavLink></li>
        <li><NavLink to={'/about'} className={({isActive}) => isActive ? 'text-[#D72050]' : 'text-[#706F6F]'}>About</NavLink></li>
        <li><NavLink to={'/career'} className={({isActive}) => isActive ? 'text-[#D72050]' : 'text-[#706F6F]'}>Career</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#706F6F] font-normal text-[18px]">
        {navLinks}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex justify-center items-center gap-4 menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={DefaultUser} />
        </div>
      </div>

  <Link to={'/login'}
        className="px-8 py-2.5 relative group overflow-hidden font-medium bg-[#403F3F] text-white inline-block"
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-gray-50 group-hover:h-full"></span>
        <span className="relative group-hover:text-[#403F3F]">Login</span>
      </Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;