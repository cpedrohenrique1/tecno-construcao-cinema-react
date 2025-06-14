import SalaInterface from "../interfaces/Sala.interface";

export default class Sala implements SalaInterface {
    id!: number;
    nome: string;
    capacidade: number;
    tipo: string;
    constructor(
        nome: string = "",
        capacidade: number = 0,
        tipo: string = ""
    ) {
        this.nome = nome;
        this.capacidade = capacidade;
        this.tipo = tipo;
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
    setId(id: number): void {
        this.id = id;
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