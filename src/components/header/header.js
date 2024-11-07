import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import navbarLogo from "../../assets/navbar-logo.png";
import Drawer from "react-modern-drawer"; 
import "react-modern-drawer/dist/index.css";
import "./header.css";
import { FaArrowRight } from "react-icons/fa6";


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    
    <nav className="navbar">
      {/* navbar logo start */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={navbarLogo} alt="navbar logo" style={{ width: "120px" }} />
        </Link>
      </div>
      {/* navbar logo start */}

      {/* navbar buttons start */}
      <div className="navbar-links">
        <ul className="navbar-links">
       <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">IT Services</Link>
          </li>
     
          <li>
                <Link to="/services">Corporate Training</Link>
              </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/contact">Digital Marketing Services</Link>
          </li>  </ul>
          <li className="wt">
            <Link to="/blog">WORK TOGETHER <FaArrowRight /></Link>
          </li>
         
      
      </div>
      {/* navbar buttons end */}

      {/* hambugericon start  */}
      <div className="hamburger-icon">
        <span onClick={toggleDrawer}>
          <Link>
            <GiHamburgerMenu />
          </Link>
        </span>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="drawer"
        >
          <div className="drawer-links">
            <ul className="drawer">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">IT Services</Link>
              </li>
              <li>
                <Link to="/services">Corporate Training</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <div  className="drawer2">
              <li>
                <Link to="/contact">Our Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Internships</Link>
              </li>
              <li>
                <Link to="/contact">Why Choose US</Link>
              </li>
              </div>
            </ul>
          </div>
        </Drawer>
      </div>
      {/* hambugericon end  */}
    </nav>
  );
};

export default Header;
