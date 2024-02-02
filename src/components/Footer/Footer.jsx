import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-auto">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 container">
        <div className="flex justify-center items-center text-bold text-3xl mb-6">
          Arino
        </div>

        <p className="mx-auto max-w-md text-center text-sm md:text-base mb-8 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          consequuntur amet culpa cum itaque neque.
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 mb-8">
          <a href="/" className="footer-link">
            About
          </a>

          <a href="/" className="footer-link">
            Careers
          </a>

          <a href="/" className="footer-link">
            History
          </a>

          <a href="/" className="footer-link">
            Services
          </a>

          <a href="/" className="footer-link">
            Projects
          </a>

          <a href="/" className="footer-link">
            Blog
          </a>
        </div>

        <div className="flex justify-center gap-6 md:gap-8 mb-8">
          <a href="/" rel="noreferrer" target="_blank" className="social-icon">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {/* Facebook icon SVG */}
            </svg>
          </a>

          <a href="/" rel="noreferrer" target="_blank" className="social-icon">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {/* Instagram icon SVG */}
            </svg>
          </a>

          <a href="/" rel="noreferrer" target="_blank" className="social-icon">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {/* Twitter icon SVG */}
            </svg>
          </a>

          <a href="/" rel="noreferrer" target="_blank" className="social-icon">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {/* GitHub icon SVG */}
            </svg>
          </a>

          <a href="/" rel="noreferrer" target="_blank" className="social-icon">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
       
            </svg>
          </a>
        </div>

        <p className="text-center text-xs">
          &copy; {new Date().getFullYear()} Arino. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
