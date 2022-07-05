import './categorie-item.css';
import {NavLink} from "react-router-dom";

interface Props{
    title:string;
}

const CategorieItemComponent = ({title}:Props) => {
    return(
        <div className='categorie__item'>
            <div className='categorie__titleContainer'>
                <h2 className='categorie__title'>{title}</h2>
            </div>
            <div className='categorie_linkContainer'>
                <NavLink className='categorie__link' to={`/learn/flashcards/${title}`}>start</NavLink>
            </div>
        </div>
    )
}
export default CategorieItemComponent
