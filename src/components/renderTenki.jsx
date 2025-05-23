export const RenderTenki = (props) => {
    const {tenkiData, todoufuken} = props;
    console.log('tenkiData props',props);
    let renderText = "";
    let renderKion = "";
    if(tenkiData) {
        console.log("renderTenki.jsx", tenkiData[0].publishingOffice);
        const getTenkiData = tenkiData[0].timeSeries[0].areas[0].weathers[0].split("　");
        renderText = getTenkiData[0];
        renderKion = tenkiData[0].timeSeries[2].areas[0].temps[0];
    } else {
        renderText = "検索に失敗しました。";
    }
    return(
        <>
        <h2>現在の{todoufuken}は...</h2>
        <h2>{renderText}</h2>
        <h2>{!renderKion ? "" : `${renderKion}°`}</h2>
        </>
    );
}