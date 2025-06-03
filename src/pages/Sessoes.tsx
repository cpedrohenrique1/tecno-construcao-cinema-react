import { useSearchParams } from "react-router-dom";
import { Home } from "./Home";
import { JSX } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Sessoes() {
    const [searchParams] = useSearchParams();
    const sessaoId = searchParams.get('sessaoId');
    let tela: JSX.Element = <Home />;
    if (sessaoId) {
        tela = <div className="container">
            <h2>Comprar ingresso</h2>
            <hr/>
            <input type="" className="form-control mb-2" placeholder="ID da sessão" id="sessaoId" value={sessaoId}/>
            <Input type="text" classes="form-control mb-2" placeholder="Nome do cliente" id="nomeCliente" />
            <Input type="text" classes="form-control mb-2" placeholder="CPF" id="CPF" />
            <select className="form-control mb-2">
                <option value="" disabled selected hidden>Selecione uma sessão</option>
                <option value={"Cartao"}>Cartão</option>
                <option value={"Pix"}>Pix</option>
                <option value={"Dinheiro"}>Dinheiro</option>
            </select>
            <Button id={"submit"} nome={"Comprar ingresso"} classes={"btn-primary"} action={function (): void {
                console.log("Ingresso comprado com sucesso!");
            } }/>
        </div>
    }

    return (
        <>
            {tela}
        </>
    )
}