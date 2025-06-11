import { NavigateFunction, useNavigate } from "react-router-dom";
import { Card } from "../components/Card"
import SessaoInterface from "../interfaces/Sessoes.interface";
import SessaoService from "../services/sessaoService";
import { useEffect } from "react";
import { useState } from "react";

export const Home = () => {
  const sessaoService: SessaoService = new SessaoService();
  const [sessoes, setSessoes] = useState<SessaoInterface[]>([]);
  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    sessaoService.getSessoesFromApi().then(value => {
      setSessoes(value)
    })
  }, []);
  

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