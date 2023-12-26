import { useForm } from "../hooks/useForm";

const validateForm = (form) => {
    let errors = {}
    
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    const regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[ЁёА-яa-zA-Z0-9!@#$%^&*]{7,15}$/
    
    if(!form.email.trim()){
        errors.email = "This field must be filled"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "Email is not valid"
    }
    // Sumarle verificacion del backend para que el correo no este usado
    
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

export function RegisterForm({registerSubmit}) {
    const  initialForm = {email:"", password:"", passwordRep:""}
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, registerSubmit)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={form.email}/>
                {errors.email && <p className="error-message">{errors.email}</p>}
                <input type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={form.password}/>
                {errors.password && <p className="error-message">{errors.password}</p>}
                <input type="password" name="passwordRep" placeholder="Repeat password"onChange={handleChange} onBlur={handleBlur} value={form.passwordRep}/>
                {errors.passwordRep && <p className="error-message">{errors.passwordRep}</p>}
                <input type="submit" value="Register" />
            </form>
        </>
    )
}   