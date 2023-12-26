import "./ProfileAside.css"

export function ProfileAside({user}) {

    const fullName = `${user.name} ${user.lastName}`

    return (
        <>
        <aside>
            <div className="avatar-container">
                <div className="avatar">{user.name.charAt(0)}</div>
                <h2>{fullName}</h2>
                <p className="organization">{user.organization}</p>
                <p className="role">{user.role}</p>
            </div>
            <div className="aside-menu">
                <ul>
                    <li>Profile</li>
                    <li>Subscription</li>
                    <li>History</li>
                    <li>Terms and Conditions</li>
                </ul>
            </div>
        </aside>
        </>
    )
}