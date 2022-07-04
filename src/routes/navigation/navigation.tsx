import './navigation.css';
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../../context/user.context";

interface routers {
    name:string;
    path:string;
}

const list:routers[] = [
    {name:"start", path:'/'},
    {name:"Fiszki", path:'/learn'},
    {name:"Zaloguj", path:'/auth'}
]

const Navigation = () => {
    const {user} = useContext(UserContext);

    {user === '' ? list[list.length-1].name = 'Zaloguj' : list[list.length-1].name = 'Wyloguj';}
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))
    console.log(`user w nav to ${user}`)
    return(
        <nav>
            <ul>
                {menu}
            </ul>
            {user === '' ? null : <h2>{`Użytkownik: ${user}`}</h2>}
        </nav>
    )
}
export default Navigation
