import Sessao from "../classes/Sessao";
import SessaoInterface from "../interfaces/Sessoes.interface";

export default class SessaoService {
    getSessoesFromLocalStorage(): SessaoInterface[] {
        const objLocalStorage = localStorage.getItem('sessoes');
        if (objLocalStorage) {
            const sessaoArray: SessaoInterface[] = JSON.parse(objLocalStorage);
            return sessaoArray.map(s => new Sessao(s.id, s.filme, s.sala, new Date(s.dataHora), 
            s.preco, s.idioma, s.formato));
        }
        return [];
    }

    setSessoesToLocalStorage(sessoes: SessaoInterface[]): void {
        localStorage.setItem('sessoes', JSON.stringify(sessoes));
    }
}