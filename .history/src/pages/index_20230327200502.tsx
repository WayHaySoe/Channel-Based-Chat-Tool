import React, { useState, FC } from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export default function Home() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <>
      {!isRegistering ? (
        <SignIn handleSignUpClick={() => setIsRegistering(true)} />
      ) : (
        <SignUp handleSignInClick={() => setIsRegistering(false)} />
      )}
    </>
  );
}
