import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="f_widget company_widget wow fadeInLeft">
                  <h3 className="f-title f_600 t_color f_size_18">Reach Out</h3>
                  <p>
                    I'm always open to a virtual coffee — especially regarding
                    freelance work or with underrepresented folks in tech
                    looking for early career guidance. Feel free to get in touch
                    with me.
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="f_widget about-widget pl_70 wow fadeInLeft">
                  <h3 className="f-title f_600 t_color f_size_18">Address</h3>
                  <p>
                    Coopers Court, The Old Brewery Quarter, Caroline Street,
                    Cardiff - CF10 1FN. United Kingdom
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="f_widget about-widget pl_70 wow fadeInLeft">
                  <h3 className="f-title f_600 t_color f_size_18">
                    Call/Email
                  </h3>
                  <p>+44(0)7787803131 - UK</p>
                  <p>+91(0)8855998888 - India</p>
                  <p>anandkadam19@outlook.com</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="f_widget social-widget pl_70 wow fadeInLeft">
                  <h3 className="f-title f_600 t_color f_size_18">Follow Me</h3>
                  <div className="f_social_icon">
                    <a href="https://www.INSTAGRAM.COM/MRTOWNBOY">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.linkedin.com/in/mrtownboy/">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one"></div>
            <div className="footer_bg_two"></div>
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">
                  Designed and developed with ❤ by Anand Kadam. ©2023 All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
