import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div>
            <div className="navbar bg-base-100">
  <div className="navbar navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className=" btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] shadow bg-base-100 rounded-box p-6 w-[150px]">
      <NavLink to="/" className={({isActive})=> isActive ? "text-[#23BE0A] rounded-lg" : ''}><li>Home</li></NavLink>
     <NavLink to="/listed" className={({isActive})=> isActive ? "text-[#23BE0A] rounded-lg" : ''}><li>Listed Books</li></NavLink>
     <NavLink to="/redePage" className={({isActive})=> isActive ? "text-[#23BE0A] rounded-lg" : ''}><li>Pages to Read</li></NavLink>
     <NavLink to="/blog" className={({isActive})=> isActive ? "text-[#23BE0A] rounded-lg" : ''}><li>Blogs</li></NavLink>
     <NavLink to="/resources" className={({isActive})=> isActive ? "text-[#23BE0A] rounded-lg" : ''}><li>Resources</li></NavLink>
      </ul>
    </div>
    <h4 className=" ml-2 btn-ghost text-[18px] md:text-2xl font-bold">Book Vibe</h4>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-7 font-semibold text-gray-500 items-center">
     <NavLink to="/" className={({isActive})=> isActive ? "text-[#23BE0A] border-[#23BE0A] border-[1px] px-4 py-2 rounded-lg" : ''}><li>Home</li></NavLink>
     <NavLink to="/listed" className={({isActive})=> isActive ? "text-[#23BE0A] border-[#23BE0A] border-[1px] px-4 py-2 rounded-lg" : ''}><li>Listed Books</li></NavLink>
     <NavLink to="/redePage" className={({isActive})=> isActive ? "text-[#23BE0A] border-[#23BE0A] border-[1px] px-4 py-2 rounded-lg" : ''}><li>Pages to Read</li></NavLink>
     <NavLink to="/blog" className={({isActive})=> isActive ? "text-[#23BE0A] border-[#23BE0A] border-[1px] px-4 py-2 rounded-lg" : ''}><li>Blogs</li></NavLink>
     <NavLink to="/resources" className={({isActive})=> isActive ? "text-[#23BE0A] border-[#23BE0A] border-[1px] px-4 py-2 rounded-lg" : ''}><li>Resources</li></NavLink>

    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#23BE0A] text-white">Sign In</a>
    <a className="btn ml-2 bg-[#59C6D2] text-white">Sign up</a>
  </div>
</div>
        </div>
        </div>
    );
};

export default Navbar;