import React from "react";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="left_section">
        <a
          href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Logo} alt="Accessibility logo" />
        </a>
      </div>
      <div className="right_section">
        <div className="navigation_section">
          <nav>
            <ul className="header_navigation_links">
              <li>
                <a
                  href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
                  target="_blank"
                  rel="noreferrer"
                  className="current"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  AboutUs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="login_section">
          <a
            href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
            target="_blank"
            rel="noreferrer"
            aria-label="User Login"
          >
            <i className="fa fa-user-circle"></i>
          </a>
        </div>
        <div className="mobile_nav">
          <a
            href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md"
            target="_blank"
            rel="noreferrer"
            aria-label="menu bar"
          >
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
