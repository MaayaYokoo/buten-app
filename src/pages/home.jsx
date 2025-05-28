import './../assets/styles/top.css'
import movingPig from './../assets/images/moving_pig.webp'
import { InputText } from './../components/inputText';
import { Header } from './../components/header';

export const Home = () => {

    return (
        <div>
            <Header />
            <InputText />
            <div className='moving-pig'>
                <img src={movingPig} alt="" />
            </div>
        </div>
    );
}

