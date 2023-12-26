import { useForm } from "../hooks/useForm";

export function UserInfoForm({submit}){
    const validateForm = (form) => {
        let errors = {}
        
        if(!form.name.trim()){
            errors.name = "This field must be filled"
        }
        if(!form.lastName.trim()){
            errors.name = "This field must be filled"
        }
        
        return errors
    }

    const  initialForm = {name:"", lastName:"", organization:"None", role:"None"}
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, submit)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} onBlur={handleBlur} value={form.name}/>
                {errors.name && <p className="error-message">{errors.name}</p>}
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} onBlur={handleBlur} value={form.lastName}/>
                {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                <input type="text" name="organization" placeholder="Organization" onChange={handleChange} onBlur={handleBlur} value={form.organization}/>
                {errors.organization && <p className="error-message">{errors.organization}</p>}
                <input type="text" name="role" placeholder="Role" onChange={handleChange} onBlur={handleBlur} value={form.role}/>
                {errors.role && <p className="error-message">{errors.role}</p>}
                <input type="submit" value="Done"/>
            </form>
        </>
    )
}