function Header() {
    return (
        <>
            <ul className="nav justify-content-end container-fluid bg-dark">
                <li className="nav-item">
                    <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Filmes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Salas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Cadastrar Sessões</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-light" href="#">Sessões</a>
                </li>
            </ul>
        </>
    );
}

export default Header;