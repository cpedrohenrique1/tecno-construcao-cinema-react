import SalaInterface from "../interfaces/Sala.interface";

export default class Sala implements SalaInterface {
    id: number;
    nome: string;
    capacidade: number;
    tipo: string;
    constructor(
        id: number,
        nome: string,
        capacidade: number,
        tipo: string
    ) {
        this.id = id;
        this.nome = nome;
        this.capacidade = capacidade;
        this.tipo = tipo;
    }
    setId(id: number): void {
        this.id = id;
    }
    setNome(nome: string): void {
        this.nome = nome;
    }
    setCapacidade(capacidade: number): void {
        this.capacidade = capacidade;
    }
    setTipo(tipo: string): void {
        this.tipo = tipo;
    }
    getId(): number {
        return this.id;
    }
    getNome(): string {
        return this.nome;
    }
    getCapacidade(): number {
        return this.capacidade;
    }
    getTipo(): string {
        return this.tipo;
    }
    
}