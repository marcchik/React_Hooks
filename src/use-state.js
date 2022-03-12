import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    return (
        <div>
            <HookSwitcher />
        </div>
    )
}


const HookSwitcher = () => {

    const [ color, setColor ] = useState('gray');
    const [ fontSize, setFontSize ] = useState(14);

    return (
        <div className='container'
            style={{ padding : '10px',
            backgroundColor: color,
            fontSize: `${fontSize}px` }}>
            hello World
            <button className='btn btn-control'
                onClick={() => setColor('gray')}>
                Dark
            </button>
            <button className='btn btn-control'
                onClick={() => setColor('Teal')}>
                Light
            </button>
            <button className='btn btn-control'
                onClick={() => setFontSize((s) => s + 2)}>
                +
            </button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));