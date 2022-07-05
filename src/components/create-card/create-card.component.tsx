import './create-card.css';
import {FormEvent, useEffect, useState} from "react";


interface NewCard{
    polish:string;
    english:string;
    categorie:string;
}

const defaultCard = {
    polish:'',
    english:'',
    categorie:'',
}
interface WordForSend  {
    polish:string;
    english:string;
    category:string;
    remember:boolean;

}

const CreateCardComponent = () => {
    const [form,setForm] = useState<NewCard>(defaultCard);
    const [activeCategorie,setActiveCategorie] = useState('');
    const [selectCategorie,setSelectCategorie] = useState('newCategorie');
    const [categories,setCategories] = useState<string[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:5000/categories`)
            const data = await res.json();

            setCategories(data);
        })();
    },[])

    const inputChange = (key:string, value:string) => {
        setForm(form => ({
            ...form,
            [key]:value,
        }))
    }

    const resetInputs = () => {
        setForm(defaultCard)
        setSelectCategorie(activeCategorie)
    }

    const handleCategories = (event:any) => {
        resetInputs();
        setSelectCategorie(event.target.value);
        setActiveCategorie(event.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const {polish,english,categorie} = form;
        if(categorie !== '') {
            setActiveCategorie(categorie);
            setSelectCategorie(categorie)
        }
        const word: WordForSend = {
            polish,
            english,
            remember:false,
            category: categorie !== '' ? categorie : activeCategorie,
        };

        (async()=>{
            const res = await fetch(`http://localhost:5000/word`, {
                method:'POST',
                body:JSON.stringify(word),
                headers:{
                    'Content-Type': 'application/json',
                },
            });
            const respons = await res.json();
            console.log(respons)
        })();
        resetInputs()
    }



    const options = categories.map(item => <option key={item} value={item}>{item}</option>);
    const inputCategorie = selectCategorie === 'newCategorie' ?
        <input className='form__input' type='text' name='categorie' value={form.categorie} placeholder='Nazwa kategori' onChange={e => inputChange('categorie', e.target.value)}/>
        : null

    return(
        <div className='form__container'>
            <h2 className='form__title'>Tutaj dodasz nowe fiszki do swojej kolekcji. <br/>Pamiętaj o wybraniu odpowiedniej kategori</h2>
            <form className='form__content' onSubmit={handleSubmit}>
                <label className='form__txt'>Wybierz kategorie</label>
                <select className='form__select' value={selectCategorie}  onChange={handleCategories}>
                    {options}
                    <option value='newCategorie'>dodaj nową</option>
                </select>
                {inputCategorie}
                <input className='form__input' type='text' name='polish' value={form.polish} placeholder='Słówko po polsku' onChange={e => inputChange('polish', e.target.value)}/>
                <input className='form__input' type='text' name='english' value={form.english} placeholder='Słówko po angielsku' onChange={e => inputChange('english', e.target.value)}/>
                <button className='form__btn' type='submit'>Dodaj</button>
            </form>
        </div>
    )
}
export default CreateCardComponent;
