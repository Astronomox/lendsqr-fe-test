import { FC, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../../core/data";
import Loader from "../common/Loader";

const BASE = "https://joy-okwudire-lendsqr-fe-test.vercel.app/images";

interface Props {
  setIsMenuOpen: (value: boolean) => void;
  isMenuOpen: boolean;
}

const SideBar: FC<Props> = ({ isMenuOpen }) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const [loggingOut, setLoggingOut] = useState(false);

  const isRouteActive = (route: string) => {
    if (pathname === "/dashboard" && route === "/dashboard") return true;
    const path = route.split("/")[2];
    return Boolean(path && pathname.includes(path));
  };

  const handleLogout = () => {
    setLoggingOut(true);
    setTimeout(() => {
      setLoggingOut(false);
      navigate("/");
    }, 1500);
  };

  if (loggingOut) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div className={`side-nav ${isMenuOpen ? "nav-active" : ""}`}>
      <div className="side-nav-header">
        <img src={`${BASE}/logo.svg`} alt="logo" />
      </div>
      <div>
        <ul className="side-nav-menu">
          {navItems.map((item) => (
            <div key={item.id}>
              {!item.header ? (
                <Link to={item.link}>
                  <li
                    className={`side-nav-menu-item ${
                      isRouteActive(item.link) ? "active" : ""
                    }`}
                  >
                    {item.icon && (
                      <img src={item.icon} alt={item.title} />
                    )}
                    <span>{item.title}</span>
                    {item.id === 1 && (
                      <span>
                        <img
                          src={`${BASE}/icons/down-arrow.svg`}
                          alt="arrow"
                        />
                      </span>
                    )}
                  </li>
                </Link>
              ) : (
                <li className="nav-item-header">
                  <span>{item.title}</span>
                </li>
              )}
            </div>
          ))}
        </ul>

        <div className="logout" onClick={handleLogout}>
          <div>
            <img src={`${BASE}/icons/logout-icon.svg`} alt="logout" />
            <span>Logout</span>
          </div>
          <span className="version">v1.2.0</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;