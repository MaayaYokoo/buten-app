export const RenderTenki = (props) => {
    const tenkiData = props;
    console.log('tenkiData props',props);
    console.log("renderTenki.jsx", JSON.parse(tenkiData));
    console.log("renderTenki.jsx", tenkiData[1]);
    const renderData = "a"
    return(
        <>
            <h1>{renderData}</h1>
        </>
    );
}