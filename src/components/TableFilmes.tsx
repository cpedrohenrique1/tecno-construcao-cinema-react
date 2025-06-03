import { FilmeInterface } from "../interfaces/Filme.interface";
import Button from "./Button";

export default function TableFilmes({ data, headers, onDelete }: { data: FilmeInterface[], headers: string[], onDelete: (item: FilmeInterface) => void }) {
    const tabelaHeaders = headers.map((item) => <th key={item}>{item}</th>);
    return (
        <>
            <div className="col-12 table-responsive">
                <table className="table table-striped align-middle">
                    <thead>
                        <tr>{tabelaHeaders}</tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.getId()}</td>
                                <td>{item.getTitulo()}</td>
                                <td>{item.getGenero()}</td>
                                <td>{item.getClassificacao()}</td>
                                <td>{item.getDuracao()}</td>
                                <td>{item.getDataEstreia().toLocaleDateString()}</td>
                                <td>
                                    <Button id={String(item.getId())} nome={"Exluir"} classes={"btn-danger"} action={() => onDelete(item)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}