import logo from "./assets/images/tem.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="logo-text">
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
        </div>
        <div className="footer_sections">
          <div className="menu">
            <h2>Get Connected</h2>
            <p>+2349032276730</p>
            <div className="socials"></div>
          </div>
          <div className="opening_hour"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
