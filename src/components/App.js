import React, { useState } from "react";
import AppRouter from "./Router";
import { authService } from "fBase";

console.log(authService.currentUser);
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <React.Fragment>
      <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
