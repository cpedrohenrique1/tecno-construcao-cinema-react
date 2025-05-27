import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import SalaInterface from "../interfaces/Sala.interface";
import SalaService from "../services/salaService";
import { FilmeInterface } from "../interfaces/Filme.interface";
import FilmeService from "../services/filmeService";

export default function CadastrarSessoes() {
    const salaService = new SalaService();
    const [arraySalas, setSalas] = useState<SalaInterface[]>(salaService.getSalasFromLocalStorage());

    const filmeService = new FilmeService();
    const [arrayFilmes, setFilmes] = useState<FilmeInterface[]>(filmeService.getFilmesFromLocalStorage());

    
    
    return (
        <>
            <div className="modal fade" id="ModalAdicionarSalaToggle" aria-hidden="true" aria-labelledby="ModalAdicionarSalaToggleLabel" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="ModalAdicionarSalaToggleLabel">Adicionar Sessao</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <select>
                                        <option>
                                            Selecione o filme
                                        </option>
                                    </select>
                                    <Input type={"text"} classes={"form-control"} placeholder={"Escreva o nome da sala"} id={"nomeSala"} />
                                </div>
                                <div className="mb-3">
                                    <Input type={"text"} classes={"form-control"} placeholder={"Tipo da sala"} id={"tipoSala"} />
                                </div>
                                <div className="mb-3">
                                    <Input type={"number"} classes={"form-control"} placeholder={"Capacidade"} id={"capacidadeSala"} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <Button id={""} nome={"Adicionar"} classes="btn-primary" action={
                                () => {
                                    const nomeSala: string = (document.getElementById("nomeSala") as HTMLInputElement).value;
                                    const tipoSala: string = (document.getElementById("tipoSala") as HTMLInputElement).value || "";
                                    const capacidadeSala: number = parseInt((document.getElementById("capacidadeSala") as HTMLInputElement).value);
                                    if (!nomeSala || !tipoSala || !capacidadeSala) {
                                        alert("Por favor, preencha todos os campos.");
                                        return;
                                    }
                                    const sala: SalaInterface = new Sala(
                                        Date.now(),
                                        nomeSala,
                                        capacidadeSala,
                                        tipoSala
                                    )

                                    const novasSalas: SalaInterface[] = [...arraySalas, sala];
                                    salaService.setSalasToLocalStorage(novasSalas);
                                    setSalas(salaService.getSalasFromLocalStorage());
                                }
                            }></Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <h1>Salas</h1>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <button className="btn btn-success" data-bs-target="#ModalAdicionarSalaToggle" data-bs-toggle="modal">Adicionar Sala</button>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="input-group mb-3">
                            <Input type={"text"} classes={"form-control"} placeholder={"Digite o título do filme"} id={"buscaNomeFilme"} />
                            <Button id={"btnBuscarFilme"} nome={"Buscar"} classes={"btn-primary"} action={(): void => { }} />
                        </div>
                    </div>
                </div>
                <div className="col-12 table-responsive">
                    <TableSalas data={arraySalas} headers={["ID", "Nome", "Tipo", "Capacidade", "Editar / Excluir"]} />
                </div>
            </div>
        </>
    )
}