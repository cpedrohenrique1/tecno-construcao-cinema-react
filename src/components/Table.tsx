import { FilmeInterface } from "../interfaces/Filme.interface";
import Button from "./Button";

export default function Table({movieData, headers} : {movieData: FilmeInterface[], headers: string[]}) {
    const tabelaFilmes = [];
    for (const item of movieData){
        tabelaFilmes.push(
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.titulo}</td>
                <td>{item.genero}</td>
                <td>{item.classificacao}</td>
                <td>{item.duracao}</td>
                <td>{item.dataEstreia.toLocaleDateString()}</td>
                <td><Button id={String(item.id)} nome={"Editar"} classes={"btn-primary"}/></td>
            </tr>
        )
    }
    const tabelaHeaders = [];
    for (const item of headers) {
        tabelaHeaders.push(
            <th>{item}</th>
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