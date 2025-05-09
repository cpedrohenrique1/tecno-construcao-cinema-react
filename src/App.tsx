import './App.css'
import {Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';

function App() {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default App
