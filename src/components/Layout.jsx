import Header from './Header.jsx';
import TopBar from './TopBar.jsx';
import Footer from './Footer.jsx';
import FloatingBookButton from './FloatingBookButton.jsx';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-secondary">
      <TopBar/>
      <Header />

      {/* Main content */}
      <main className="flex-1 bg-background">
        {children}
      </main>

      <FloatingBookButton />

      {/* <a
   href="https://www.facebook.com/ShopTrueCanada"
  target="_blank"
  rel="noreferrer"
  className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg hover:scale-105 transition"
  aria-label="Chat on Facebook Messenger"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    className="h-6 w-6"
  >
   
    <path
      d="M18 3C9.7 3 3 9.4 3 17.3c0 4.4 1.9 7.9 5.1 10.4.2.2.4.5.4.8l.1 2.7c0 .9.9 1.4 1.7 1l3-1.6c.3-.1.6-.2.9-.1 1.3.3 2.6.5 3.9.5 8.3 0 15-6.4 15-14.3C33 9.4 26.3 3 18 3z"
      fill="white"
      fillOpacity="0.0"
    />
  
    <path
      d="M25 14.5c-.3-.5-.9-.6-1.4-.3l-3.4 2.5c-.3.2-.7.2-1 0l-2.8-2c-.5-.4-1.2-.2-1.5.3l-3 4.7c-.3.5.2 1.1.7.9l3.4-1.4c.2-.1.5 0 .7.1l2.4 1.8c.4.3.9.2 1.1-.2l3.1-5c.2-.2.2-.5.1-.7z"
      fill="white"
    />
  </svg>
</a> */}
      <Footer/>
    </div>
  );
};
