import InputProps from "../interfaces/InputProps.interface";

export default function Input(input: InputProps) {
    return (
        <>
            <input type={input.type} className={input.classes} placeholder={input.placeholder} id={input.id} />
        </>
    )
}