// import React from "react";
import React, { useState } from "react";
import jsonData from './../area_code.json';

export const InputText = (props) => {
    // const { text, onChange, searchItem, tenkiJson} = props;
    const { text, onChange, handleSetTenkiJson} = props;
    const todoufuKen = jsonData.map((item) => item.prefecture);
    console.log("都道府県一覧", todoufuKen);
    
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
    const passText = async () => {
        const data = await searchItem(text);
        // const data = "";
        if (data) handleSetTenkiJson(data);
        else handleSetTenkiJson("error");

    };

    return(
        <>
            <select onChange={onChange}>
                {todoufuKen.map((todoufuKen) => {
                    return <option key={todoufuKen}>{todoufuKen}</option>;
                })}
            </select>
            <button onClick={passText}>検索！</button>
        </>
    );
};