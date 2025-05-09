export function Filmes() {
    return (
        <>
            <div className="container">
                <br />

                <h3>Filmes</h3>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <button id="btnNovo" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#idModalFilme">
                            Adicionar Filme
                        </button>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Digite o título do filme" id="buscaNomeFilme" />
                            <button type="button" className="btn btn-primary" id="btnBuscarFilme">Buscar</button>
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