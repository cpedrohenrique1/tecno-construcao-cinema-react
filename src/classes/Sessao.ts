import { FilmeInterface } from "../interfaces/Filme.interface";
import SalaInterface from "../interfaces/Sala.interface";
import SessaoInterface from "../interfaces/Sessoes.interface";
import Filme from "./Filme";
import Sala from "./Sala";

export default class Sessao implements SessaoInterface {
    id: number;
    filme: FilmeInterface;
    sala: SalaInterface;
    dataHora: Date;
    preco: number;
    idioma: string;
    formato: string;

    constructor(
        id: number = Date.now(),
        filme: FilmeInterface = new Filme(),
        sala: SalaInterface = new Sala(),
        dataHora: Date = new Date(),
        preco: number = 0,
        idioma: string = "",
        formato: string = ""
    ) {
        this.id = id;
        this.filme = filme;
        this.sala = sala;
        this.dataHora = dataHora;
        this.preco = preco;
        this.idioma = idioma;
        this.formato = formato;
    }

    getId(): number {
        return this.id;
    }
    getFilme(): FilmeInterface {
        return this.filme;
    }
    setFilme(filme: FilmeInterface): void {
        this.filme = filme;
    }
    getSala(): SalaInterface {
        return this.sala;
    }
    setSala(sala: SalaInterface): void {
        this.sala = sala;
    }
    getDataHora(): Date {
        return this.dataHora;
    }
    setDataHora(dataHora: Date): void {
        this.dataHora = dataHora;
    }
    getPreco(): number {
        return this.preco;
    }
    setPreco(preco: number): void {
        this.preco = preco;
    }
    getIdioma(): string {
        return this.idioma;
    }
    setIdioma(idioma: string): void {
        this.idioma = idioma;
    }
    getFormato(): string {
        return this.formato;
    }
    setFormato(formato: string): void {
        this.formato = formato;
    }

}