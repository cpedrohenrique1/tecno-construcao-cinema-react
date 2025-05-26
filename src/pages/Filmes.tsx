import { useState } from "react";
import Filme from "../classes/Filme";
import Button from "../components/Button";
import Input from "../components/Input";
import TableFilmes from "../components/TableFilmes";
import { FilmeInterface } from "../interfaces/Filme.interface";
import FilmeService from "../services/filmeService";

export function Filmes() {
    const [filmes, setFilmes] = useState<FilmeInterface[]>(new FilmeService().getFilmesFromLocalStorage());

    return (
        <>
            <div className="modal fade" id="ModalAdicionarFilmeToggle" aria-hidden="true" aria-labelledby="ModalAdicionarFilmeToggleLabel" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalAdicionarFilmeToggleLabel">Adicionar Filme</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <Input type={"text"} classes={"form-control"} placeholder={"Digite o título do filme"} id={"tituloFilme"} />
                                </div>
                                <div className="mb-3">
                                    <Input type={"text"} classes={"form-control"} placeholder={"a descrição do filme"} id={"descricaoFilme"} />
                                </div>
                                <div className="mb-3">
                                    <Input type={"text"} classes={"form-control"} placeholder={"Digite o gênero do filme"} id={"generoFilme"} />
                                </div>
                                <div className="mb-3">
                                    <Input type={"text"} classes={"form-control"} placeholder={"Digite a classificação do filme"} id={"classificacaoFilme"} />
                                </div>
                                <div className="mb-3">
                                    <Input type={"text"} classes={"form-control"} placeholder={"Digite a duração do filme (em minutos)"} id={"duracaoFilme"} />
                                </div>
                                <div className="mb-3">
                                    <Input type={"date"} classes={"form-control"} placeholder={""} id={"dataEstreiaFilme"} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" onClick={
                                () => {
                                    const titulo: string = (document.getElementById("tituloFilme") as HTMLInputElement).value;
                                    const descricao: string = (document.getElementById("descricaoFilme") as HTMLInputElement).value || "";
                                    const genero: string = (document.getElementById("generoFilme") as HTMLInputElement).value;
                                    const classificacao: string = (document.getElementById("classificacaoFilme") as HTMLInputElement).value;
                                    const duracao: number = parseInt((document.getElementById("duracaoFilme") as HTMLInputElement).value);
                                    const dataEstreia: Date = new Date((document.getElementById("dataEstreiaFilme") as HTMLInputElement).value);
                                    if (!titulo || !genero || !classificacao || !duracao || !dataEstreia) {
                                        alert("Por favor, preencha todos os campos.");
                                        return;
                                    }
                                    const filme: FilmeInterface = new Filme(
                                        Date.now(),
                                        titulo,
                                        descricao,
                                        classificacao,
                                        genero,
                                        duracao,
                                        dataEstreia
                                    );

                                    const novosFilmes = [...filmes, filme];
                                    new FilmeService().setFilmesToLocalStorage(novosFilmes);
                                    setFilmes(new FilmeService().getFilmesFromLocalStorage());
                                }
                            }>Adicionar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h3>Filmes</h3>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <button className="btn btn-success" data-bs-target="#ModalAdicionarFilmeToggle" data-bs-toggle="modal">Adicionar Filme</button>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="input-group mb-3">
                            <Input type={"text"} classes={"form-control"} placeholder={"Digite o título do filme"} id={"buscaNomeFilme"} />
                            <Button id={"btnBuscarFilme"} nome={"Buscar"} classes={"btn-primary"} action={() => { }} />
                        </div>
                    </div>
                </div>

                <div className="col-12 table-responsive">

                    <TableFilmes data={filmes} headers={["ID", "Titulo", "Genero", "Classificação", "Duração", "Data-Estréia", "Editar / Excluir"]} />
                </div>
            </div>
        </>
    );
}