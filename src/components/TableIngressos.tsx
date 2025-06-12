import GetIngressoDto from "../interfaces/GetIngressoDto.interface";
import Button from "./Button";

export default function TableIngressos({ data, headers, onDelete }: { data: GetIngressoDto[], headers: string[], onDelete: (item: GetIngressoDto) => void }) {
    const tabelaHeaders = headers.map((item) => <th key={item}>{item}</th>);
    return (
        <>
            <div className="container col-12 table-responsive">
                <table className="table table-striped align-middle">
                    <thead>
                        <tr>{tabelaHeaders}</tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => (
                            <tr key={idx}>
                                <td>{item.id}</td>
                                <td>{item.sessao.id}</td>
                                <td>{item.cpfCliente}</td>
                                <td>{item.preco}</td>
                                <td>{item.nomeCliente}</td>
                                <td>{item.formaPagamento}</td>
                                <td>{new Date(item.dataHoraCompra).toLocaleString()}</td>
                                <td>
                                    <Button id={String(item.sessaoId)} nome={"Excluir"} classes={"btn-danger"} action={() => onDelete(item)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
