import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/index.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GoogleOAuthProvider clientId="191629708651-ct4hu14qejdlrt9nja0ne6l8tj3is8gs.apps.googleusercontent.com">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </GoogleOAuthProvider>
    </div>

  )
}

export default MyApp
