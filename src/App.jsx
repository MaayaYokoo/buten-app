import './App.css';
import React, { useState } from "react";
import { InputText } from './components/inputText';
import { RenderTenki } from './components/renderTenki';

function App() {
    const [text, setText] = useState("");
    const onChangeText = (event) => setText(event.target.value);

    const [tenkiJson, setTenkiJson] = useState("");
    const handleSetTenkiJson = (newValue) => {
        setTenkiJson(newValue);
        // useEffect(() => {
        //     console.log("天気json出力確認 (更新後)", tenkiJson);
        // }, [tenkiJson]); // ✅ `tenkiJson` の値が更新されたときにログ出力！
        
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