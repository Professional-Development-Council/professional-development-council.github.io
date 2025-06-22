import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/images/PDC IITGN.jpg";

const errors = {
  Signin: "Try signing in with a different account.",
  OAuthSignin: "Try signing in with a different account.",
  OAuthCallback: "Try signing in with a different account.",
  OAuthCreateAccount: "Try signing in with a different account.",
  EmailCreateAccount: "Try signing in with a different account.",
  Callback: "Try signing in with a different account.",
  OAuthAccountNotLinked:
    "To confirm your identity, sign in with the same account you used originally.",
  EmailSignin: "The e-mail could not be sent.",
  CredentialsSignin:
    "Sign in failed. Check the details you provided are correct.",
  SessionRequired: "Please sign in to access this page.",
  AccessDenied:
    "Access denied. Only IIT Gandhinagar students (@iitgn.ac.in) are allowed to access this website.",
  default: "Unable to sign in.",
};

export default function ErrorPage() {
  const router = useRouter();
  const { error } = router.query;

  const errorMessage = error && errors[error] ? errors[error] : errors.default;

  return (
    <>
      <Head>
        <title>Authentication Error - PDC IIT Gandhinagar</title>
        <meta name="description" content="Authentication error occurred" />
      </Head>

      <div className="error-container">
        <div className="error-card">
          <div className="error-header">
            <div className="logo-container">
              <Image
                src={Logo}
                alt="PDC IIT Gandhinagar Logo"
                width={80}
                height={80}
                priority
              />
            </div>
            <h1>Authentication Error</h1>
          </div>

          <div className="error-content">
            <div className="error-icon">⚠️</div>
            <h2>Access Restricted</h2>
            <p className="error-message">{errorMessage}</p>

            {error === "AccessDenied" && (
              <div className="access-denied-info">
                <p>
                  <strong>
                    This website is exclusively for IIT Gandhinagar students.
                  </strong>
                </p>
                <p>
                  Please ensure you are using your official IIT Gandhinagar
                  email address that ends with <strong>@iitgn.ac.in</strong>
                </p>
              </div>
            )}
          </div>

          <div className="error-actions">
            <Link href="/auth/signin" className="retry-button">
              Try Again
            </Link>
            <Link href="/" className="home-button">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .error-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
          padding: 20px;
        }

        .error-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
          text-align: center;
        }

        .error-header {
          margin-bottom: 30px;
        }

        .logo-container {
          margin-bottom: 20px;
        }

        .error-header h1 {
          color: #2d3748;
          font-size: 1.8rem;
          font-weight: bold;
          margin: 0;
        }

        .error-content {
          margin-bottom: 30px;
        }

        .error-icon {
          font-size: 4rem;
          margin-bottom: 20px;
        }

        .error-content h2 {
          color: #e53e3e;
          font-size: 1.5rem;
          margin-bottom: 15px;
        }

        .error-message {
          color: #4a5568;
          font-size: 1.1rem;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .access-denied-info {
          background: #fed7d7;
          border-radius: 10px;
          padding: 20px;
          margin-top: 20px;
        }

        .access-denied-info p {
          color: #c53030;
          margin: 10px 0;
          line-height: 1.6;
        }

        .error-actions {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .retry-button,
        .home-button {
          padding: 12px 24px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .retry-button {
          background: #4285f4;
          color: white;
        }

        .retry-button:hover {
          background: #3367d6;
          transform: translateY(-2px);
        }

        .home-button {
          background: #f7fafc;
          color: #4a5568;
          border: 2px solid #e2e8f0;
        }

        .home-button:hover {
          background: #edf2f7;
          border-color: #cbd5e0;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .error-card {
            padding: 30px 20px;
            margin: 10px;
          }

          .error-actions {
            flex-direction: column;
            align-items: center;
          }

          .retry-button,
          .home-button {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
    </>
  );
}
