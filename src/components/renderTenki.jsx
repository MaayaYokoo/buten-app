import './../assets/styles/tenkiPage.css'
import weatherPoint from './../weather_point.json';
import sunnyIcon from './../assets/images/sunny_icon.png';
import rainyIcon from './../assets/images/rainy_icon.png';
import cloudyIcon from './../assets/images/cloudy_icon.png';
import snowlyIcon from './../assets/images/snowly_icon.png';

export const RenderTenki = (props) => {
    const {tenkiData, todoufuken} = props;
    console.log('tenkiData props',props);
    let renderText = "";
    let renderKion = "";
    let renderPoint = "";
    let renderIcon = "";
    
    if(tenkiData) {
        console.log("renderTenki.jsx", tenkiData[0].publishingOffice);
        const getTenkiData = tenkiData[0].timeSeries[0].areas[0].weathers[0].split("　");
        renderText = getTenkiData[0];
        const point = weatherPoint.filter(weatherPoint => weatherPoint.weather === renderText).map(weatherPoint => weatherPoint.comment);
        const index = Math.floor( Math.random() * point.length);
        console.log("point", point)
        console.log("index", index)
        renderKion = tenkiData[0].timeSeries[2].areas[0].temps[0];
        renderPoint = point[index];
        console.log("renderPoint", renderPoint);

        if(renderText === "晴れ") {
            renderIcon = sunnyIcon;
        } else if(renderText === "雨") {
            renderIcon = rainyIcon;
        } else if(renderText === "くもり") {
            renderIcon = cloudyIcon;
        } else if(renderText === "雪") {
            renderIcon = snowlyIcon;
        }

    } else {
        renderText = "検索に失敗しました。";
    }
    return(
        <div className='tenki-info'>
            <h2 className='tenki-info__todoufuken'>{todoufuken}</h2>
            <div className='tenki-info__detail'>
                <img src={renderIcon} alt="" className='tenki-info__detail--tenki-icon' />
                <div className='tenki-info__detail--border'></div>
                <p className='tenki-info__detail--kion'>{!renderKion ? "" : `${renderKion}°`}</p>
            </div>
            <p className='tenki-info__point'>{renderPoint}</p>
        </div>
    );
}