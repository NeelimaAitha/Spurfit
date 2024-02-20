import { HiOutlineViewList } from "react-icons/hi";
import { useState } from "react";

import "./index.css";

const Header = () => {
  const [showNavs, setShowNavs] = useState(false);
  return (
    <>
      <nav className="nav-container">
        <div className="header-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNUHHhmODkp6LXZiHf1FRJNpV3ukrlxjHgNMQTNQ46WNCTL5RV0ACYYWt_HrbfX08YLms&usqp=CAU"
            alt="website logo"
            className="website-logo"
          />
          <ul className="nav-items">
            <li className="nav-list-item">
              <a href="#" className="nav-items">
                Emotions
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-items">
                Manifesto
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-items">
                Self-awareness test
              </a>
            </li>
            <li className="nav-list-item">
              <a href="#" className="nav-items">
                Work With Us
              </a>
            </li>
          </ul>
          <div className="download-nav-list">
            <button className="download-app-btn" type="button">
              Download App
            </button>
            <button
              className="toggle-btn"
              type="button"
              onClick={() => setShowNavs((prev) => !prev)}
            >
              <HiOutlineViewList size={30} className="nav-list-icon" />
            </button>
          </div>
        </div>
      </nav>
      {showNavs && (
        <div className="mobile-nav-items-container">
          <ul className="mobile-nav-items">
            <li className="mobile-nav-list-item">
              <a href="#" className="mobile-nav-item">
                Emotions
              </a>
            </li>
            <li className="mobile-nav-list-item">
              <a href="#" className="mobile-nav-item">
                Manifesto
              </a>
            </li>
            <li className="mobile-nav-list-item">
              <a href="#" className="mobile-nav-item">
                Self-awareness test
              </a>
            </li>
            <li className="mobile-nav-list-item">
              <a href="#" className="mobile-nav-item">
                Work With Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
