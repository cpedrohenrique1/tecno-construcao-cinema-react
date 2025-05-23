import Filme from "../classes/Filme";
import { Card } from "../components/Card"
import { FilmeInterface } from "../interfaces/Filme.interface"

export const Home = () => {
  const filme: FilmeInterface = new Filme(
    1,
    "a era do gelo",
    "Um esquilo vai comer uma noz e quebra o gelo",
    "13",
    "Adulto",
    130,
    new Date()
  );
  const nomeBotao: string = "Comprar ingressos";
  return (
    <>
      <div className="container ">
        <br />
        <div className="row">
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
          <Card filme={filme} nomeBotao={nomeBotao} />
        </div>
      </div>
    </>
  )
}