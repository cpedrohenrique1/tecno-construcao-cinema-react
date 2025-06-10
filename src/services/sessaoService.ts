import axios from "axios";
import Filme from "../classes/Filme";
import Sala from "../classes/Sala";
import Sessao from "../classes/Sessao";
import SessaoInterface from "../interfaces/Sessoes.interface";
import { api } from "./apiService";

export default class SessaoService {
    async getSessoesFromApi() {
        const obj = await api.get('sessoes');
        const sessaoArray: SessaoInterface[] = obj.data;
        return sessaoArray.map(s => new Sessao(s.id, new Filme(s.filme.id, s.filme.titulo, s.filme.descricao, s.filme.classificacao, s.filme.genero, s.filme.duracao, s.filme.dataEstreia), new Sala(s.sala.id, s.sala.nome, s.sala.capacidade, s.sala.tipo), new Date(s.dataHora),
            s.preco, s.idioma, s.formato));
    }

    setSessoesToLocalStorage(sessoes: SessaoInterface[]): void {
        localStorage.setItem('sessoes', JSON.stringify(sessoes));
    }
}