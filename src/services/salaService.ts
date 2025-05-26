import Sala from "../classes/Sala";
import SalaInterface from "../interfaces/Sala.interface";

export default class SalaService {

    getSalasFromLocalStorage(): SalaInterface[] {
        const objLocalStorage = localStorage.getItem('Salas');
        if (objLocalStorage) {
            const salaArray: SalaInterface[] = JSON.parse(objLocalStorage);
            return salaArray.map(s => new Sala(s.id, s.nome, s.capacidade, s.tipo));
        }
        return [];
    }

    setSalasToLocalStorage(salas: SalaInterface[]): void {
        localStorage.setItem('Salas', JSON.stringify(salas));
    }
}