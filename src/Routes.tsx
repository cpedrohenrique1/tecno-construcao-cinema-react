import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { Filmes } from "./pages/Filmes";
import Salas from "./pages/Salas";
import CadastrarSessoes from "./pages/CadastrarSessoes";
import Sessoes from "./pages/Sessoes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "filmes",
        element: <Filmes/>
      },
      {
        path: "salas",
        element: <Salas/>
      },
      {
        path:"cadastrar-sessoes",
        element: <CadastrarSessoes/>
      },
      {
        path: "sessoes",
        element: <Sessoes/>
      }
    ]
  }
]);