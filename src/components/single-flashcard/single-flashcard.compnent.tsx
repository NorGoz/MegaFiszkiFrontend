import './single-flashcard.css';
import {useState} from "react";


import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {faUserCog} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditCardComponent from "../edit-card/edit-card.component";

type Props ={
    card: {
        id: string;
        polish: string;
        english: string;
        category: string;
        remember: boolean;
    };
    flashcardsIndex: number;
    changeFlashcardIndex: any;
}

const SingleFlashcardCompnent = ({card,flashcardsIndex,changeFlashcardIndex}:Props) => {
    const [flipped, setFlipped] = useState(true);
    const [remember, setRemember] = useState(card.remember);
    const [activeLernMode, setActiveLernMode] = useState(true);

    const handleFlip = () => {
        setFlipped(prevValue => !prevValue)
    }

    const leftArrowElement = <FontAwesomeIcon icon={faChevronLeft}/>
    const rightArrowElement = <FontAwesomeIcon icon={faChevronRight}/>
    const gearElement = <FontAwesomeIcon icon={faUserCog}/>

    function handleRemember() {
        setRemember(prevValue => !prevValue);
    }

    if (activeLernMode) {
    return (
        <div className='card'>
            <div className={flipped ? 'flipped' : ''}>
                <div className='englishCard front'>
                    <div className='card__info'>
                        <span style={{cursor: 'pointer'}} onClick={()=>setActiveLernMode(false)}>{gearElement}</span>
                        {/*tu mam dostep do id przezp props/ edit cos z idi  nav link*/}
                        <span>{flashcardsIndex}</span>
                        <label>Pamiętam <input type="checkbox" checked={remember} onChange={handleRemember}/></label>
                    </div>
                    <h2 className='card__txt' onClick={handleFlip}>{card.english}</h2>
                    <span className='card__arrow left'
                          onClick={() => changeFlashcardIndex(false)}>{leftArrowElement}</span>
                    <span className='card__arrow right'
                          onClick={() => changeFlashcardIndex(true)}>{rightArrowElement}</span>
                </div>
                <div className='polishCard back'>
                    <div className='card__info'>
                        <span style={{cursor: 'pointer'}} onClick={()=>setActiveLernMode(false)}>{gearElement}</span>
                        {/*tu mam dostep do id przezp props/ edit cos z idi  nav link*/}
                        <span>{flashcardsIndex}</span>
                        <label>Pamiętam <input type="checkbox" checked={remember} onChange={handleRemember}/></label>
                    </div>
                    <h2 className='card__txt' onClick={handleFlip}>{card.polish}</h2>
                    <span className='card__arrow left'
                          onClick={() => changeFlashcardIndex(false)}>{leftArrowElement}</span>
                    <span className='card__arrow right'
                          onClick={() => changeFlashcardIndex(true)}>{rightArrowElement}</span>
                </div>
            </div>
        </div>
    )
    } else return (
        <EditCardComponent polish={card.polish} english={card.english} id={card.id}/>
    )
};

export default SingleFlashcardCompnent;
