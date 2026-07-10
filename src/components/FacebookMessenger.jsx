// src/components/FacebookMessenger.jsx
"use client";

import { useEffect, useState } from "react";

export default function FacebookMessenger() {
  const [fbReady, setFbReady] = useState(false);

  useEffect(() => {
    // 1) make sure fb-root exists
    if (!document.getElementById("fb-root")) {
      const root = document.createElement("div");
      root.id = "fb-root";
      document.body.appendChild(root);
    }

    // 2) create chat plugin container
    if (!document.getElementById("fb-customer-chat")) {
      const chat = document.createElement("div");
      chat.id = "fb-customer-chat";
      chat.className = "fb-customerchat";
      // 🔴 put your actual PAGE ID here (number, not username)
      chat.setAttribute("page_id", "Y108909175056273");
      chat.setAttribute("attribution", "biz_inbox");
      document.body.appendChild(chat);
    }

    // 3) load FB SDK once
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      document.body.appendChild(script);

      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: "v19.0",
        });
        setFbReady(true);
      };
    } else {
      // SDK already loaded
      if (window.FB && window.FB.XFBML) {
        window.FB.XFBML.parse();
        setFbReady(true);
      }
    }
  }, []);

  // handler to open chat
  const openChat = () => {
    // If SDK loaded, tell Messenger to show
    if (window.FB && window.FB.CustomerChat) {
      window.FB.CustomerChat.show(true);
    } else {
      // fallback: open in messenger tab
      window.open("https://facebook.com/shoptruecanada", "_blank", "noreferrer");
    }
  };

  return (
    <>
      {/* floating messenger button */}
      <button
        onClick={openChat}
        type="button"
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg hover:scale-105 transition"
        aria-label="Chat on Facebook Messenger"
      >
        {/* Messenger icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 36"
          className="h-6 w-6"
        >
          <path
            d="M18 3C9.716 3 3 9.23 3 17.44c0 4.37 1.75 8.01 4.61 10.3.24.19.39.47.4.78l.08 2.46c.03.87.94 1.43 1.72 1.03l2.74-1.38c.25-.12.54-.15.81-.08 1.39.38 2.87.58 4.64.58 8.284 0 15-6.23 15-14.44C33 9.23 26.284 3 18 3zm7.03 11.87l-3.72 5.91c-.54.86-1.7 1.09-2.53.5l-2.72-1.97a.87.87 0 0 0-1.02.01l-3.22 2.43c-.6.45-1.42-.26-1.02-.9l3.73-5.88c.54-.86 1.7-1.09 2.53-.5l2.72 1.97c.3.22.7.22.99-.01l3.25-2.44c.6-.45 1.42.26 1.01.88z"
            fill="white"
          />
        </svg>
      </button>
    </>
  );
}
