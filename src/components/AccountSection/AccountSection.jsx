import "./AccountSection.css"
import { useState } from "react"
import { AccountWindow } from "../AccountWindow/AccountWindow"

export function AccountSection() {
    // From backend
    const [userLoggedIn, setUserLoggedIn] = useState(false)
    const userInitial = "M"

    // No login menu

    const [userMenu, setUserMenuState] = useState("hidden")

    const handleAvatarClick = () => {
        setUserMenuState(userMenu === "hidden" ? "" : "hidden")
    }

    const handleLogOutClick = () => {
        setUserLoggedIn(false)
        setUserMenuState("hidden")
    }

    // With login

    const [modalMode, setModalMode] = useState("none")
    let sectionContent

    const handleLoginClick = () => {
        setModalMode("Login")
    }

    const handleRegisterClick = () => {
        setModalMode("Register")
    }
    if (userLoggedIn)
    {
        sectionContent = (
            <>
                <div className="avatar-img" style={{backgroundColor: "green"}} onClick={handleAvatarClick}>{userInitial}</div>
                <div className={`user-menu ${userMenu}`}>
                    <ul>
                        <li><a href="./Profile">Профиль</a></li>
                        <li><a href="./Profile">Подписка</a></li>
                        <li><a href="./Profile">История</a></li>
                        <li onClick={handleLogOutClick}>Войти</li>
                    </ul>
                </div>
            </>
        )      
    } else {
        sectionContent = (
            <>
                <button type="button" className="login-button" onClick={handleLoginClick}>Войти</button>
                <button type="button" className="register-button" onClick={handleRegisterClick}>Регистрация</button>
                <AccountWindow mode={`${modalMode}`} setModalMode = {setModalMode} setUserLoggedIn = {setUserLoggedIn}/>
            </>
        )
    }
    
    return (
        <div className="account-section">
            {sectionContent}
        </div>
    )
}