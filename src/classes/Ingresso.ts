import IngressoInterface from "../interfaces/Ingresso.interface";

export default class Ingresso implements IngressoInterface {
    sessaoId: number;
    id: number;
    preco: number;
    nomeCliente: string;
    cpfCliente: string;
    formaPagamento: string;
    dataHoraCompra: Date;
    
    constructor() {
        this.id = 0;
        this.preco = 0;
        this.nomeCliente = '';
        this.cpfCliente = '';
        this.formaPagamento = '';
        this.dataHoraCompra = new Date();
        this.sessaoId = 0;
    }
}