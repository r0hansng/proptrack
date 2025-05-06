import './styles/globals.css'
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes.jsx';

function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
