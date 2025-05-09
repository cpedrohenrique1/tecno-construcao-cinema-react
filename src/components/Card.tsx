import { Filme } from "../interfaces/Filme.interface";
import { Button } from "./Button";

interface CardProps {
    filme: Filme
}

export function Card({filme}: CardProps) {
    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{filme.titulo}</h5>
                        <p className="cart-text">{filme.descricao}</p>
                        <p className="card-text"><strong>Gênero:</strong>{filme.genero}</p>
                        <p className="card-text"><strong>Classificação:</strong>{filme.classificacao}</p>
                        <p className="card-text"><strong>Duração:</strong>{filme.duracao}</p>
                        <p className="card-text"><strong>Data de Estreia:</strong>{filme.dataEstreia.toLocaleDateString()}</p>
                        <Button id={filme.id.toString()} nome="Comprar Ingressos" />
                    </div>
                </div>
            </div>
        </>
    )
}