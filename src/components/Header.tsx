import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <ul className="nav justify-content-end container-fluid bg-dark">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link text-light">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={"filmes"} className="nav-link text-light">Filmes</Link>
                </li>
                <li className="nav-item">
                    <Link to={"salas"} className="nav-link text-light">Salas</Link>
                </li>
                <li className="nav-item">
                    <Link to={"cadastrar-sessoes"} className="nav-link text-light">Cadastrar Sessões</Link>
                </li>
                <li className="nav-item">
                    <Link to={"sessoes"} className="nav-link text-light">Sessões</Link>
                </li>
                <li className="nav-item">
                    <Link to={"ingressos"} className="nav-link text-light">Ingressos</Link>
                </li>
            </ul>
        </>
    );
}

export default Header;