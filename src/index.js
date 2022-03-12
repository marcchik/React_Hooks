import React, { useContext } from 'react';
import ReactDOM from 'react-dom';

const MyContext = React.createContext();

const App = () => {
    return (
        <div>
            <Child />
        </div>
    )
}


const Child = () => {
    const value = useContext(MyContext)

    return <p></p>
}

ReactDOM.render(<App />, document.getElementById('root'));