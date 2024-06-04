import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/index.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  // const clientId = process.env.NEXT_PUBLIC_PG_CLIENT_ID;
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
