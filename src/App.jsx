import './App.css';
import React, { useState } from "react";
import { InputText } from './components/inputText';
import { RenderTenki } from './components/renderTenki';

function App() {
    const [text, setText] = useState("");
    const onChangeText = (event) => setText(event.target.value);

    const [tenkiJson, setTenkiJson] = useState({ data: null, error: null });
    const handleSetTenkiJson = (newValue) => {
        if(newValue === "error") { 
            setTenkiJson({ data: null, error: newValue })
        } else {
            setTenkiJson({ data: newValue, error: null });
        }
        // setTenkiJson(newValue);
    };

    return (
        <div>
            <InputText 
                text={text}
                onChange={onChangeText}
                handleSetTenkiJson={handleSetTenkiJson}
            />
            {tenkiJson ? (
            <RenderTenki 
                tenkiData={tenkiJson}
            />
            ) : (
                ""
            )}
        </div>
    );
}

export default App;