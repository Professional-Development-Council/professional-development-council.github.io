import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/index.css'
import '../styles/responsive.css'

// CLIENT_ID - 481922227153-kbtp7vbmkvmvj0jnmvlta46rno1m4lig.apps.googleusercontent.com
// CLIENT_ID - 191629708651-ct4hu14qejdlrt9nja0ne6l8tj3is8gs.apps.googleusercontent.com
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
