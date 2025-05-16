import { Link } from 'react-router-dom';
import { RenderTenki } from './../components/renderTenki';
import { useLocation } from "react-router-dom";

export const TenkiPage = () => {
    const location = useLocation();
    const {state} = location;
    
    return(
        <>
            <h2>天気ページです</h2>
            <RenderTenki 
                tenkiData={state.tenkiData}
            />
            <Link to="/">
                <button>トップページへ</button>
            </Link>
        </>
    );
}