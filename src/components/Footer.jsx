import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 lg:pt-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top content */}
        <div className="lg:w-8/12 mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <a href="https://riverflowlaser.com/">
              <img
                src={logo}
                alt="Riverflow Laser & Skin Clinic logo"
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* Intro text */}
          <p className="mb-6 text-background/80 text-sm leading-relaxed">
            Welcome to Riverflow Laser & Skin Clinic in Langley, BC. Experience the perfect blend of beauty and innovation in a calm, luxurious setting. Our friendly professionals are here to elevate your experience and help you look and feel your absolute best.
          </p>
         

          <h2 className="text-2xl md:text-3xl font-bold mb-10">
            Discover personalized treatments that enhance your natural beauty
          </h2>
        </div>

        {/* 3 columns */}
        <div className="grid gap-10 md:grid-cols-3 mb-10 md:mb-14">
          {/* Socials */}
          <div>
            <h6 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Socials
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.facebook.com/riverflowlaser/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/riverflowlaser/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent transition"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h6 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Menu
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="" className="hover:text-accent">
                  Home
                </a>

              </li>
              <li>
               
                <Link to='/about' className="hover:text-accent">About</Link>
              </li>
              <li>
            <Link to='/treatments' className="hover:text-accent">Treatments</Link>
              </li>
              <li>
                 <Link to='/team' className="hover:text-accent">Team</Link>
              </li>
              <li>
                 <Link to='/contact' className="hover:text-accent">Contact</Link>
              </li>
              <li>
                  <Link to='/faq' className="hover:text-accent">FAQS</Link>
              </li>
            </ul>
          </div>

          {/* Say Hello */}
          <div>
            <h6 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Say Hello
            </h6>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@riverflowlaser.com" className="hover:text-accent">
                info@riverflowlaser.com
                </a>
              </li>
              <li>
                <a href="tel:+16046218311" className="hover:text-accent">
                (604) 621-8311
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?cid=7786788616964143170&amp;g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&amp;hl=en-US&amp;source=embed"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-accent"
                >
                Unit 108 – 19705 56 Avenue Langley, BC V3A 3X7
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-6 border-t border-accent/20">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-background/85">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <a href="https://riverflowlaser.com/" className="underline-offset-2 hover:underline">
             Riverflow Laser & Skin Clinic Inc
            </a>
            . <span className="whitespace-nowrap">All rights reserved.</span>{" "}
            <a
              href="https://www.riverflow.com"
              className="ml-1 hover:text-accent"
              rel="noopener"
            >
              Website Design &amp; Marketing by Riverflow Team
            </a>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            <a
              href="#"
              className="hover:text-accent whitespace-nowrap"
            >
              Privacy Policy
            </a>
            {/* <span className="opacity-40">|</span> */}
            {/* <a
              href="https://langley.uptownmedspa.ca/shipping-policy/"
              className="hover:text-accent whitespace-nowrap"
            >
              Shipping Policy
            </a> */}
            <span className="opacity-40">|</span>
            <a
              href="#"
              className="hover:text-accent whitespace-nowrap"
            >
              Refund and Return Policy
            </a>
            <span className="opacity-40">|</span>
            <a
              href="#"
              className="hover:text-white whitespace-nowrap"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
