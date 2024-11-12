import { FC, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/images/tem.png";

const Navbar: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <header className="navigation-bar">
        <nav className="classA-nav">
          <ul className={`side-bar ${isSidebarOpen ? "Open" : "Close"}`}>
            <CloseIcon className="close-icon" onClick={toggleSidebar} />
            <li className="li">
              <a href="/home" className="a-tags">
                Home
              </a>
            </li>
            <li className="li">
              <a href="/aboutus" className="a-tags">
                About Us
              </a>
            </li>
            <li className="li">
              <a href="/service" className="a-tags">
                Service
              </a>
            </li>
            <li className="li">
              <a href="/shop" className="a-tags">
                Shop
              </a>
            </li>
            <li
              className="shopping-cart "
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              <ShoppingCartIcon />
              <i className="cart-items">10</i>
            </li>
            <li className="reserve-btn li">
              <button className="a-tags">Reserve Now</button>
            </li>
          </ul>
          <ul className="nav-links">
            <li className="hideOnMobile">
              <a href="/" className="a-tags logo-name">
                <img
                  src={logo}
                  alt="barber logo"
                  style={{ width: "6rem", height: "auto" }}
                />
                temscutz
              </a>
            </li>
            <li className="hideOnMobile">
              <a href="/" className="a-tags">
                Home
              </a>
            </li>
            <li className="hideOnMobile">
              <a href="/aboutus" className="a-tags">
                About Us
              </a>
            </li>
            <li className="hideOnMobile">
              <a href="/service" className="a-tags">
                Service
              </a>
            </li>
            <li className="hideOnMobile">
              <a href="/shop" className="a-tags">
                Shop
              </a>
            </li>
            <li
              className="shopping-cart hideOnMobile"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              <ShoppingCartIcon />
              <i className="cart-items">10</i>
            </li>
            <li className="reserve-btn hideOnMobile">
              <button className="a-tags">Reserve Now</button>
            </li>
            <li onClick={toggleSidebar} className="Menu-Icon">
              <MenuIcon />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
