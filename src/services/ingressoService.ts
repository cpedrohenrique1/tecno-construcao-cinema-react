import IngressoInterface from "../interfaces/Ingresso.interface";
import { api } from "./apiService";

export default class IngressoService {
    async addIngresso(ingresso: IngressoInterface){
        await api.post<IngressoInterface>('/ingressos', ingresso);
    }

    async getAllIngressos() {
        const response = await api.get<IngressoInterface[]>('/ingressos');
        return response.data;
    }

    async getIngressoById(id: number) {
        const response = await api.get<IngressoInterface>(`/ingressos/${id}`);
        if (!response) {
            return null;
        }
        return response.data;
    }
}