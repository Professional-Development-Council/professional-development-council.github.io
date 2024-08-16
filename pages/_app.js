import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/index.css'
import '../styles/responsive.css'
import '../styles/events.css'; // Import the global CSS file here
import { ProfileProvider } from '../components/ProfileContext';

// const CLIENT_ID = process.env.NEXT_PUBLIC_PG_CLIENT_ID;

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

  )
}

export default MyApp
