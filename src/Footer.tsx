import logo from "./assets/images/tem.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./components/footer.css";
import tiktok from "./assets/images/tiktok-icon.svg";

const Footer = () => {
  return (
    <div>
      <footer className="tems_footer">
        <div className="footer_sections">
          <div className="footer_menu">
            <div className="tems_socials">
              <h2>Get Connected</h2>
              <span>+2349032276730</span>
              <div className="socials_links">
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
                  target="_blank"
                  href="https://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40temscutz%3F_t%3D8pN6afcGIfG%26_r%3D1%26fbclid%3DPAZXh0bgNhZW0CMTEAAaYToAzjs_mTali8dvrL0k4XtYyytRvaJRP0IeG5TrQuD2L4K-Y2cCuQMfw_aem_uqZDBp6Y3C1qqvFrvyRduw&e=AT3MexK1lhVMNcBJf_Os9fFAui4_kdDhoiTBwihrtWGF5YviiEhYPT23hkI51Z5llW0AxGAo2GVNuPiTL3TxTkizJ_SPhjvDEu98gA"
                >
                  <img src={tiktok} alt="" style={{ width: 24 }} />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon style={{ fontSize: 40, color: "#000" }} />
                </a>
              </div>
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
                <span>Monday: 9 am–7 pm</span> <br />
                <span>Tuesday: 9 am–7 pm</span> <br />
                <span>Wednesday: 9 am–7 pm</span> <br />
                <span>Thursday: 9 am–7 pm</span>
                <br />
                <span>Friday: 7 am–7 pm</span>
              </div>
            </div>
            {/* today im doing what you called coding for fun
            what the heck I'm I doing for goodness sake
            pretty awesome isn't it, great 
         */}
          </div>
          <div className="alrightReserved">
            <ul className="logo-text">
              <li className="">
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
            <span>© 2024 Tems Cutz Barbershop - All Rights Reserved.</span>
            <div>
              <span>Design & Development by </span>
              <span style={{ color: "goldenrod" }}>ToryCode</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
