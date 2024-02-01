import { LoginForm } from "../forms/LoginForm";
import { RegisterForm } from "../forms/RegisterForm";
import { UserInfoForm } from "../forms/UserInfoForm";
import { VerificationForm } from "../forms/VerificationForm";
import { PasswordForm } from "../forms/NewPasswordForm";
import { EmailForm } from "../forms/EmailForm"
// import { EditInfoForm } from "../Forms/EditInfoForm";
import "./Form.css"

export function Form({changeStep, changeMode, step}){

    let form

    switch (step) {
        case "Login":
            form = <LoginForm changeStep={changeStep} changeMode={changeMode}/>
            break
        case "Register":
            form = <RegisterForm changeStep={changeStep} changeMode={changeMode}/>
            break
        case "User Information":
            form = <UserInfoForm changeStep={changeStep}/>
            break
        case "Verification":
            form = <VerificationForm changeStep={changeStep}/>
            break
        case "New Password":
            form = <PasswordForm changeStep={changeStep}/>
            break
        case "Email":
            form = <EmailForm changeStep={changeStep}/>
            break
        // case "Edit Information":
        //     form = <EditInfoForm changeStep={changeStep}/>
        //     break    
        case "":
            return
        default:
            console.log("Error getting form from Form")
            return
    }

    return (
        <>
        <h3>{step}</h3>
        <span className="separator"></span>
        <div className="logo"></div>
        {form}
        </>
    )
}