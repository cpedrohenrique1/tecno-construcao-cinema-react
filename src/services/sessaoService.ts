import CreateSessaoDto from "../classes/CreateSessaoDto";
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

    async getSessaoById(id: number) {
        const obj = await api.get(`sessoes/${id}`);
        if (!obj || !obj.data) {
            return null;
        }
        const sessao: SessaoInterface = obj.data;
        if (!sessao) {
            return null;
        }
        const filme: FilmeInterface = new Filme(sessao.filme.titulo, sessao.filme.descricao, sessao.filme.classificacao, sessao.filme.genero, sessao.filme.duracao, sessao.filme.dataEstreia);
        const sala: SalaInterface = new Sala(sessao.sala.nome, sessao.sala.capacidade, sessao.sala.tipo);
        return new Sessao(sessao.id, filme, sala, new Date(sessao.dataHora), sessao.preco, sessao.idioma, sessao.formato);
    }

    async addSessao(sessao: SessaoInterface): Promise<void> {
        await api.post('sessoes', new CreateSessaoDto(sessao.getFilme().getId(), sessao.getSala().getId(), sessao.getDataHora(), sessao.getPreco(), sessao.getIdioma(), sessao.getFormato()));
    }

    async deleteSessao(id: number) {
        return await api.delete(`/sessoes/${id}`);
    }
}