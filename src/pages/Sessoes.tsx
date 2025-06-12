import { useSearchParams } from "react-router-dom";
import { Home } from "./Home";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import IngressoService from "../services/ingressoService";
import IngressoInterface from "../interfaces/Ingresso.interface";
import CreateIngressoDto from "../classes/CreateIngressoDto";
import SessaoInterface from "../interfaces/Sessoes.interface";
import SessaoService from "../services/sessaoService";

export default function Sessoes() {
    const [searchParams] = useSearchParams();
    const sessaoId = searchParams.get('sessaoId');
    const ingressoService = new IngressoService();
    const sessaoService = new SessaoService();

    const [sessao, setSessao] = useState<SessaoInterface | null>(null);
    const [ingresso, setIngresso] = useState<IngressoInterface>(new CreateIngressoDto());

    useEffect(() => {
        if (!sessaoId) return;
        sessaoService.getSessaoById(parseInt(sessaoId)).then(response => {
            if (response) {
                setSessao(response);
                ingresso.sessaoId = response.id;
                ingresso.preco = response.preco;
                setIngresso(ingresso);
            }
        });
    }, [sessaoId]);

    if (!sessaoId) {
        return <Home />;
    }

    if (!sessao) {
        return <Home />;
    }

    return (
        <div className="container">
            <h2>Comprar ingresso</h2>
            <hr />
            <input
                type="text"
                className="form-control mb-2"
                placeholder="ID da sessão"
                id="sessaoId"
                value={sessaoId}
                readOnly
            />
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Nome do cliente"
                onChange={(event) => {
                    ingresso.nomeCliente = event.target.value;
                    setIngresso(ingresso);
                }}
            />
            <input type="text"
                className="form-control mb-2"
                placeholder="CPF"
                id="CPF"
                onChange={(e) => {
                    ingresso.cpfCliente = e.target.value;
                    setIngresso(ingresso);
                }} />
            <select className="form-control mb-2" onChange={(e) => {
                ingresso.formaPagamento = e.target.value;
                setIngresso(ingresso);
            }}>
                <option value="" disabled selected hidden>Selecione uma forma de pagamento</option>
                <option value={"Cartao"}>Cartão</option>
                <option value={"Pix"}>Pix</option>
                <option value={"Dinheiro"}>Dinheiro</option>
            </select>
            <Button
                id={"submit"}
                nome={"Comprar ingresso"}
                classes={"btn-primary"}
                action={() => ingressoService.addIngresso(ingresso)}
            />
        </div>
    );
}