// import React from "react";
import './../assets/styles/top.css'
import React, { useState } from "react";
import jsonData from './../area_code.json';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, FormHelperText, Select, MenuItem } from "@mui/material";


export const InputText = () => {
    const navigate = useNavigate();

    const [text, setText] = useState("");
    const onChangeText = (event) => setText(event.target.value);
    
    // jsonから都道府県一覧を取得
    const todoufuKen = jsonData.map((item) => item.prefecture);
    console.log("都道府県一覧", todoufuKen);

    // ドロップダウン選択確認用
    const [enpty, setEnpty] = useState(false);
    const onChangeEnpty = (event) => {
        if(event.target.value) {
            setEnpty(false);
        } else {
            setEnpty(true);
        } 
    }
    
    //外部APIより天気情報を取得 
    const searchItem = async (handleValueChange) => {
        const muchArea = jsonData.find( ({ prefecture }) => prefecture == handleValueChange );
        // console.log(handleValueChange);
        // console.log(muchArea);
    
        if(typeof muchArea !== 'undefined') {
            const area_code = muchArea.area_code;
            const jma_url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${area_code}.json`;
            console.log(jma_url);
            try {
                const res = await fetch(jma_url) // リクエストを送信
                if (!res.ok) throw new Error('サーバーエラー');
                const data = await res.json() 
                console.log(data);
                return data;
            } catch(error) {
                    console.error('通信に失敗しました', error);
            }
        }  
    }
    // APIに選択した都道府県を送信
    const passText = async () => {
        if(text) {
            const data = await searchItem(text);
            // 天気データが返却された場合天気ページへ渡す
            if (data)  {
                navigate("/tenkiPage", { state: { tenkiData: data, todoufuken: text } });
            // 返却されなかった場合404ページへ
            } else {
                navigate("/notFound");
            } 
        } else {
            setEnpty(true);
        }
    }; 

    return(
        <div className="select-area">
            <p className='select-area__caption'>\ 場所を選んでぶーさんに聞いてみよう♪ /</p>
            <div className='select-area__item'>
                <div className='select-area__item-colum'>
                    <div className='select-area__item-row'>
                        <div className='select-area__item--dropdown'>
                            <FormControl fullWidth error={enpty}>
                                <Select onChange={ (event) => {onChangeText(event); onChangeEnpty(event);}} sx={{
                                        position: "relative",
                                        backgroundColor: "#ffffff",
                                        border: "solid 1px #333333",
                                        borderRadius: "10px",
                                        height: 44 ,
                                        fontSize: "20px",
                                        color: "#333333",
                                        fontWeight: 700,
                                        "@media screen and (max-width:550px)": {
                                            fontSize: "18px"
                                        }
                                    }}>
                                    {todoufuKen.map((todoufuKen) => {
                                        return <MenuItem value={todoufuKen}>{todoufuKen}</MenuItem>
                                    })}
                                </Select>
                                {enpty && <FormHelperText className='message'></FormHelperText>}
                            </FormControl>
                        </div>
                        <p>の天気を</p>
                    </div>
                    <div className='select-area__item-row'>
                        <div className='select-area__item--search'>
                            <Button fullWidth sx={{
                                    backgroundColor: "#ffffff",
                                    border: "solid 1px #333333",
                                    borderRadius: "10px",
                                    height: 44 ,
                                    fontSize: "20px",
                                    color: "#333333",
                                    fontWeight: 700,
                                    boxShadow: "0 3px #7DADCC",
                                    "&:hover": {
                                        color: "#2e7d32",
                                        backgroundColor: "#E6FBE7",
                                        boxShadow: "0"
                                    },
                                    "@media screen and (max-width:550px)": {
                                        fontSize: "18px"
                                    }
                                }} 
                                onClick={passText}>
                                検索
                            </Button>
                        </div>
                        <p>する！</p>
                    </div>
                </div>
            </div>
        </div>
    );
};