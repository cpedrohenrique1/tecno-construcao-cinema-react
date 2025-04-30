import './App.css'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

function App() {
  return (
    <>
    <header>
      <Header />
    </header>
    <main>
      <RouterProvider router={router} />
    </main>
    <footer>

    </footer>
    </>
  )
}

export default App
