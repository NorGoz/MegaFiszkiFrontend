import './navigation.css';
import {NavLink} from "react-router-dom";

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
    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))
    return(
        <nav>
            <ul>
                {menu}
            </ul>
        </nav>
    )
}
export default Navigation
