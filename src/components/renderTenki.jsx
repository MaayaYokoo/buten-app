export const RenderTenki = (props) => {
    const {tenkiData} = props;
    console.log('tenkiData props',props);
    let renderText = "";
    let renderKion = "";
    if(tenkiData.data) {
        console.log("renderTenki.jsx", tenkiData.data[0].publishingOffice);
        const getTenkiData = tenkiData.data[0].timeSeries[0].areas[0].weathers[0].split("　");
        renderText = getTenkiData[0];
        renderKion = tenkiData.data[0].timeSeries[2].areas[0].temps[0];
    } else {
        renderText = "検索に失敗しました。";
    }
    return(
        <>
        <h1>{!tenkiData.data && !tenkiData.error ? "" : renderText}</h1>
        <h2>{renderKion}°</h2>
        </>
    );
}