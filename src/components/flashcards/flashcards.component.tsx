import './flashcards.css';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {WordForResponse} from 'types';
import SingleFlashcardCompnent from "../single-flashcard/single-flashcard.compnent";


const FlashcardsComponent = () => {
    const {categories} = useParams()
    const [flashcards, setFlashcards] = useState<WordForResponse[]>([]);
    const [flashcardsIndex,setFlashcardsIndex] = useState(0);

    const changeFlashcardIndex = (next:boolean) => {
        if(next){
            if(flashcardsIndex >= flashcards.length-1){
                setFlashcardsIndex(-1);
            }
            setFlashcardsIndex(prevValue => prevValue + 1)
        }else {
            if(flashcardsIndex <= 0){
                setFlashcardsIndex(flashcards.length)
            }
            setFlashcardsIndex(prevValue => prevValue - 1)
        }
    }

    useEffect(() => {
        (async () => {

            const res = await fetch(`http://localhost:5000/categories/${categories}`);
            const data = await res.json();

            setFlashcards(data);
        })();
    },[categories])

    console.log(categories)

    const mapedFlashcards =  flashcards.map(card => (
        <SingleFlashcardCompnent key={card.id} card={card} flashcardsIndex={flashcardsIndex} changeFlashcardIndex={changeFlashcardIndex} flashcardsLength={flashcards.length}/>
    ))
    console.log(flashcards)
    if(flashcards.length > 0){
    return(
        <div>
            {
                mapedFlashcards[flashcardsIndex]
            }
        </div>
    )} else return (
        <div>Brak fiszek</div>
    )
}
export default FlashcardsComponent;
