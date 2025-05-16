import { Card } from "../components/Card"
import { Filme } from "../interfaces/Filme.interface"

export const Home = () => {
  const filme: Filme = {
    titulo: "a era do gelo",
    classificacao: 13,
    descricao: "Um esquilo vai comer uma noz e quebra o gelo",
    duracao: 130,
    genero: "Adulto",
    dataEstreia: new Date(),
    id: 1
  };
  const nomeBotao: string = "Comprar ingressos";
  return (
    <>
      <div className="container ">
          <div className="row">
            <Card filme={filme} nomeBotao={nomeBotao}/>
            <Card filme={filme} nomeBotao={nomeBotao}/>
          </div>
      </div>
    </>
  )
}