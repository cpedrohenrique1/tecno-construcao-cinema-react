import Button from "../components/Button";
import Input from "../components/Input";

export function Filmes() {
    return (
        <>
            <div className="container">
                <br />

                <h3>Filmes</h3>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <Button id={"btnNovo"} nome={"Adicionar Filme"} classes="btn-success" />
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="input-group mb-3">
                            <Input type={"text"} classes={"form-control"} placeholder={"Digite o título do filme"} id={"buscaNomeFilme"}/>
                            <Button id={"btnBuscarFilme"} nome={"Buscar"} classes={"btn-primary"}/>
                        </div>
                    </div>
                </div>

                <div className="col-12 table-responsive">

                    <table className="table table-striped align-middle">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Titulo</th>
                                <th scope="col">Genero</th>
                                <th scope="col">Classificação</th>
                                <th scope="col">Duração</th>
                                <th scope="col">Data-Estréia</th>
                                <th scope="col">Editar / Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>
                                    <td>
                                    </td>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}