export default class CreateSessaoDto {
    filmeId: number;
    salaId: number;
    dataHora: Date;
    preco: number;
    idioma: string;
    formato: string;

    constructor(filmeId: number, salaId: number, dataHora: Date, preco: number, idioma: string, formato: string) {
        this.filmeId = filmeId;
        this.salaId = salaId;
        this.dataHora = dataHora;
        this.preco = preco;
        this.idioma = idioma;
        this.formato = formato;
    }
}