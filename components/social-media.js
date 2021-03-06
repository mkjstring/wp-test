import React from "react";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialFollow() {
  return (
    <section className="social-container">
      <div>
        <ul>
          <li className="facebook">
            <a href="#">
              <i className="fa fa-facebook fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li className="twitter">
            <a href="#">
              <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li className="instagram">
            <a href="https://www.instagram.com/kobimathis/">
              <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
            </a>
          </li>
          <li className="whatsapp">
            <a href="#">
              <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
