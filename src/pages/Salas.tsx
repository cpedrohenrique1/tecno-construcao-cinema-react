import Sala from "../classes/Sala";
import Button from "../components/Button";
import Input from "../components/Input";
import TableSalas from "../components/TableSalas";
import SalaInterface from "../interfaces/Sala.interface";

export default function Salas() {
    const arraySalas: SalaInterface[] = [];
    arraySalas.push(new Sala(1, "Sala 1", 30, "3D"));
    return (
        <>
            <h1>Salas</h1>
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4">
                    <Button id={"btnNovo"} nome={"Adicionar Sala"} classes="btn-success" action={(): void=>{}} />
                </div>
            </div>

            <br />

            <div className="row">
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className="input-group mb-3">
                        <Input type={"text"} classes={"form-control"} placeholder={"Digite o título do filme"} id={"buscaNomeFilme"} />
                        <Button id={"btnBuscarFilme"} nome={"Buscar"} classes={"btn-primary"} action={(): void => {}} />
                    </div>
                </div>
            </div>

            <div className="col-12 table-responsive">

                <TableSalas data={arraySalas} headers={["ID", "Nome", "Tipo", "Capacidade", "Editar / Excluir"]} />
            </div>
        </>
    )
}