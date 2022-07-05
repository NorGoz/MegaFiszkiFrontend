import './categorie.css';
import {useEffect, useState} from "react";
import CategorieItemComponent from "../categorie-item/categorie-item.component";

const CategorieComponent = () => {
    const [categories,setCategories] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:5000/categories`)
            const data = await res.json();

            setCategories(data);
        })();
    },[])
    console.log(categories)
    return(
        <div className='categorie__container'>
            {categories.length === 0 ? <h2>Brak kategori</h2> : categories.map(item => <CategorieItemComponent key={item} title={item}/>)}
        </div>
    )
}
export default CategorieComponent
