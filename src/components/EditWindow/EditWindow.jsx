import "./EditWindow.css"
import { VerificationForm } from "../Forms/VerificationForm"
import { DoneMessage } from "../Message/DoneMessage"

export function EditWindow({mode, setModalMode, handleClick}) {

    const handleCloseClick = () => {
        // If user is already registering and gets out, I have to send smth to backed so he deletes all info received until that
        setModalMode("none")
    }

    let base
    let title

    if (mode === "Verification") {
        title = "Verification"
        base = <VerificationForm mode={mode} setModalMode={setModalMode}/>
    } else if (mode === "Done") {
        // En vez de logo viene check icon
        title = "Process Finished"
        base = <DoneMessage mode={mode} setModalMode={setModalMode} setUserLoggedIn={(e) => {handleClick()}}/>
    } else return

    return (
        <>
            <div className="modal-container">
                <section className="account-modal">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" onClick={handleCloseClick} className="close-icon"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    <h3>{title}</h3>
                    <span className="separator"></span>
                    <div className="logo"></div>
                    {base}
                </section>
            </div>
        </>
    )
}

