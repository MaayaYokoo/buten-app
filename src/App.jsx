import './App.css';
import React, { useState } from "react";
import { InputText } from './components/inputText';
import { RenderTenki } from './components/renderTenki';

function App() {
    const [text, setText] = useState("");
    const onChangeText = (event) => setText(event.target.value);

    const [tenkiJson, setTenkiJson] = useState("");
    const handleSetTenkiJson = (newValue) => {
        // setTenkiJson(newValue.toString());
        setTenkiJson(JSON.stringify(newValue));
        // console.log("天気json出力確認", tenkiJson);
        // useEffect(() => {
        //     console.log("天気json出力確認 (更新後)", tenkiJson);
        // }, [tenkiJson]); // ✅ `tenkiJson` の値が更新されたときにログ出力！
        
    };

    // const [isVisible, setIsVisible] = useState(true);

    // const handleValueChange = (newValue) => {
    //     setText(newValue);
    // };

    return (
        <div>
            <InputText 
                text={text}
                onChange={onChangeText}
                handleSetTenkiJson={handleSetTenkiJson}
            />
            {tenkiJson.length >= 1 ? (
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