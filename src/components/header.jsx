import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.png'
import './../assets/styles/common.css'

export const Header= () => {
    return(
        <header className='header'>
            <h1 className='header__container'>
                <Link to="/" className='header__logo' onClick={() => console.log("クリック")}>
                    <img src={logo} alt="ぶーてんロゴ" />
                </Link>
            </h1>
        </header>
    );
}