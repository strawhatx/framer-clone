// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ConfigProvider, theme } from 'antd';
import Home from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import ForgotPassword from "./pages/forgot-password";
import Editor from './pages/editor';
import Workspace from './pages/workspace';

import "./App.scss"
import { button, layout } from './assets/theme';


const App: React.FC = () => {
  const { darkAlgorithm } = theme;
  return (
    <ConfigProvider
    theme={{
      algorithm: darkAlgorithm,
      components: {
        Button: button,
        Layout: layout,
      },
    }}
      
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/signup"
            element={<Signup />}
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
            path="/app/space"
            element={<Workspace />}
          />
          <Route
            path="/app/editor"
            element={<Editor />}
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;