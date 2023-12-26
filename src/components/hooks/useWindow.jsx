import { useState } from "react";

export function useWindow(process, closeWindow) {
    let steps

    if (process === "Login") {
        steps = ["Login"]
    } else if (process === "Register") {
        steps = ["Register", "Verification", "User Information", "Done"]
    } else if (process === "Change"){
        steps = ["Email Verification", "Verification", "Done"]
    } else if (process === "New Password"){
        steps = ["Email Verification", "Verification", "New Password", "Done"]
    }

    console.log(steps)

    const [step, setStep] = useState(0)
    let mode = steps[step]

    const handleChange = () => {
        if(step + 1 < Object.keys(steps).length){
            setStep(step + 1)
            handleMode()
        }else {
            closeWindow()
        }
    }

    const handleMode = () => {
        mode = steps[step]
    }

    console.log("process")
    console.log(process)
    

    return {mode, handleChange}

}