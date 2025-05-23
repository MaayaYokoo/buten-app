import { Link } from 'react-router-dom';

export const NotFound = () => {
    
    return(
        <>
            <h2>ページが見つかりませんでした</h2>
            <Link to="/">
                <button>トップページへ</button>
            </Link>
        </>
    );
}