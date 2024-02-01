import { useState } from "react";

function selectSteps(mode){

    let steps = []

    switch (mode) {
        case "Login":
            steps = ["Login"]
            break;
        
        case "Register":
            steps = ["Register", "Verification", "User Information"]
            break;

        case "Password":
            steps = ["Email", "Verification", "New Password"]
            break;

        case "Edit Information":
            steps = ["Verification"]
            break;

        default:
            console.log("Error selecting steps in selectSteps, useForm")
            break;
    }

    return steps
}

export function useWindow(mode, setMode, showMessage){
    
    const [steps, setSteps] = useState(selectSteps(mode))
    const [step, setStep] = useState(0)

    const changeStep = () => {
        if (step !== steps.length - 1){
            setStep(step + 1)
            return
        }
        
        if(mode === "Register") {
            showMessage({
                type:"done", 
                content:"You have succcessfully created an account!"
            })
        } else if(mode === "Password"){
            showMessage({
                type:"done", 
                content:"You have succcessfully changed your password!"
            })
        } else if(mode === "Edit Information"){ 
            showMessage({
                type:"done", 
                content:"You have succcessfully changed your personal information!"
            })
        }
        setMode("")
    }

    const changeMode = (newMode) => {
        setMode(newMode)
        setSteps(selectSteps(newMode))
        setStep(0)
    }

    return [changeStep, changeMode, steps[step]]
}