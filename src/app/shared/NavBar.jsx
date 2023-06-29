const NavBar = () => {
  return (
    <div className="navbar bg-base-100 fixed z-10">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-3xl">
          <span className="text-red-500">CRIMSON</span>
          <span>CARE</span>
        </a>
      </div>

      <div className="hidden lg:flex navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <a>ABOUT US</a>
          </li>
          <li>
            <a>CAMPAIGN</a>
          </li>
          <li>
            <a>PAGES</a>
          </li>
          <li>
            <a>BLOG</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
        {/* <input type="text" placeholder="Search" className="ml-12 input input-bordered w-24 md:w-auto input-error" /> */}
      </div>
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-hover dropdown-left">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>ABOUT US</a>
            </li>
            <li>
              <a>CAMPAIGN</a>
            </li>
            <li>
              <a>PAGES</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
