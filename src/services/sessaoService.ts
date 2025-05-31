import Filme from "../classes/Filme";
import Sala from "../classes/Sala";
import Sessao from "../classes/Sessao";
import SessaoInterface from "../interfaces/Sessoes.interface";

export default class SessaoService {
    getSessoesFromLocalStorage(): SessaoInterface[] {
        const objLocalStorage = localStorage.getItem('sessoes');
        if (objLocalStorage) {
            const sessaoArray: SessaoInterface[] = JSON.parse(objLocalStorage);
            return sessaoArray.map(s => new Sessao(s.id, new Filme(s.filme.id, s.filme.titulo, s.filme.descricao, s.filme.classificacao, s.filme.genero, s.filme.duracao, s.filme.dataEstreia), new Sala(s.sala.id, s.sala.nome, s.sala.capacidade, s.sala.tipo), new Date(s.dataHora), 
            s.preco, s.idioma, s.formato));
        }
        return [];
    }

    setSessoesToLocalStorage(sessoes: SessaoInterface[]): void {
        localStorage.setItem('sessoes', JSON.stringify(sessoes));
    }
}