import { useForm } from "../hooks/useForm";

export function EditInfoForm({handleClick, label, handleDone}){

    const validateForm = (form) => {
        let errors = {}

        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/

        if(!form.edited.trim()){
            errors.edited = "This field must be filled"
        } else if (label === "Email" && !regexEmail.test(form.edited.trim())) {
            errors.edited = "Email is not valid"
        }
        // Sumar la verificacion de que el correo consta en la base de datos
        
        return errors
    }

    const  initialForm = {edited:""}
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, handleClick)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="edited" placeholder={label} onChange={handleChange} onBlur={handleBlur} value={form.edited}/>
                {errors.edited && <p className="error-message">{errors.edited}</p>}
                <input type="submit" value="Save"/>
            </form>
        </>
    )
}