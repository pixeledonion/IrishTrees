import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { SITE, navItems } from '../content/site';

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Scroll to top on navigation.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <a className="skipLink" href="#main">
        Skip to content
      </a>

      <header className="siteHeader">
        <div className="siteHeader__inner">
          <Link className="brand" to="/">
            <span className="brand__mark" aria-hidden="true">
              ❦
            </span>
            <span className="brand__name">{SITE.name}</span>
          </Link>

          <button
            className="navToggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="navToggle__bars" aria-hidden="true" data-open={menuOpen} />
            {menuOpen ? 'Close' : 'Menu'}
          </button>

          <nav
            id="primary-nav"
            className="primaryNav"
            data-open={menuOpen}
            aria-label="Primary"
          >
            <ul>
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      isActive ? 'navLink navLink--active' : 'navLink'
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" className="siteMain">
        <Outlet />
      </main>

      <footer className="siteFooter">
        <div className="siteFooter__inner">
          <p className="siteFooter__brand">{SITE.name}</p>
          <p className="siteFooter__tag">{SITE.tagline}</p>
          <p className="siteFooter__meta">
            An educational rewilding project. Content and imagery are researched
            and generated collaboratively; see{' '}
            <Link to="/sources">Sources</Link> for references.
          </p>
        </div>
      </footer>
    </>
  );
}
