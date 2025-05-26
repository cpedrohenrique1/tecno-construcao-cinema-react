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
        localStorage.setItem('filmes', JSON.stringify(filmes));
    }
}