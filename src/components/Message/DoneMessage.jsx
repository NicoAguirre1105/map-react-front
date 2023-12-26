
export function DoneMessage({mode, setModalMode, setUserLoggedIn}) {

    const handleFinishClick = () => {
        if (mode === "DonePassword") {
            setModalMode("Login")
        } else {
            setModalMode("none")
            setUserLoggedIn(true)
        }
    }

    let phrase
    
    if (mode === "DonePassword") {
        phrase = "You have changed your password successfully!" 
    } else if (mode === "Done") {
        phrase = "You have changed your email succesfully"
    } else {
        phrase = "You have succefully created your account!" 
    }

    return (
        <>
            <h4>Congratulations!</h4>
            <p className="copy-text">{phrase}</p>
            <button type="submit" onClick={handleFinishClick}>Got it!</button>
        </>
    )
}