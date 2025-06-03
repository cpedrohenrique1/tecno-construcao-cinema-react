import SessaoInterface from "../interfaces/Sessoes.interface";
import Button from "./Button";

export default function TableSessoes({ data, headers, onDelete }: { data: SessaoInterface[], headers: string[], onDelete: (item: SessaoInterface) => void }) {
    const tabelaHeaders = [];
    for (const item of headers) {
        tabelaHeaders.push(
            <th>{item}</th>
        )
    }

    const tabelaSessoes = [];
    for (const item of data) {
        tabelaSessoes.push(
            <tr key={item.id}>
                <td>{item.getId()}</td>
                <td>{item.getFilme().getTitulo()}</td>
                <td>{item.getSala().getNome()}</td>
                <td>{item.dataHora.toLocaleString()}</td>
                <td>{item.getFormato()}</td>
                <td>{item.getIdioma()}</td>
                <td>{item.getPreco()}</td>
                <td><Button id={String(item.id)} nome={"Excluir"} classes={"btn-danger"} action={() => {
                    onDelete(item);
                } } /></td>
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
                            tabelaSessoes
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}