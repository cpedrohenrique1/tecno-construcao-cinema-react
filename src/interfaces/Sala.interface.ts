export default interface SalaInterface {
    id: number,
    nome: string,
    capacidade: number,
    tipo: string,
    setNome(nome: string): void,
    setCapacidade(capacidade: number): void,
    setTipo(tipo: string): void,
    setId(id: number): void,
    getId(): number,
    getNome(): string,
    getCapacidade(): number,
    getTipo(): string
}