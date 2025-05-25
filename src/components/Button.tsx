export default function Button({ id, nome = "nome", classes = "btn-primary", action}: { id: string, nome: string, classes: string , action: () => void}) {
    return (
        <>
            <button type="button" className={"btn " + classes} id={id} onClick={action}>{nome}</button>
        </>
    );
}