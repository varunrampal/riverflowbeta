"use client";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { SITE_CONFIG } from "../data/site";
const links = [["Treatments", "/treatments"], ["About", "/about"], ["Team", "/team"], ["Results", "/gallery"], ["Journal", "/blog"], ["Contact", "/contact"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="premium-header"><div className="premium-topline"><span>Advanced skin & laser care · Langley, BC</span><a href={`tel:${SITE_CONFIG.phone}`} aria-label={`Call Riverflow at ${SITE_CONFIG.phoneDisplay}`}><i aria-hidden="true" /> Call {SITE_CONFIG.phoneDisplay}</a></div><div className="premium-header__inner">
    <Link to="/" className="brand" aria-label="Riverflow home"><img src={logo} alt="Riverflow Laser & Skin Clinic" /></Link>
    <nav className="premium-nav" aria-label="Main navigation">{links.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}</nav>
    <a className="header-book" href={SITE_CONFIG.bookingUrl} target="_blank" rel="noreferrer">Book an appointment <span>↗</span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><span /><span /></button>
  </div>{open && <nav className="mobile-nav">{links.map(([label, href]) => <Link key={href} to={href} onClick={() => setOpen(false)}>{label}</Link>)}<a href={SITE_CONFIG.bookingUrl}>Book an appointment</a></nav>}</header>;
}
