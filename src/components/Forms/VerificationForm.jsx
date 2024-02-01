import { useForm } from "../hooks/useForm";

export function VerificationForm({changeStep}){
    const validateForm = (form) => {
        let errors = {}

                const regexCode = /^[0-9]{6}$/
        
        if(!form.code.trim()){
            errors.code = "Insert the pin code that you get to your email"
        } else if (!regexCode.test(form.code.trim())){
            errors.code = "Code is not valid"
        }
        // Sumarle la verificacion del backend que el codigo es correcto
        
        return errors
    }

    const  initialForm = {code:""}
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, changeStep)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p className="copy-text">Please enter your 6-digit code that has been sent to your email address. This code is valid for 5 minutes!</p>
                <input type="text" name="code" placeholder="Verification Code" onChange={handleChange} onBlur={handleBlur} value={form.code}/>
                <div className="error-container">
                    {errors.code && <p className="error-message">{errors.code}</p>}
                </div>
                <input type="submit" value="Verify Code" />
            </form>
        </>
    )
}