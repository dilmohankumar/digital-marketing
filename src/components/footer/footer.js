import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import navbarLogo from "../../assets/navbar-logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footerbg">
        <div className="footera">
          <img src={navbarLogo} alt="navbar logo" style={{ width: "120px" }} />
          <p className="footerj">Join our Community to get the latest news</p>
          <div className="footerin">
            <input placeholder="Enter your email"></input>
            <button>SUBSCRIBE</button>
          </div>
          <div className="footeric">
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaYoutube />
            </i>
            <i>
              <FaFacebook />
            </i>
            <i>
              <FaTwitter />
            </i>
          </div>
        </div>

        <div className="footerb">
          <div className="footermm">
            <p>
              Address:<span> Mohali, Punjab, 140308</span>
            </p>
            <p>
              Contact: <span>+91-7018197843</span>
            </p>
            <p>
              Email: <span>info@socialnetworker.in</span>
            </p>
          </div>
        </div>
        <div className="footerc">
          <h1>
            <a href="/">Explore</a>
          </h1>
          <p>
            <a href="/home">Home</a>
          </p>
          <p>
            <a href="/about">About</a>
          </p>
          <p>
            <a href="/services">Services</a>
          </p>
          <p>
            <a href="/team">Team</a>
          </p>
          <p>
            <a href="/blogs">Blogs</a>
          </p>
        </div>
        <div className="footerd">
          <h1>Services</h1>
          <p>SEO</p>
          <p>SMM</p>
          <p>Web Development</p>
          <p>Video Editing</p>
        </div>
      </div>
      <div className="footer-copyright">
        
          <p>&copy; 2023 Social Networker. All rights reserved.</p>
          <div className="fotterprivacy">
            <li>Privacy Policy</li>
            <li>Terms & Services</li>
          </div><div>
        </div>
      </div>
    </>
  );
};

export default Footer;
