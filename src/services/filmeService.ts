import Filme from "../classes/Filme"
import { FilmeInterface } from "../interfaces/Filme.interface";
import { api } from "./apiService";

export default class FilmeService {

    async getFilmesFromApi() {
        const obj = await api.get('filmes');
        if (obj) {
            const filmesArray: Filme[] = obj.data;
            return filmesArray.map(f => {
                const temp = new Filme(f.titulo, f.descricao, f.classificacao, f.genero, f.duracao, new Date(f.dataEstreia));
                temp.setId(f.id);
                return temp;
            }
        );
        }
        return [];
    }

    async getFilmeById(id: number): Promise<FilmeInterface> {
        const obj = await api.get(`/filmes/${id}`);
        if (obj) {
            const filmeData: FilmeInterface = obj.data;
            const filme = new Filme(
                filmeData.titulo,
                filmeData.descricao,
                filmeData.classificacao,
                filmeData.genero,
                filmeData.duracao,
                new Date(filmeData.dataEstreia)
            );
            filme.setId(filmeData.id);
            return filme;
        }
        return new Filme("", "", "", "", 0, new Date());
    }

    async setFilmeToApi(filmes: FilmeInterface): Promise<void> {
        await api.post('filmes', filmes);
    }

    async deleteFilme(id: number): Promise<void> {
        await api.delete(`/filmes/${id}`);
    }
}