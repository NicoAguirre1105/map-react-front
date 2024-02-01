import { useForm } from "../hooks/useForm";

export function PasswordForm({changeStep}){
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

    const  initialForm = {password:"", passwordRep:""}
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, changeStep)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p className="copy-text">Please enter your new password</p>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={form.password}/>
                <div className="error-container">
                    {errors.password && <p className="error-message">{errors.password}</p>}
                </div>
                <input type="password" name="passwordRep" placeholder="Repeat password" onChange={handleChange} onBlur={handleBlur} value={form.passwordRep}/>
                <div className="error-container">
                    {errors.passwordRep && <p className="error-message">{errors.passwordRep}</p>}
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </>
    )
}