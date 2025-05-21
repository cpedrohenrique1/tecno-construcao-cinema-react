export default function Button({ id, nome = "nome", classes = "btn-primary" }: { id: string, nome: string, classes: string }) {
    return (
        <>
            <button type="button" className={"btn " + classes} id={id}>{nome}</button>
        </>
    );
}