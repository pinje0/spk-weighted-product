import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="absolute left-0 top-0 z-10 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            {/* <Link to="/" className="block py-6 text-xl font-bold text-primary">
              img
            </Link> */}
            <img src="./logo-gundar.png" alt="" width={50} />
          </div>
          <div className="flex items-center px-4">
            <button id="hamburger" name="hamburger" type="button" className="absolute right-4 block lg:hidden">
              <span className="hamburger-line origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              id="nav-menu"
              className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <Link
                    to="/"
                    className="hover-opacity-animation mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/alternatif"
                    className="hover-opacity-animation mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Alternatif
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/kriteria"
                    className="hover-opacity-animation mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Kriteria
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/pembobotan"
                    className="hover-opacity-animation mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Pembobotan
                  </Link>
                </li>
                <li className="group">
                  <Link
                    to="/perhitungan"
                    className="hover-opacity-animation mx-8 flex py-2 text-base text-dark group-hover:text-primary"
                  >
                    Perhitungan
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
