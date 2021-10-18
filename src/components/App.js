import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "fBase";

console.log(authService.currentUser);
function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: args => user.updateProfile(args),
        });
      } else {
        setUserObj(null);
      }
      setInit(true);
    });

    return () => {};
  }, []);
  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: args => user.updateProfile(args),
    });
  };
  return (
    <>
      {init ? (
        <AppRouter
          refreshUser={refreshUser}
          isLoggedIn={Boolean(userObj)}
          userObj={userObj}
        ></AppRouter>
      ) : (
        "Initializing...."
      )}
    </>
  );
}

export default App;
