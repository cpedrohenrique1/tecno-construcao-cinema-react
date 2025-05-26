import SalaInterface from "../interfaces/Sala.interface";
import Button from "./Button";

export default function TableSalas({ data, headers }: { data: SalaInterface[], headers: string[] }) {
    const tabelaHeaders = [];
    for (const item of headers) {
        tabelaHeaders.push(
            <th>{item}</th>
        )
    }

    const tabelaFilmes = [];
    for (const item of data) {
        tabelaFilmes.push(
            <tr key={item.id}>
                <td>{item.getId()}</td>
                <td>{item.getNome()}</td>
                <td>{item.getTipo()}</td>
                <td>{item.getCapacidade()}</td>
                <td><Button id={String(item.id)} nome={"Editar"} classes={"btn-primary"} action={function (): void { }} /></td>
            </tr>
        )
    }
    return (
        <>
            <div className="col-12 table-responsive">
                <table className="table table-striped align-middle">
                    <thead>
                        <tr>{tabelaHeaders}</tr>
                    </thead>
                    <tbody>
                        {
                            tabelaFilmes
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}