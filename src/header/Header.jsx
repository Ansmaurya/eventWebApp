
import React, { useEffect, useState } from "react";
import "./header.css";
import carousel1 from "./carousel1.jpg";

function Header() {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 63 && !isNavbarFixed) {
        setIsNavbarFixed(true);
      } else if (window.scrollY <= 63 && isNavbarFixed) {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavbarFixed]);

  return (
    <div>
      <img
        src={carousel1}
        class="landingImage"
        alt="..."
        style={{ height: "100vh" }}
      />
      <div className="container">
        <ul className="nav d-flex justify-content-between">
          <li className="nav-item">
            <a className="nav-link text-light">
              <span>
                <i className="fa fa-envelope" aria-hidden="false">
                  {" "}
                  &nbsp;
                </i>
                trust@gmail.com
              </span>
              &nbsp; &nbsp; &nbsp;
              <span>
                <i className="fa fa-phone-square" aria-hidden="false">
                  {" "}
                  &nbsp;
                </i>
                +91 9638520741
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light">
              {/* <span><i class="fa fa-youtube-play" aria-hidden="false">&nbsp;</i></span>
              <span><i class="fa fa-linkedin-square" aria-hidden="false"></i>&nbsp;</span>
              <span><i class="fa fa-instagram" aria-hidden="false"></i>&nbsp;</span>
              <span><i class="fa fa-facebook-official" aria-hidden="false"></i>&nbsp;</span> */}
              <span>
                <i className="fa fa-phone-square" aria-hidden="false">
                  {" "}
                  &nbsp; &nbsp;
                </i>
              </span>
              <span>
                <i className="fa fa-phone-square" aria-hidden="false">
                  {" "}
                  &nbsp; &nbsp;
                </i>
              </span>
              <span>
                <i className="fa fa-phone-square" aria-hidden="false">
                  {" "}
                  &nbsp; &nbsp;
                </i>
              </span>
              <span>
                <i className="fa fa-phone-square" aria-hidden="false">
                  {" "}
                  &nbsp; &nbsp;
                </i>
              </span>
            </a>
          </li>
        </ul>
        <hr
          class="dropdown-divider"
          style={{ backgroundColor: "white", justifyContent: "center" }}
        />
      </div>
      <nav
        className={
          isNavbarFixed
            ? "navbar navbar-expand-md navbar-light fixed-top bg-light p-4"
            : "navbar sticky-top navbar-expand-lg navbar-light navbar-dark"
        }
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            Business Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Menu 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Menu 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Menu 3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Menu 4
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;