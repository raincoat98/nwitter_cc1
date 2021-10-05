import React, { useState } from "react";
import AppRouter from "./Router";
import { auth } from "firebase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <React.Fragment>
      <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
