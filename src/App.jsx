import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes.jsx';
import './styles/globals.css';

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
