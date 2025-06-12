import IngressoInterface from "../interfaces/Ingresso.interface";

export default class CreateIngressoDto implements IngressoInterface{
    preco: number;
    nomeCliente: string;
    cpfCliente: string;
    formaPagamento: string;
    dataHoraCompra: Date;
    sessaoId: number;

    constructor() {
        this.preco = 0;
        this.nomeCliente = '';
        this.cpfCliente = '';
        this.formaPagamento = '';
        this.dataHoraCompra = new Date();
        this.sessaoId = 0;
    }
}