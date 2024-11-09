import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import React, { useState } from "react";
import { auth } from "../../Firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.log("ERROR", error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out done");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
      <button onClick={handleSignOut}>Sign Out</button> */}

      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Login with Google</button>
          <button onClick={handleGithubSignIn}>Login with Github</button>
        </>
      )}
      {user && (
        <div>
          <h4>{user.displayName}</h4>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="profile" />
        </div>
      )}
    </div>
  );
};

export default Login;
