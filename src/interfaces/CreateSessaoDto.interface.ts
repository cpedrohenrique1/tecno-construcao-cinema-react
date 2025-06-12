export default interface CreateSessaoDto {
    filmeId: number;
    salaId: number;
    dataHora: Date;
    preco: number;
    idioma: string;
    formato: string;
}