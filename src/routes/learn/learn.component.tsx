import {Route, Routes } from 'react-router-dom';
import './learn.css';
import CategorieComponent from "../../components/categorie/categorie.component";
import CreateCardComponent from "../../components/create-card/create-card.component";
import FlashcardComponent from "../../components/flashcard/flashcard.component";
import EditCardComponent from "../../components/edit-card/edit-card.component";

const Learn = () => {
    return(
        <div>
            <h1>learn wyswietla kategorie (komponent categories)</h1>
            <Routes>
                <Route path="/"  element={<CategorieComponent/>} />
                <Route path="flashcard" element={<FlashcardComponent/>}/>
                <Route path="create" element={<CreateCardComponent/>} />
                <Route path="edit" element={<EditCardComponent/>} />
            </Routes>
        </div>
    )
}
export default Learn
