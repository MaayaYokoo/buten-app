import React from "react";

export const InputText = (props) => {
    const { text, onChange} = props;
    const searchItem = async () => {
        console.log(text);

        if(text === "東京") {
            const area_code = "130000";
            const jma_url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${area_code}.json`;
            console.log(jma_url);
            try {
                const res = await fetch(jma_url) // リクエストを送信
                if (!res.ok) throw new Error('サーバーエラー');
                const data = await res.json() 
                console.log(data);
            } catch(error) {
                    console.error('通信に失敗しました', error);
            }

        }
        
    }
    return(
        <>
            <input 
                placeholder="都道府県を入力" 
                value={text} 
                onChange={onChange} 
            />
            <button onClick={searchItem}>検索！</button>
        </>
    );
};