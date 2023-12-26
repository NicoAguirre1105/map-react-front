import React from "react";
import { ProfileAside } from "../components/ProfileAside/ProfileAside"
import { ProfileInfo } from "../components/ProfileInfo/ProfileInfo"
import "../css/profile.css"

const Profile = () => {
    const user = {email:"example@gmail.com", name:"John", lastName:"Walker", organization:"SPBU", role:"Student", subscription:"Free"}
    // Desde previo login

    return (
        <>
            <main>
                <ProfileAside user={user}/>
                <ProfileInfo user={user}/>
            </main>
        </>
    )
}

export default Profile