import React from "react";
import { useHistory } from "react-router-dom";
import "./footer.css";
import { footer } from "../../data/Data";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
  const showContact = () => {
    history.push("/contact");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <h4>We are here to help you</h4>
            </div>
            <button className="btn4" onClick={showContact}>
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="footer-header">
              <h4>CONTACT US</h4>
              <hr />
            </div>

            <div className="footer-description">
              <div className="inner-footer-description d-flex">
                <i className="fas fa-phone-alt align-items-center px-3 mt-1"></i>

                <p>+91 9438707645 / 7978646832</p>
              </div>

              <div className="inner-footer-description d-flex">
                <i className="fas fa-envelope align-items-center px-3 mt-1"></i>

                <p>sarthak.som111@gmail.com</p>
              </div>
            </div>
          </div>
          {footer.map((val) => (
            <div className="box" style={{ float: "right" }}>
              <div className="footer-header">
                <h4>{val.title}</h4>
                <hr />
              </div>
              <div className="footer-description">
                <ul>
                  {nav.map((list, index) => (
                    <li key={index}>
                      <Link to={list.path}>{list.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2023 Home Space. Owned By Sarthak Mishra.</span>
      </div>
    </>
  );
};

export default Footer;
