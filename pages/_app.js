import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/index.css'
import '../styles/responsive.css'
import '../styles/events.css'; // Import the global CSS file here


// const CLIENT_ID = process.env.NEXT_PUBLIC_PG_CLIENT_ID;

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GoogleOAuthProvider clientId="481922227153-kbtp7vbmkvmvj0jnmvlta46rno1m4lig.apps.googleusercontent.com">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </GoogleOAuthProvider>
    </div>

  )
}

export default MyApp
