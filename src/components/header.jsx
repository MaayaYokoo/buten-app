import { Link } from 'react-router-dom';
import logo from './../assets/images/logo.png'
import './../assets/styles/common.css'

export const Header= () => {
    return(
        <header className='header'>
            <div className='header__container'>
                <Link to="/" className='header__logo'>
                    <img src={logo} alt="ぶーてんロゴ" />
                </Link>
            </div>
        </header>
    );
}