"use client";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

// Display some of the user's information
export default function page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  function handleSignIn() {
    gitHubSignIn()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Sign in failed", error);
      });
  }

  function handleSignOut() {
    firebaseSignOut()
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.error("Sign out failed", error);
      });
  }

  return (
    <main>
      <div>
        <h1>Week 8</h1>

        {!user && (
          <button
            onClick={handleSignIn}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out"
          >
            Sign In with GitHub
          </button>
        )}
        {user && (
          <>
            <div className="text-center mb-4">
              <p className="text-gray-800 font-semibold">Welcome,</p>
              <p className="text-gray-800 font-semibold">
                {user.displayName || "Anonymous User"}
              </p>
              <p className="text-gray-800 font-semibold">
                Your Email: {user.email || "Anonymous"}
              </p>
              <h2 className="text-xl">
                <Link
                  href="week-10/shopping-list"
                  className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                >
                  You are authenticated to go to shopping list
                </Link>
              </h2>
            </div>
            <button
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full transition duration-300 ease-in-out"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </main>
  );
}
