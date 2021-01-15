import React from 'react';
import './HomePage.css';
import StartButton from '../../components/StartButton/StartButton';

const HomePage = () => {

    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <h1>Card Memory Game!</h1>
            </header>
            <StartButton />
        </div>
    )
};

export default HomePage;
