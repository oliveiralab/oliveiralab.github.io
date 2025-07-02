
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../constants';
import Logo from '../ui/Logo';
import { NavLinkItem } from '../../types';
import ThemeToggleButton from '../ui/ThemeToggleButton';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinkClasses = (isActive: boolean): string =>
    `px-3 py-2 rounded-md text-sm font-medium font-heading transition-colors duration-150 ${
      isActive
        ? 'bg-primary text-white dark:bg-primary-dark dark:text-white'
        : 'text-gray-700 dark:text-dark-text-secondary hover:bg-gray-200 dark:hover:bg-dark-surface-alt hover:text-gray-900 dark:hover:text-dark-text-primary'
    }`;

  return (
    <header className="bg-white dark:bg-dark-surface shadow-md sticky top-0 z-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16"> {/* Changed h-20 to h-16 */}
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex items-baseline space-x-4">
              {NAV_LINKS.map((link: NavLinkItem) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => navLinkClasses(isActive)}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
            <ThemeToggleButton />
          </div>
          <div className="md:hidden flex items-center">
             <ThemeToggleButton />
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-dark-text-secondary hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary dark:focus:ring-offset-dark-surface"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isMobileMenuOpen && (
        <div className="md:hidden dark:bg-dark-surface-alt" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium font-heading transition-colors duration-150 ${
                    isActive
                      ? 'bg-primary text-white dark:bg-primary-dark dark:text-white'
                      : 'text-gray-700 dark:text-dark-text-secondary hover:bg-gray-200 dark:hover:bg-dark-surface-alt hover:text-gray-900 dark:hover:text-dark-text-primary'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
