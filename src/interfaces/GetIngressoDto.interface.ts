import IngressoInterface from "./Ingresso.interface";
import SessaoInterface from "./Sessoes.interface";

export default interface GetIngressoDto extends IngressoInterface {
    id: number;
    sessao: SessaoInterface;
}