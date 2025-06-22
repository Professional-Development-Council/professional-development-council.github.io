import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

const AuthWrapper = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Public routes that don't require authentication
  const publicRoutes = ["/auth/signin", "/auth/error", "/_error", "/404"];

  // Check if current route is public
  const isPublicRoute = publicRoutes.includes(router.pathname);

  useEffect(() => {
    if (status === "loading") {
      return; // Still loading session
    }

    // If it's a public route, allow access
    if (isPublicRoute) {
      setIsLoading(false);
      return;
    }

    // If no session and not a public route, redirect to sign-in
    if (!session) {
      router.push({
        pathname: "/auth/signin",
        query: { callbackUrl: router.asPath },
      });
      return;
    }

    // If user is authenticated, allow access
    setIsLoading(false);
  }, [session, status, router, isPublicRoute]);

  // Show loading screen while checking authentication
  if (isLoading || status === "loading") {
    return (
      <>
        <Head>
          <title>Loading - PDC IIT Gandhinagar</title>
        </Head>
        <LoadingScreen />
      </>
    );
  }

  // If not authenticated and trying to access protected route, show nothing
  // (redirect will happen in useEffect)
  if (!session && !isPublicRoute) {
    return null;
  }

  return children;
};

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <h2>Professional Development Council</h2>
        <h3>IIT Gandhinagar</h3>
        <p>Verifying your access...</p>
      </div>

      <style jsx>{`
        .loading-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }

        .loading-content {
          max-width: 400px;
          padding: 40px;
        }

        .loading-spinner {
          width: 60px;
          height: 60px;
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 30px auto;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .loading-content h2 {
          font-size: 1.8rem;
          font-weight: bold;
          margin: 0 0 10px 0;
        }

        .loading-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0 0 20px 0;
          opacity: 0.9;
        }

        .loading-content p {
          font-size: 1rem;
          opacity: 0.8;
          margin: 0;
        }

        @media (max-width: 768px) {
          .loading-content {
            padding: 20px;
          }

          .loading-content h2 {
            font-size: 1.5rem;
          }

          .loading-content h3 {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AuthWrapper;
