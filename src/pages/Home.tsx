import { NavigateFunction, useNavigate } from "react-router-dom";
import { Card } from "../components/Card"
import SessaoInterface from "../interfaces/Sessoes.interface";
import SessaoService from "../services/sessaoService";

export const Home = () => {
  const sessaoService: SessaoService = new SessaoService();
  const sessoes: SessaoInterface[] = sessaoService.getSessoesFromLocalStorage();
  const nomeBotao: string = "Comprar ingressos";
  const navigate: NavigateFunction = useNavigate();

  const cards = [];
  for (const sessao of sessoes) {
        cards.push(
            <Card sessao={sessao} nomeBotao={"Comprar ingressos"} acaoBotao={() => {
                navigate(`/sessoes?sessaoId=${sessao.getId()}`);
            }} />
        )
    }
  if (cards.length === 0) {
    cards.push(
      <h2>Não há sessões salvas</h2>
    )
  }
  return (
    <>
      <div className="container ">
        <br />
        <div className="row">
          {cards}
        </div>
      </div>
    </>
  )
}