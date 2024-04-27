export const Header = () => {
  return (
    <section id="header-id">
      <div>
        <div className="header__content container">
          <div className="site-logo"></div>

          <div className="navigation">
            <button className="nav-btn"></button>
            <nav className="rollout-nav nav-closed">
              <a href="#banner-id">domů</a>
              <a href="#menu-id">menu</a>
              <a href="#gallery-id">galerie</a>
              <a href="#contact-id">kontakt</a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
