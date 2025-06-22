import { getProviders, signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../../public/assets/images/PDC IITGN.jpg";

export default function SignIn({ providers }) {
  const router = useRouter();
  const [error, setError] = useState("");

  useEffect(() => {
    if (router.query.error) {
      if (router.query.error === "AccessDenied") {
        setError(
          "Access denied. Only IIT Gandhinagar students (@iitgn.ac.in) are allowed to access this website.",
        );
      } else {
        setError("An error occurred during sign-in. Please try again.");
      }
    }
  }, [router.query.error]);

  const handleSignIn = async (providerId) => {
    try {
      // Clear any previous errors
      setError("");

      const result = await signIn(providerId, {
        callbackUrl: router.query.callbackUrl || "/",
        redirect: true,
      });

      if (result?.error) {
        if (result.error === "AccessDenied") {
          setError(
            "Access denied. Only IIT Gandhinagar students (@iitgn.ac.in) are allowed to access this website.",
          );
        } else {
          setError(
            "Sign-in failed. Please try again with your IIT Gandhinagar email.",
          );
        }
      } else if (result?.url) {
        // Successful sign-in, redirect to the callback URL
        window.location.href = result.url;
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>Sign In - PDC IIT Gandhinagar</title>
        <meta
          name="description"
          content="Sign in to access PDC IIT Gandhinagar resources"
        />
      </Head>

      <div className="signin-container">
        <div className="signin-card">
          <div className="signin-header">
            <div className="logo-container">
              <Image
                src={Logo}
                alt="PDC IIT Gandhinagar Logo"
                width={80}
                height={80}
                priority
              />
            </div>
            <h1>Professional Development Council</h1>
            <h2>IIT Gandhinagar</h2>
            <p>Access restricted to IIT Gandhinagar students only</p>
          </div>

          {error && (
            <div className="error-message">
              <p>{error}</p>
            </div>
          )}

          <div className="signin-content">
            <h3>Sign in to continue</h3>
            <p>
              Please use your IIT Gandhinagar email (@iitgn.ac.in) to sign in.
            </p>
              <div  className="provider-container">
                <button
                  onClick={() => handleSignIn('google')}
                  className="signin-button"
                >
                  <span className="signin-icon">🔐</span>
                  Sign in with Google
                </button>
              </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .signin-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 20px;
        }

        .signin-card {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 100%;
          text-align: center;
        }

        .signin-header {
          margin-bottom: 30px;
        }

        .logo-container {
          margin-bottom: 20px;
        }

        .signin-header h1 {
          color: #2d3748;
          font-size: 1.8rem;
          font-weight: bold;
          margin: 10px 0 5px 0;
        }

        .signin-header h2 {
          color: #4a5568;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 15px 0;
        }

        .signin-header p {
          color: #718096;
          font-size: 0.9rem;
          margin: 0;
        }

        .error-message {
          background: #fed7d7;
          border: 1px solid #fc8181;
          border-radius: 10px;
          padding: 15px;
          margin-bottom: 20px;
        }

        .error-message p {
          color: #c53030;
          margin: 0;
          font-weight: 500;
        }

        .signin-content {
          margin-bottom: 30px;
        }

        .signin-content h3 {
          color: #2d3748;
          font-size: 1.4rem;
          margin-bottom: 10px;
        }

        .signin-content p {
          color: #718096;
          margin-bottom: 25px;
          line-height: 1.6;
        }

        .provider-container {
          margin-bottom: 15px;
        }

        .signin-button {
          width: 100%;
          background: #4285f4;
          color: white;
          border: none;
          border-radius: 12px;
          padding: 15px 20px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .signin-button:hover {
          background: #3367d6;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(66, 133, 244, 0.3);
        }

        .signin-icon {
          font-size: 1.2rem;
        }

        .signin-footer {
          background: #f7fafc;
          border-radius: 10px;
          padding: 20px;
          border-left: 4px solid #4285f4;
        }

        .signin-footer p {
          color: #4a5568;
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .signin-instructions {
          background: #e6f3ff;
          border-radius: 10px;
          padding: 15px;
          margin: 20px 0;
          border-left: 4px solid #2563eb;
        }

        .signin-instructions p {
          color: #1e40af;
          margin: 0 0 10px 0;
          font-weight: 600;
        }

        .signin-instructions ul {
          color: #1e40af;
          margin: 0;
          padding-left: 20px;
        }

        .signin-instructions li {
          margin: 5px 0;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .signin-card {
            padding: 30px 20px;
            margin: 10px;
          }

          .signin-header h1 {
            font-size: 1.5rem;
          }

          .signin-header h2 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  // If user is already authenticated, redirect to home page
  if (session) {
    return {
      redirect: {
        destination: context.query.callbackUrl || "/",
        permanent: false,
      },
    };
  }

  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
