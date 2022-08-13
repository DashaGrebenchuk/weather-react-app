import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer">
        Coded by Dasha Grebenchuk and is{" "}
        <a
          href="https://github.com/DashaGrebenchuk/weather-react"
          target="_blank"
          className="link-github"
          rel="noreferrer"
        >
          open-sourced on GitHub{" "}
        </a>
      </div>
      <div className="footer-icons">
        <a
          href="https://www.instagram.com/mymeamors/"
          className="inst-link"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram inst-icon"></i>
        </a>
        <a
          className="fb-link"
          target="_blank"
          href="https://www.facebook.com/darya.malevanchenko"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook fb-icon"></i>
        </a>
        <a
          className="lnk-link"
          target="_blank"
          href="https://www.linkedin.com/in/dgrebenchuk/"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin lnk-icon"></i>
        </a>
      </div>
    </div>
  );
}
