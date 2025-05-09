export function Button({ id, nome }: { id: string, nome: string }) {
    return (
        <>
            <button type="button" className="btn btn-primary" id={id}>{nome}</button>
        </>
    );
}