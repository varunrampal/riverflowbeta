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
           Personalized Laser and Skin Treatments in Langley, BC that enhance your natural beauty
          </h2>
        </div>

        {/* Footer links and contact details */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-10 md:mb-14">
          {/* Socials */}
          <div>
            <h6 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Socials
            </h6>
            <ul className="footer-inline-links space-y-2 text-sm">
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
            <ul className="footer-inline-links space-y-2 text-sm">
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
                 <Link to='/blog' className="hover:text-accent">Blog</Link>
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
                <a href="tel:+18334989898" className="hover:text-accent">
                1-833-498-9898
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

          {/* Business Hours */}
          <div>
            <h6 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Business Hours
            </h6>
            <ul className="space-y-2 text-sm text-background/85">
              <li>
                <span className="block font-medium text-white">Monday – Friday</span>
                <span>10:00 AM – 6:00 PM</span>
              </li>
              <li>
                <span className="block font-medium text-white">Saturday &amp; Sunday</span>
                <span>11:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom__inner">
          <div className="footer-bottom__copyright">
            <span>© {new Date().getFullYear()} Riverflow Laser &amp; Skin Clinic Inc.</span>
            <span>All rights reserved.</span>
          </div>
          <nav className="footer-bottom__links" aria-label="Legal information">
            <a href="#">Privacy</a>
            <a href="#">Refunds &amp; returns</a>
            <a href="#">Terms</a>
          </nav>
        </div>
        <div className="footer-bottom__credit">Designed by Shandilya Group Of Companies</div>
      </div>
    </footer>
  );
}
