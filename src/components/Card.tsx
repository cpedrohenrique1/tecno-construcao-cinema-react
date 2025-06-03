import { FilmeInterface } from "../interfaces/Filme.interface";
import SessaoInterface from "../interfaces/Sessoes.interface";
import Button from "./Button";

export function Card({sessao, nomeBotao = "Comprar ingressos", acaoBotao}: {sessao: SessaoInterface, nomeBotao: string, acaoBotao: () => void}) {
    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4" style={{ marginBottom: "20px" }}>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Nome do filme: {sessao.getFilme().getTitulo()}</h5>
                        <p className="cart-text">Nome sala: {sessao.getSala().getNome()}</p>
                        <p className="card-text"><strong>Tipo sala: </strong>{sessao.getFormato()}</p>
                        <p className="card-text"><strong>Classificação: </strong>{sessao.getFilme().getClassificacao()}</p>
                        <p className="card-text"><strong>Duração: </strong>{sessao.getFilme().getDuracao()}</p>
                        <p className="card-text"><strong>Data de Estreia: </strong>{sessao.getDataHora().toLocaleDateString()}</p>
                        <Button id={sessao.getId().toString()} nome={nomeBotao} classes={"btn-primary"} action={acaoBotao} />
                    </div>
                </div>
            </div>
        </>
    )
}