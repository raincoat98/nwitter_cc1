import React, { useState, useEffect } from "react";
import AppRouter from "./Router";
import { authService } from "fBase";

console.log(authService.currentUser);
function App() {
  const [init, setInit] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true);
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
        <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
      ) : (
        "Initializing...."
      )}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
