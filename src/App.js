/* eslint-disable no-undef */
import React from 'react';
import './App.css';
import logo from './logo.svg';
import { useState } from 'react';
import ladable from '@loadable/component';
const SplitMe = ladable(() => import('./SplitMe'), { fallback: <div>loading...</div> });

function App() {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        setVisible(true);
    };
    const onMouseOver = () => {
        SplitMe.preload();
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p onClick={onClick} onMouseOver={onMouseOver}>
                    Hello React!
                </p>
                {visible && <SplitMe />}
            </header>
        </div>
    );
}

export default App;
