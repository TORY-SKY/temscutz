import { FC } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Navbar: FC = () => {
  return (
    <>
      <header className="navigation-bar">
        <nav className="classA-nav">
          <ul className="nav-links">
            <li>
              <a href="" className="a-tags">
                Barber Shop
              </a>
            </li>
            <li>
              <a href="/home" className="a-tags">
                Home
              </a>
            </li>
            <li>
              <a href="/aboutus" className="a-tags">
                About Us
              </a>
            </li>
            <li>
              <a href="/service" className="a-tags">
                Service
              </a>
            </li>
            <li>
              <a href="/shop" className="a-tags">
                Shop
              </a>
            </li>
            <li
              className="shopping-cart"
              style={{
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              <ShoppingCartIcon />
              <i className="cart-items">10</i>
            </li>
            <li className="reserve-btn">
              <button className="a-tags">Reserve Now</button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
