import './header.css'
import slika from './assets/house.png'
import { Link } from 'react-router-dom';

const Header = () => {

    return ( 
        <div id='/' className="parent">
            <div className="text">
                <h1 className='homeT'>
                HomeFy
                </h1>
                <p className='t'>A safe home shouldn't be a luxury.</p>
                <Link to='/login' className='contact'>Try HomeFy</Link>
                </div>
            <div className="picture">
            <img src={slika} />
            </div>
        </div>
     );
}
 
export default Header;