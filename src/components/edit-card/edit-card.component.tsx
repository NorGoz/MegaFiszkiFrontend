import './edit-card.css';
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

interface Props{
    polishWord:string;
    englishWord:string;
    id:string;
    categorie:string;
}

const EditCardComponent = ({polishWord, englishWord, id, categorie}:Props) => {
    const [editMode,setEditMode] = useState(true);
    const [polish,setPolish] = useState(polishWord);
    const [english,setEnglish] = useState(englishWord);
    const [category,setCategory]=useState(categorie)

    const navigate = useNavigate()

    const backToLearn = () => {
        setEditMode(true)
        navigate('/learn')
    }

    const handleInput = (e: any) => {
        console.log(e.target.value)
        const{value,name} = e.target
        if(name === 'polish'){
            setPolish(value)
        } else if (name === 'english'){
            setEnglish(value)
        } else if(name ==='category'){
            setCategory(value)
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const res = await fetch(`http://localhost:5000/word/${id}`,{
            method:'PUT',
            body:JSON.stringify({
                polish,
                english,
                category:'user',
            }),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        setEditMode(false)
    }

    const deletWord = async () => {
        const res = await fetch(`http://localhost:5000/word/${id}`,{
            method:'DELETE',
            body:JSON.stringify({
                polish,
                english,
            }),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        console.log('usunalem',res)
        setEditMode(false)
    }


    if(editMode){
        return(
            <div className='form__container'>
                <form  className='form__content' onSubmit={handleSubmit}>
                    <input className='form__input' type='text' name='category' value={category} placeholder='Kategoria' onChange={handleInput}/>
                    <input className='form__input' type='text' name='polish' value={polish} placeholder='Słówko po polsku' onChange={handleInput}/>
                    <input className='form__input' type='text' name='english' value={english} placeholder='Słówko po angielsku' onChange={handleInput}/>
                    <button className='form__btn' type='submit'>Zapisz zmiany</button>
                </form>
                <h2 className='form__title'>Tutaj edytujesz swoją fiszkę. <br/>Możesz również ją usunąć klikając przycisk niżej
                    <br/>
                    <button onClick={deletWord} style={{border:'solid 2px black ', padding:'10px 20px', color:'royalblue',backgroundColor:'white' ,margin:'50px',cursor: 'pointer',fontWeight:'bold'}}>Usuń </button></h2>

            </div>
        )
    } else {
        return(
            <div>
                <div className='edit'>
                    <h2 className='edit__title'>Udało się edytować fiszkę</h2>
                    <button className='edit__btn' onClick={backToLearn}>Wróć do nauki</button>
                </div>
            </div>
        )
    }

}
export default EditCardComponent
