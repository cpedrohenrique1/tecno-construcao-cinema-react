import { NavigateFunction, useNavigate } from "react-router-dom";
import { Card } from "../components/Card"
import { FilmeInterface } from "../interfaces/Filme.interface"
import FilmeService from "../services/filmeService";

export const Home = () => {
  const filmeService = new FilmeService();
  const filmes: FilmeInterface[] = filmeService.getFilmesFromLocalStorage();
  const nomeBotao: string = "Comprar ingressos";
  const navigate: NavigateFunction = useNavigate();

  const cards = [];
  for (const filme of filmes) {
    cards.push(
      <Card filme={filme} nomeBotao={nomeBotao} acaoBotao={() => {
            navigate(`/ingressos/${filme.getId()}`);
          }} />
    )
  }
  if (cards.length === 0) {
    cards.push(
      <h2>Não há filmes salvos</h2>
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