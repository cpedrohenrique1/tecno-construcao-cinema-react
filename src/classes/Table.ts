import TableInterface from "../interfaces/Table.interface";

export default class Table <T> implements TableInterface <T> {
    tituloTable: string[];
    conteudoTable: T[];
    
    constructor(){
        this.conteudoTable = [],
        this.tituloTable = [];
    }
    
}