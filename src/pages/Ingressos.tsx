import { useEffect, useState } from "react";
import TableIngressos from "../components/TableIngressos";
import IngressoInterface from "../interfaces/Ingresso.interface";
import IngressoService from "../services/ingressoService";
import GetIngressoDto from "../interfaces/GetIngressoDto.interface";

export default function Ingressos() {
    const [ingressos, setIngressos] = useState<GetIngressoDto[]>([]);
    const headers = [
        "ID",
        "ID Sessão",
        "CPF Cliente",
        "Preço",
        "Nome Cliente",
        "Forma de Pagamento",
        "Data/Hora Compra",
        "Ações"
    ];
    const service = new IngressoService();

    useEffect(() => {
        const fetchIngressos = async () => {
            const data = await service.getAllIngressos();
            setIngressos(data || []);
        };
        fetchIngressos();
    }, []);

    const handleDelete = (item: GetIngressoDto) => {
        service.deleteIngresso(item.id);
        const updatedIngressos = ingressos.filter(ingresso => ingresso.id !== item.id);
        setIngressos(updatedIngressos);
    };

    return (
        <>
            <div className="col-12 table-responsive">
                <TableIngressos data={ingressos} headers={headers} onDelete={handleDelete} />
            </div>
        </>
    );
}