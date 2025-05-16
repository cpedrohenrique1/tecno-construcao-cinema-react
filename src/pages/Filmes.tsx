import Button from "../components/Button";
import Input from "../components/Input";
import { Filme } from "../interfaces/Filme.interface";
import Table from "../interfaces/Table.interface";

export function Filmes() {
    let tableFilmes: Table<Filme>[] = [];
    let filme: Filme[] = [];
    
    let film: Filme = {
        classificacao: 4,
        dataEstreia: Date.now().toString(),
        descricao: "asd",
        duracao: 123,
        genero: "madeira",
        id: 1,
        titulo: "tias"
    };
    filme.push(
        film
    )
    const info1: Table<Filme> = {
        tituloTable: "Teste",
        conteudoTable: filme
    }
    tableFilmes.push(info1)
    console.log(tableFilmes);
    return (
        <>
            <div className="container">
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