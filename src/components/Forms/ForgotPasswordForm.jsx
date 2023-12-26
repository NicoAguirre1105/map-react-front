import { useForm } from "../hooks/useForm";

export function ForgotPasswordForm({setModalMode}){
    const validateForm = (form) => {
        let errors = {}

        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/

        if(!form.email.trim()){
            errors.email = "This field must be filled"
        } else if (!regexEmail.test(form.email.trim())) {
            errors.email = "Email is not valid"
        }
        // Sumar la verificacion de que el correo consta en la base de datos

        return errors
    }

    const forgotSubmit = () => {
        setModalMode("VerificationPassword")
    }

    const  initialForm = {email:""}
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, forgotSubmit)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p className="copy-text">Please enter email address. We will send you a temporarly code to you email.</p>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={form.email}/>
                {errors.email && <p className="error-message">{errors.email}</p>}
                <input type="submit" value="Send Code"/>
            </form>
        </>
    )
}