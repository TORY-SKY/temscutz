import logo from "./assets/images/tem.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="logo-text">
          <li className="hideOnMobile">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="a-tags logo-name"
            >
              <img
                src={logo}
                alt="barber logo"
                style={{ width: "6rem", height: "auto" }}
              />
              temscutz
            </a>
          </li>
        </ul>
        <div className="footer_sections">
          <div className="menu">
            <h2>Get Connected</h2>
            <p>+2349032276730</p>
            <div className="socials">
              <a
                href="https://www.instagram.com/temscutzbarberstudio/p/CzyN2quI_7W/?img_index=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon style={{ fontSize: 40, color: "#000" }} />
              </a>
              <a
                href="https://www.facebook.com/people/TEMS/100081561306045/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon style={{ fontSize: 40, color: "#000" }} />
              </a>
              <a
                href="https://www.instagram.com/temscutzbarberstudio/p/CzyN2quI_7W/?img_index=1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon style={{ fontSize: 40, color: "#000" }} />
              </a>
            </div>
            <div className="socials">
              <h2>OUR LOCATION</h2>
              <span>
                Atere, Odo Ona Elewe Rd Oluyole <br /> local Government area of{" "}
                <br />
                Oyo state, Ibadan 200257
              </span>
            </div>
            <div className="socials">
              <h2>HOURS OF OPERATION</h2>
              <div className="hours_of_op">
                <span>Monday: 9 am–7 pm</span>
                <span>Monday: 9 am–7 pm</span>
                <span>Tuesday: 9 am–7 pm</span>
                <span>Wednesday: 9 am–7 pm</span>
                <span>Thursday: 9 am–7 pm</span>
                <span>Friday: 7 am–7 pm</span>
              </div>
            </div>
          </div>
          <div className="opening_hour"></div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
