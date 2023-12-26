import { InfoItem } from "../InfoItem/InfoItem";
import "./ProfileInfo.css"


export function ProfileInfo({user}) {
    return (
        <>
        <div className="info-container">
            <h1>User Profile</h1>
            <InfoItem value={user.email} label="Email"/>
            <InfoItem value={user.name} label="Name"/>
            <InfoItem value={user.lastName} label="Last Name"/>
            <InfoItem value={user.organization} label="Organzation"/>
            <InfoItem value={user.role} label="Role"/>
            <InfoItem value={user.subscription} label="Subscription"/>
        </div>
        </>
    )
}