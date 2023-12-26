import { useForm } from "../hooks/useForm";

export function NewPasswordForm({setModalMode}){
    const validateForm = (form) => {
        let errors = {}

        const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[ЁёА-яa-zA-Z0-9!@#$%^&*]{7,15}$/

        if(!form.password){
            errors.password = "This field must be filled"
        } else if(!regexPassword.test(form.password)){
            errors.password = "Password must have 7-15 characters and at least one number, one letter and one special characater"
        }
    
        if(!form.passwordRep){
            errors.passwordRep = "This field must be filled"
        } else if(form.password !== form.passwordRep) {
            errors.passwordRep = "Password must be equal"
        }
        
        return errors
    }

    const newPasswordSubmit = () => {
        setModalMode("DonePassword")
    }

    const  initialForm = {password:"", passwordRep:""}
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, newPasswordSubmit)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p className="copy-text">Please enter your new password</p>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={form.password}/>
                {errors.password && <p className="error-message">{errors.password}</p>}
                <input type="password" name="passwordRep" placeholder="Repeat password" onChange={handleChange} onBlur={handleBlur} value={form.passwordRep}/>
                {errors.passwordRep && <p className="error-message">{errors.passwordRep}</p>}
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}