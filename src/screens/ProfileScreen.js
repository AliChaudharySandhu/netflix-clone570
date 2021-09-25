import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from '../Nav'
import PlanScreen from './PlanScreen'
import './ProfileScreen.css'

function ProfileScreen() {
    const user = useSelector(selectUser)
    const history = useHistory()
    const isUserSub = user.subscriptions?.planName;
    return (
        <div  className="profileScreen">
            <Nav />

            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://smashinglogo.com/static/img/virtual-designers/peter.gif" alt=""/>
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            <h3>Plans <span>Current: {isUserSub ? user.subscriptions?.planName : "No Subscription"}</span></h3>
                            
                            <PlanScreen/>
                            <button className="profileScreen__signout" onClick={() => {auth.signOut(); history.push("/")}}>Sign Out</button>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
