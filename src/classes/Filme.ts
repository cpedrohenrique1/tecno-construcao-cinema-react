import { FilmeInterface } from "../interfaces/Filme.interface";

export default class Filme implements FilmeInterface {
    id!: number;
    titulo: string;
    descricao: string;
    classificacao: string;
    genero: string;
    duracao: number;
    dataEstreia: Date;

    constructor(
        titulo: string = "",
        descricao: string = "",
        classificacao: string = "",
        genero: string = "",
        duracao: number = 0,
        dataEstreia: Date = new Date()
    ) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.classificacao = classificacao;
        this.genero = genero;
        this.duracao = duracao;
        this.dataEstreia = dataEstreia;
    }

    setId(id: number): void {
        this.id = id;
    }

    getId(): number {
        return this.id;
    }
    
    setTitulo(titulo: string): void {
        this.titulo = titulo;
    }
    setDescricao(descricao: string): void {
        this.descricao = descricao;
    }
    setClassificacao(classificacao: string): void {
        this.classificacao = classificacao;
    }
    setGenero(genero: string): void {
        this.genero = genero;
    }
    setDuracao(duracao: number): void {
        this.duracao = duracao;
    }
    setDataEstreia(dataEstreia: Date): void {
        this.dataEstreia = dataEstreia;
    }
    getTitulo(): string {
        return this.titulo;
    }
    getDescricao(): string {
        return this.descricao;
    }
    getClassificacao(): string {
        return this.classificacao;
    }
    getGenero(): string {
        return this.genero;
    }
    getDuracao(): number {
        return this.duracao;
    }
    getDataEstreia(): Date {
        return this.dataEstreia;
    }
}