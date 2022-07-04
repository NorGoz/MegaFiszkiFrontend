import './authentication.css';
import {FormEvent, useContext, useState} from "react";
import {UserContext} from "../../context/user.context";
import SignInComponent from "../../components/sign-in/sign-in.component";
import LogOutComponent from '../../components/log-out/log-out.component';


const Authentication = () => {
    const {user} = useContext(UserContext);


    return(
        <div>
            {user === '' ? <SignInComponent/> : <LogOutComponent/>}
        </div>
    )
}

export default Authentication
