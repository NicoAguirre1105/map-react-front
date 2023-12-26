import { useForm } from "../hooks/useForm";

const validateForm = (form) => {
    let errors = {}
    
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
    
    if(!form.email.trim()){
        errors.email = "This field must be filled"
    } else if (!regexEmail.test(form.email.trim())) {
        errors.email = "Email is not valid"
    }
    // Sumarle la verificacion de backend del correo

    if(!form.password){
        errors.password = "This field must be filled"
    } 
    // Sumarle la verificacion de password en backend
    
    return errors
}

export function LoginForm({handleNewPasswordClick, loginSubmit}) {
    const  initialForm = {email:"", password:"", remember:true}
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, loginSubmit)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} onBlur={handleBlur} value={form.email}/>
                {errors.email && <p className="error-message">{errors.email}</p>}
                <input type="password" name="password" placeholder="Password" onChange={handleChange} onBlur={handleBlur} value={form.password}/>
                {errors.password && <p className="error-message">{errors.password}</p>}
                <div className="options">
                    <input type="checkbox" name="remember" onChange={handleChange} onBlur={handleBlur} value={form.remember} checked/>
                    <label htmlFor="remember">Remember me</label>
                    <p onClick={handleNewPasswordClick}>Forgot Password?</p>
                </div>
                <input type="submit" value="Login"/>
            </form>
        </>
    )
}   