import { SessionProvider } from "next-auth/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AuthWrapper from "../components/AuthWrapper";
import "../styles/index.css";
import "../styles/responsive.css";
import "../styles/events.css"; // Import the global CSS file here
import "../styles/prepmat.css"; // Import the PrepMat professional styles
import "aos/dist/aos.css"; // Import AOS CSS for animations

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <AuthWrapper>
        <div>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </AuthWrapper>
    </SessionProvider>
  );
}

export default MyApp;
