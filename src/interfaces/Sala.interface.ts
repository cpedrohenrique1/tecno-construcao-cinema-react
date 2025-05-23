export default interface SalaInterface {
    id: number,
    nome: string,
    capacidade: number,
    tipo: string,
    setId(id: number): void,
    setNome(nome: string): void,
    setCapacidade(capacidade: number): void,
    setTipo(tipo: string): void,
    getId(): number,
    getNome(): string,
    getCapacidade(): number,
    getTipo(): string
}