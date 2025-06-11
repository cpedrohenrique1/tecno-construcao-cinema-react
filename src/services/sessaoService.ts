import Filme from "../classes/Filme";
import Sala from "../classes/Sala";
import Sessao from "../classes/Sessao";
import { FilmeInterface } from "../interfaces/Filme.interface";
import SalaInterface from "../interfaces/Sala.interface";
import SessaoInterface from "../interfaces/Sessoes.interface";
import { api } from "./apiService";

export default class SessaoService {
    async getSessoesFromApi() {
        const obj = await api.get('sessoes');
        const sessaoArray: SessaoInterface[] = obj.data;
        if (!sessaoArray || !obj) {
            return [];
        }
        return sessaoArray.map(s =>{
            const filme : FilmeInterface = new Filme(s.filme.titulo, s.filme.descricao, s.filme.classificacao, s.filme.genero, s.filme.duracao, s.filme.dataEstreia);
            const sala: SalaInterface = new Sala(s.sala.nome, s.sala.capacidade, s.sala.tipo);
            return new Sessao(s.id, filme, sala, new Date(s.dataHora), s.preco, s.idioma, s.formato);
        });
    }

    async addSessao(sessao: SessaoInterface): Promise<void> {
        await api.post('sessoes', sessao);
    }
}