import TableInterface from "../interfaces/Table.interface";

export default class Table<T> implements TableInterface<T> {
    headers: string[];
    content: T[];

    constructor(headers: string[], conteudo: T[]) {
        this.headers = headers;
        this.content = conteudo;
    }

    setHeaders(headers: string[]): void {
        this.headers = headers;
    }
    setConteudo(conteudo: T[]): void {
        this.content = conteudo;
    }

    getHeaders(): string[] {
        return this.headers;
    }
    getConteudo(): T[] {
        return this.content;
    }
}