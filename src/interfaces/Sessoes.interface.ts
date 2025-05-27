import { FilmeInterface } from "./Filme.interface";
import SalaInterface from "./Sala.interface";

export default interface SessaoInterface{
    id: number,
    filme: FilmeInterface,
    sala: SalaInterface,
    dataHora: Date,
    preco: number,
    idioma: string,
    formato: string,
    
    getId(): number;
    getFilme(): FilmeInterface;
    setFilme(filme: FilmeInterface): void;
    getSala(): SalaInterface;
    setSala(sala: SalaInterface): void;
    getDataHora(): Date;
    setDataHora(dataHora: Date): void;
    getPreco(): number;
    setPreco(preco: number): void;
    getIdioma(): string;
    setIdioma(idioma: string): void;
    getFormato(): string;
    setFormato(formato: string): void;
}