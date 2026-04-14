import { FC } from "react";
import { Link } from "react-router-dom";

const BASE = "https://joy-okwudire-lendsqr-fe-test.vercel.app/images";

interface Props {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

const TopNav: FC<Props> = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className="top-nav">
      <div>
        <div className="top-nav-main">
          <img src={`${BASE}/logo.svg`} alt="logo" className="logo" />
          <div className="search-input">
            <input type="search" placeholder="Search for anything" />
            <button>
              <img src={`${BASE}/icons/search-icon.svg`} alt="search" />
            </button>
          </div>
          <div className="top-nav-right">
            <Link to="#">Docs</Link>
            <img src={`${BASE}/icons/bell-icon.svg`} alt="notify" />
            <div className="top-nav-profile">
              <img src={`${BASE}/avatar.svg`} alt="avatar" />
              <p>Adedeji</p>
              <img src={`${BASE}/icons/dropdown-icon.svg`} alt="dropdown" />
            </div>
          </div>
          <div
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-icon"
          >
            <img
              src={`${BASE}/icons/${isMenuOpen ? "close-icon" : "menu"}.svg`}
              alt="menu icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;