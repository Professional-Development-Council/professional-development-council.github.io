import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { GoogleOAuthProvider } from '@react-oauth/google';
import '../styles/index.css'
import '../styles/responsive.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GoogleOAuthProvider clientId="503740099223-aufl1dd9v9rdi05hqua6k8o1cr85uiq8.apps.googleusercontent.com">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </GoogleOAuthProvider>
    </div>

  )
}

export default MyApp
