import './App.module.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Saved from './pages/Saved';
import About from './pages/About';
import Home from './pages/Home';
import React from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: 'saved',
        element: <Saved></Saved>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
