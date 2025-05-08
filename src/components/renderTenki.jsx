export const RenderTenki = (props) => {
    const {tenkiData} = props;
    console.log('tenkiData props',props);
    console.log("renderTenki.jsx", tenkiData[0].publishingOffice);
    const renderData = tenkiData[0].timeSeries[0].areas[0].weathers[0];
    return(
        <>
            <h1>{renderData}</h1>
        </>
    );
}