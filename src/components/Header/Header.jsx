import { useState } from "react"
import { Avatar } from "../Avatar/Avatar"
import { WindowPopUp } from "../WindowPopUp/WindowPopUp"
import { Message } from "../Message/Message"
import "./Header.css"

export function Header({user}) {

    const [mode, setMode] = useState("")
    const isUser = Object.keys(user).length !== 0
    const [message, setMessage] = useState({})


    const handleButtton_Login = () => {
        setMode("Login")
    }
    const handleButtton_Register = () => {
        setMode("Register")
    }

    const showMessage = (msg) => {
        setMessage(msg)
        setTimeout(() => {
            setMessage({})
        }, 5000)
    }

    return (
        <>
        <header className="header">
            <div className="logo"></div>
            <nav>
                <ul>
                    <li><a href="./Home">Home</a></li>
                    <li><a href="./About">About</a></li>
                    <li><a href="./Download">Download</a></li>
                    <li><a href="./Presets">Presets</a></li>
                    <li><a href="./ProcessFile">Process File</a></li>
                </ul>
            </nav>
            <div className="options">
                {isUser && 
                    <Avatar user={user}/>
                }
                {!isUser && 
                    <>
                        <button className="button-A button-login" onClick={handleButtton_Login}>Login</button>
                        <button className="button-B button-register" onClick={handleButtton_Register}>Register</button>
                    </>
                }
            </div>
        </header>
        {mode !== "" && 
            <WindowPopUp mode={mode} setMode={setMode} showMessage={showMessage}/>
        }
        {Object.keys(message).length !== 0 && <Message message={message}/>}
        </>
    )
}