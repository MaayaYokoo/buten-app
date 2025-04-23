import './App.css';
import React, { useState } from "react";
import { InputText } from './components/inputText';

function App() {
    const [text, setText] = useState('');
    // const onChangeText = (event) => setText(event.target.value);
    const onChangeText = (event) => {
        setText(event.target.value);
        console.log("現在のtext:", event.target.value);
    };
    

    return (
        <div>
            <InputText 
                text={text}
                onChange={onChangeText}
            />
        </div>
    );
}

export default App;