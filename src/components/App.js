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
        setUserObj(user);
      }
      setInit(true);
    });

    return () => {};
  }, []);
  return (
    <React.Fragment>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj}></AppRouter>
      ) : (
        "Initializing...."
      )}
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
