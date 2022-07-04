import './categorie.css';
import {useEffect, useState} from "react";

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
        <div>
            {categories.length === 0 ? null : categories.map(item => <h2 key={item}>{item}</h2>)}
        </div>
    )
}
export default CategorieComponent
