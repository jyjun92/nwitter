import React, { useState } from 'react';
import AppRouter from './Router';
import { authService } from "fbase";

//all logics should be handled here
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; Nwitter </footer>
    </>
  );
}

export default App;
