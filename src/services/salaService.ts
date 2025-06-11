import Sala from "../classes/Sala";
import SalaInterface from "../interfaces/Sala.interface";
import { api } from "./apiService";

export default class SalaService {

    async getSalasFromApi(): Promise<SalaInterface[]> {
        const obj = await api.get('salas');
        const salaArray: SalaInterface[] = obj.data;
        if (salaArray) {
            return salaArray.map(s => {
                const sala = new Sala();
                sala.setId(s.id);
                sala.setNome(s.nome);
                sala.setCapacidade(s.capacidade);
                sala.setTipo(s.tipo);
                return sala;
            });
        }
        return [];
    }

    async addSala(sala: SalaInterface): Promise<void> {
        await api.post('salas', sala)
    }

    async deleteSala(id: number): Promise<void> {
        await api.delete(`salas/${id}`);
    }
}