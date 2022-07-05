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
    {name:"Zaloguj", path:'/auth'},
]

const listForAdmin:routers[] = [
    {name:"start", path:'/'},
    {name:"Fiszki", path:'/learn'},
    {name:'dodaj fiszki', path:'/learn/create'},
    {name:"wyloguj", path:'/auth'},
]

const Navigation = () => {
    const {user} = useContext(UserContext);

    if(user === ''){
    // {user === '' ? list[list.length-1].name = 'Zaloguj' : list[list.length-1].name = 'Wyloguj';}
    const menu = list.map(item => (
        <li className='nav__item' key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))
    console.log(`user w nav to ${user}`)
    return(
        <div className='nav__container'>
        <nav className='nav'>
            <ul className='nav__items'>
                {menu}
            </ul>
        </nav>
        </div>
    )} else if(user === 'admin') {
        const menuForAdmin = listForAdmin.map(item => (
            <li className='nav__item' key={item.name}>
                <NavLink to={item.path}>{item.name}</NavLink>
            </li>
        ))
        return(
            <div className='nav__container'>
                <nav className='nav'>
                    <ul className='nav__items'>
                        {menuForAdmin}
                    </ul>
                </nav>
        <h2>{`Użytkownik: ${user}`}</h2>
            </div>
        )} else return (
            <div>MAmy problem z nawigacja</div>
    )
}
export default Navigation
