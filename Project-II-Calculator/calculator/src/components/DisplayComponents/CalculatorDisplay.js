import React from 'react';
import './Display.css';

const CalculatorDisplay = () => {
    return (
        <div className="calculator-container">
            <h1 className="input-box">0</h1>
            <div className="nmbr-side">
                <h1 class="clear">clear</h1>
                <div className="nmbr-btns">
                    <h1 className="num">0</h1>
                    <h1 className="num">1</h1>
                    <h1 className="num">2</h1>
                    <h1 className="num">3</h1>
                    <h1 className="num">4</h1>
                    <h1 className="num">5</h1>
                    <h1 className="num">6</h1>
                    <h1 className="num">7</h1>
                    <h1 className="num">8</h1>
                    <h1 className="num">9</h1>
                </div>
            </div>
            <div className="function-btns">
                <h1 className="func">%</h1>
                <h1 className="func">X</h1>
                <h1 className="func">-</h1>
                <h1 className="func">+</h1>
                <h1 className="func">=</h1>
            </div>
        </div>
    );
}

export default CalculatorDisplay;