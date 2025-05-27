import Filme from "../classes/Filme"
import { FilmeInterface } from "../interfaces/Filme.interface";

export default class FilmeService {

    getFilmesFromLocalStorage(): FilmeInterface[] {
        const filmesJson = localStorage.getItem('filmes');
        if (filmesJson) {
            const filmesArray: Filme[] = JSON.parse(filmesJson);
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