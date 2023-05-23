import React, { useState } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/avatar.png';
import ThemeContext from '../context/ThemeContext';

const tabs = [
  { content: 'About', href: 'about' },
  { content: 'Experience', href: 'experience' },
  { content: 'Education', href: 'education' },
  { content: 'Skills', href: 'skills' },
  { content: 'Interests', href: 'interests' },
  { content: 'Download', href: 'download' }
];

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(showMenu => !showMenu);

  return (
    <ThemeContext.Consumer>
      {theme => (
        <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <img
            className="img-fluid img-profile rounded-circle mx-lg-auto mb-lg-2"
            src={avatar}
            alt="avatar-img"
          />
        </a>
        <div className="navbar-buttons d-flex align-items-center">
          <button className="btn btn-link btn-switcher py-0 mr-2 d-lg-none" onClick={theme.toggleDark}>
            <i className="fas fa-adjust"></i>
          </button>
          <button
            className={showMenu ? 'navbar-toggler open' : 'navbar-toggler'}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          id="navbarSupportedContent"
          className={`${showMenu ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'}`}>
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a
                      className="nav-link"
                      href={`#${href}`}
                      action={toggleMenu}
                    >
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
        <section className="d-none d-lg-block p-3 mb-auto">
          <button className="btn btn-link btn-switcher" onClick={theme.toggleDark}>
            <i className="fas fa-adjust"></i>
          </button>
        </section>
      </nav>
      )}
    </ThemeContext.Consumer>
  );
}

export default Sidebar;
