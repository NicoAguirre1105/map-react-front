import { useState } from "react";

export function useForm(initialForm, validateForm, submit){
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState(false)
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)
    const [tried, setTried] = useState(false)

    const handleChange = (e) => {
        const {name, value} = e.target
        if(name === "remember"){
            const checked = e.target.checked 
            setForm({...form, [name]: checked})
        } else {
            setForm({...form, [name]: value})
        }
    };

    const handleBlur = (e) => {
        handleChange(e)
        if(tried){
            setErrors(validateForm(form))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setTried(true)
        let temp_errors = validateForm(form) 
        setErrors(temp_errors)

        if(Object.keys(temp_errors).length === 0){
            setLoading(true)
            // Mandar a backend la informacion y corroborar que no haya ese correo usando
            setLoading(false)
            setResponse(true)
            submit()
            // setTimeout(() => {
            //     setResponse(false)
            //     alert("recibido")
            // }, 5000)
        } else {
            return
        }
    };

    return{form, errors, loading, response, handleChange, handleBlur, handleSubmit}

}