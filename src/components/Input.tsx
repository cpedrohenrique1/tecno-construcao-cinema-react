export default function Input({type = "text", classes = "form-control", placeholder, id}: {type: string, classes: string, placeholder: string, id: string}) {
    return (
        <>
            <input type={type} className={classes} placeholder={placeholder} id={id} />
        </>
    )
}