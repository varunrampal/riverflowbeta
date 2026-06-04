import React, { useState } from "react";
import logo from "../assets/images/logo.png";


const AboutSlider = () => {
  // State to control visibility of the offcanvas
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the offcanvas visibility
  const toggleOffCanvas = () => {
    console.log("Toggling offcanvas. Current state:", isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <div>

<div className="border-r border-black/10 h-full w-20 min-w-20 flex justify-center items-center absolute left-0 top-0 max-xl:hidden">
				


      {/* Button to toggle the offcanvas */}
      <button
        type="button"
        className="py-2.4 px-4 rounded-lg toggle-nav-btn"
        onClick={toggleOffCanvas}
      >
        <span className="w-5 h-0.5 bg-secondary block duration-500"></span>
        <span className="w-4 my-1.25 h-0.5 bg-secondary block duration-500"></span>
        <span className="w-5 h-0.5 bg-secondary block duration-500"></span>
      </button>
      </div>

      {/* Offcanvas div that toggles based on isOpen */}
      <div
        id="offcanvas-right"
        className={`fixed top-0 right-0 z-[9999999] h-screen overflow-y-auto transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } bg-white w-88 custom-scroll`}
      >
        <div className="flex items-center justify-between p-4">
          <button
            type="button"
            className="text-xl"
            onClick={toggleOffCanvas} // Close on this button click
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="p-7.5 grow overflow-y-auto">
          <div className="mb-8.75">
            <div className="w-40 mb-5">
              <a href="index.html">
                <img src={logo} alt="/" />
              </a>
            </div>
            <p>
              At Riverstone Laser, we believe every individual deserves to shine. Our experienced team offers luxurious skincare solutions designed to deliver real, lasting results — because you’re not just glowing, you’re truly unforgettable..
            </p>
          </div>

          <div className="mb-8.75">
            <div className="mb-3.75">
              <h4 className="text-xl mb-0">Contact Us</h4>
            </div>
            <ul className="list-check">
              <li className="relative p-1.25 ps-7.5 text-base before:absolute before:left-0 before:font-black before:content-['\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                Unit 108 – 19705 56 Avenue Langley, BC V3A 3X
              </li>
              {/* <li className="relative p-1.25 ps-7.5 text-base before:absolute before:left-0 before:font-black before:content-['\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                <a href="mailto:email@domain.com" className="text-body">
                  email@domain.com
                </a>
              </li> */}
              <li className="relative p-1.25 ps-7.5 text-base before:absolute before:left-0 before:font-black before:content-['\f109'] before:font-['flaticon'] before:text-primary before:top-2">
                <a href="tel:+11234567890" className="text-body">
                  604-621-8311
                </a>
              </li>
            </ul>
          </div>

          {/* <div className="mb-8.75">
            <div className="mb-3.75">
              <h4 className="text-xl mb-0">Newsletter</h4>
            </div>
            <form
              className="dzSubscribe style-2"
              action="../assets/script/mailchimp.php"
              method="post"
            >
              <div className="dzSubscribeMsg"></div>
              <div className="form-group">
                <div className="relative flex flex-wrap items-stretch w-full">
                  <input
                    name="dzEmail"
                    required="required"
                    type="email"
                    className="relative flex-1 w-[1%] h-15 text-bodycolor border-b-2 border-[#DAE2F2] text-base pr-15 py-3.75 z-0 placeholder:text-bodycolor"
                    placeholder="Your Email Address"
                  />
                  <div className="absolute right-1.25 top-1/2 -translate-y-1/2 z-1">
                    <button
                      name="submit"
                      value="Submit"
                      type="submit"
                      className="text-primary p-2 cursor-pointer"
                    >
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div> */}

          {/* <div className="mb-8.75">
            <div className="mb-3.75">
              <h4 className="text-xl mb-0">Follow Us</h4>
            </div>
            <div className="flex">
              <ul className="flex">
                <li className="inline-block mr-1.25">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li className="inline-block mr-1.25">
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="inline-block mr-1.25">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="inline-block mr-1.25">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </li>
                <li className="inline-block mr-1.25">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    className="size-11 leading-[44px] text-center text-sm block rounded-full bg-light text-primary hover:text-white hover:bg-primary"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
