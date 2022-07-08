import './home.css';
import add from '../../img/add.png';
import edit from '../../img/edit.png';
import flashcard from '../../img/flashCardView.png';
import categories from '../../img/learn.png';
import {NavLink} from "react-router-dom";

const Home= () => {
    return (
        <div className='home__container'>
        <div className='home__item'>
            <h1 className='home__title'>Flshcard</h1>
            <div className='content__container'>
                <p className='content__txt'>Zapisywanie fiszke na kartkach już cię męczy?</p>
                <p className='content__txt'>Zajmują za dużo miejsca</p>
                <p className='content__txt'>Z aplikacja flashcard to nie problem.</p>
            </div>

        </div>
            <div className='home__item'>
                <h2 className='home__title'>Tworznie fiszke</h2>
                <div className='content__flex'>
                    <div className='content__container'>
                        <p className='content__txt'>Szybkie tworzenie nowych fiszek</p>
                        <p className='content__txt'>Wygodny i  czytelny interface</p>
                        <p className='content__txt'>Jedno kliknięcie</p>
                    </div>
                    <div className='img__container'><img className='home__img' src={add} alt='dodawanie'/></div>
                </div>
            </div>
            <div className='home__item'>
                <h2 className='home__title'>Łatwy i wygodny dostęp</h2>
                <div className='content__flex'>
                    <div className='img__container'><img className='home__img' src={categories} alt='kategorie'/></div>
                    <div className='content__container right'>
                        <p className='content__txt'>Wygodny dostęp, dzięki kategorią</p>
                        <p className='content__txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi commodi </p>
                        <p className='content__txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi commodi</p>
                    </div>
                </div>
            </div>
            <div  className='home__item'>
                <h2 className='home__title'>Przyjemne UI fiszki</h2>
                <div className='content__flex'>
                    <div className='content__container'>
                        <p className='content__txt'>Przyjemna nauka</p>
                        <p className='content__txt'>Interesująca animacja tłumaczenia</p>
                        <p className='content__txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi commodi</p>
                    </div>
                    <div className='img__container'><img className='home__img' src={flashcard} alt='fiszka'/></div>
                </div>
            </div>
            <div className='home__item'>
                <h2 className='home__title'>Prosta edycja</h2>
                <div className='content__flex'>
                    <div className='img__container'><img className='home__img' src={edit} alt='edit'/></div>
                    <div className='content__container right'>
                        <p className='content__txt'>Zrobiłeś literówkę, to nie problem</p>
                        <p className='content__txt'>Intuicyjny system edycji</p>
                        <p className='content__txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium animi commodi</p>
                    </div>
                </div>
            </div>

            <div className='home__login'>
                <h2 className='login__title'>Aby korzystać z aplikacji w pełni przejdz do formularza logowania</h2>
                <NavLink to='/auth' className='login__btn'>Zaloguj</NavLink>
            </div>
        </div>

    )
}
export default Home;
