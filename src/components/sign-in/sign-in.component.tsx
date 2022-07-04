import './sign-in.css';
import {FormEvent, useContext, useState} from "react";
import {UserContext} from "../../context/user.context";

const data = {
    login:'admin',
    password:'admin',
}

const SignInComponent = () => {
    const {setUser} = useContext(UserContext);
    const [loginForm, setLoginForm] = useState({
        login:'',
        password:'',
    })

    const signIn = (e:FormEvent) => {
        e.preventDefault();

        if(loginForm.login === data.login && loginForm.password === data.password){
            setUser('admin');
        }
    }

    const updateForm = (key:string, value:string) => {
        setLoginForm(form => ({
            ...form,
            [key]: value,
        }));
    }


    return(
        <div>
            <form action="" onSubmit={signIn}>
                <h1>Logowanie</h1>
                <p>
                    <label>
                        Login: <br/>
                        <input
                            type="text"
                            name='login'
                            required
                            value={loginForm.login}
                            onChange={e => updateForm('login', e.target.value)}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Hasło: <br/>
                        <input
                            type="password"
                            name='password'
                            required
                            value={loginForm.password}
                            onChange={e => updateForm('password', e.target.value)}
                        />
                    </label>
                </p>
                <button type="submit">Zaloguj</button>
            </form>
        </div>
    )
}

export default SignInComponent
