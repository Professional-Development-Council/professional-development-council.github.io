import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "../styles/index.css";
import "../styles/responsive.css";
import "../styles/events.css"; // Import the global CSS file here
import "../styles/prepmat.css"; // Import the PrepMat professional styles
import "aos/dist/aos.css"; // Import AOS CSS for animations
import { ProfileProvider } from "../components/ProfileContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
        <ProfileProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ProfileProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default MyApp;
