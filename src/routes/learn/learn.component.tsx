import {Route, Routes } from 'react-router-dom';
import './learn.css';
import CategorieComponent from "../../components/categorie/categorie.component";
import CreateCardComponent from "../../components/create-card/create-card.component";
import FlashcardsComponent from "../../components/flashcards/flashcards.component";
import EditCardComponent from "../../components/edit-card/edit-card.component";

const Learn = () => {
    return(
        <div className='mainContent'>
            <Routes>
                <Route path="/"  element={<CategorieComponent/>} />
                <Route path="flashcards/:categories" element={<FlashcardsComponent/>}/>
                <Route path="create" element={<CreateCardComponent/>} />
                {/*<Route path="edit" element={<EditCardComponent/>} />*/}
            </Routes>
        </div>
    )
}
export default Learn
