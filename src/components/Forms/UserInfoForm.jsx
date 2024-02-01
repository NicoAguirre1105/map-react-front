import { useForm } from "../hooks/useForm";

export function UserInfoForm({changeStep}){
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
    const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm, changeStep)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} onBlur={handleBlur} value={form.name}/>
                <div className="error-container">
                    {errors.name && <p className="error-message">{errors.name}</p>}
                </div>
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} onBlur={handleBlur} value={form.lastName}/>
                <div className="error-container">
                    {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                </div>
                <input type="text" name="organization" placeholder="Organization" onChange={handleChange} onBlur={handleBlur} value={form.organization}/>
                <div className="error-container">
                    {errors.organization && <p className="error-message">{errors.organization}</p>}
                </div>
                <input type="text" name="role" placeholder="Role" onChange={handleChange} onBlur={handleBlur} value={form.role}/>
                <div className="error-container">
                    {errors.role && <p className="error-message">{errors.role}</p>}
                </div>
                <input type="submit" value="Done"/>
            </form>
        </>
    )
}