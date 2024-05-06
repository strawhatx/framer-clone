// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgot-password";
import Editor from './pages/editor';

import "./App.scss"

const App: React.FC = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/signup"
          element={<Signup/>}
        />
        <Route
          path="/signin"
          element={<Signin />}
        />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
         <Route
          path="/app/editor"
          element={<Editor />}
        />
      </Routes>
  </BrowserRouter>
  );
};

export default App;