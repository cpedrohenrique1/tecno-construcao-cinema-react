import Filme from "../classes/Filme";
import Sala from "../classes/Sala";
import Sessao from "../classes/Sessao";
import SessaoInterface from "../interfaces/Sessoes.interface";
import { api } from "./apiService";

export default class SessaoService {
    async getSessoesFromApi() {
        const obj = await api.get('sessoes');
        const sessaoArray: SessaoInterface[] = obj.data;
        return sessaoArray.map(s => new Sessao(new Filme( s.filme.titulo, s.filme.descricao, s.filme.classificacao, s.filme.genero, s.filme.duracao, s.filme.dataEstreia), new Sala(s.sala.nome, s.sala.capacidade, s.sala.tipo), new Date(s.dataHora),
            s.preco, s.idioma, s.formato));
    }

    async addSessao(sessao: SessaoInterface): Promise<void> {
        await api.post('sessoes', sessao);
    }
}