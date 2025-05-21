import Button from "../components/Button";
import Input from "../components/Input";
import Table from "../components/Table";
import { Filme } from "../interfaces/Filme.interface";

export function Filmes() {
    let film: Filme = {
        classificacao: "L",
        dataEstreia: new Date,
        descricao: "asd",
        duracao: 123,
        genero: "madeira",
        id: 1,
        titulo: "tias"
    };
    const arrayFilmes = [];
    arrayFilmes.push(film);
    arrayFilmes.push(film);
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

                <Table movieData={arrayFilmes} headers={["ID", "Titulo", "Genero", "Classificação", "Duração", "Data-Estréia", "Editar / Excluir"]}/>
                </div>
            </div>
        </>
    );
}