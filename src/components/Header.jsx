import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';


export default function Header() {
  const [open, setOpen] = useState(false);
	return (
      
      <header className="bg-background/90 backdrop-blur border-b border-accent/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
                  <div className="logo">
          {/* ✅ Logo now links to home page */}
          <Link to="/" >
            <img src={logo} alt="Riverflow laser" />
          </Link>
        </div>
            <div className="border-l-2 border-primary/60 pl-3">
              <div className="font-serif text-lg font-bold leading-tight text-secondary sm:text-xl">
                Riverflow
              </div>
              <div className="text-[10px] font-bold uppercase leading-tight tracking-[0.22em] text-primary sm:text-xs">
                Laser & Skin Clinic Inc
              </div>
              
            </div>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-accent/40 px-2 py-1 text-secondary"
            onClick={() => setOpen((p) => !p)}
          >
            ☰
          </button>

          <nav className="hidden md:flex items-center gap-6 text-sm">
          
           <Link to="/" className="hover:text-primary font-bold text-secondary">
          Home
          </Link>
            <Link to="/treatments" className="hover:text-primary font-bold text-secondary">
          Treatments
          </Link>
          <Link to="/about" className="hover:text-primary font-bold text-secondary">
          About
          </Link>
                <Link to="/team"  className="hover:text-primary text-secondary font-bold" onClick={() => setOpen(false)}>
            Team
          </Link>
             <Link to="/faq" className="hover:text-primary font-bold text-secondary">
          FAQS
          </Link>
            <a href="/contact" className="hover:text-primary text-secondary font-bold">
              Contact
            </a>
          </nav>
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+16046218311"
              className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition hover:text-primary"
              aria-label="Call Riverflow Laser at 604.621.8311"
            >
              <svg
                aria-hidden="true"
                className="h-4 w-4 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
                  fill="currentColor"
                />
              </svg>
              604.621.8311
            </a>
            <a
              href="https://app.squareup.com/appointments/book/9qze62967coq3v/L0BCN9T6Y4JAQ/start"
              target="_blank"
              rel="noreferrer"
              className="inline-flex bg-primary hover:bg-secondary text-white px-5 py-2 rounded-full text-sm font-semibold transition"
            >
              Book Consultation
            </a>
          </div>
        </div>

        {/* mobile menu */}
        {open ? (
          <div className="md:hidden bg-background border-t border-accent/30 px-4 py-3 space-y-2 text-sm">
              <Link to="/"  className="block py-1 text-secondary hover:text-primary font-bold"  onClick={() => setOpen(false)}>
          Home
          </Link>
            <Link to="/treatments"  className="block py-1 text-secondary hover:text-primary font-bold"  onClick={() => setOpen(false)}>
          Treatments
          </Link>
             <Link to="/about"  className="block py-1 text-secondary hover:text-primary font-bold"  onClick={() => setOpen(false)}>
            About
          </Link>
    
          <Link to="/team"  className="block py-1 text-secondary hover:text-primary font-bold"  onClick={() => setOpen(false)}>
            Team
          </Link>
            <Link to="/faq"  className="block py-1 text-secondary hover:text-primary font-bold"  onClick={() => setOpen(false)}>
            FAQS
          </Link>
           <Link to="/contact"  className="block py-1 text-secondary hover:text-primary font-bold"  onClick={() => setOpen(false)}>
            Contact
          </Link>
          </div>
        ) : null}
      </header>

    );
};
