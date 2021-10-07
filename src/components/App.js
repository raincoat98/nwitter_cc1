import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "fBase";

console.log(authService.currentUser);
function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });

    return () => {};
  }, []);
  return (
    <React.Fragment>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}></AppRouter>
      ) : (
        "Initializing...."
      )}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
