import Filme from "../classes/Filme"
import { FilmeInterface } from "../interfaces/Filme.interface";
import { api } from "./apiService";

export default class FilmeService {

    async getFilmesFromApi() {
        const obj = await api.get('filmes');
        if (obj) {
            const filmesArray: Filme[] = obj.data;
            return filmesArray.map(f => new Filme(f.id, f.titulo, f.descricao, f.classificacao, f.genero, f.duracao, new Date(f.dataEstreia)));
        }
        return [];
    }

    setFilmesToLocalStorage(filmes: FilmeInterface[]): void {
        let tamanhoArray: number = filmes.length;
        for (let i = 0; i < tamanhoArray; i++) {
            for (let j = 1; j < tamanhoArray; j++) {
                if (i === j) continue;
                if (filmes[i].getTitulo() === filmes[j].getTitulo()) {
                    filmes.splice(j, 1);
                    j--;
                    tamanhoArray--;
                }
            }
        }
        localStorage.setItem('filmes', JSON.stringify(filmes));
    }
}