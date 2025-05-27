import Sala from "../classes/Sala";
import SalaInterface from "../interfaces/Sala.interface";

export default class SalaService {

    getSalasFromLocalStorage(): SalaInterface[] {
        const objLocalStorage = localStorage.getItem('salas');
        if (objLocalStorage) {
            const salaArray: SalaInterface[] = JSON.parse(objLocalStorage);
            return salaArray.map(s => new Sala(s.id, s.nome, s.capacidade, s.tipo));
        }
        return [];
    }

    setSalasToLocalStorage(salas: SalaInterface[]): void {
        let tamanhoArray: number = salas.length;
        for (let i = 0; i < tamanhoArray; i++) {
            for (let j = 1; j < tamanhoArray; j++) {
                if (i === j) continue;
                if (salas[i].getNome() === salas[j].getNome()) {
                    salas.splice(j, 1);
                    j--;
                    tamanhoArray--;
                }
            }
        }
        localStorage.setItem('salas', JSON.stringify(salas));
    }
}