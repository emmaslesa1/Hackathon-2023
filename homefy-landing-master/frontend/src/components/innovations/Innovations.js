import './innovations.css'
import {AiFillFire, AiFillThunderbolt} from 'react-icons/ai'
import {GiGasStove} from 'react-icons/gi'
import {BsChevronDoubleDown} from 'react-icons/bs'

const Innovations = () => {

    return ( 
        <div id="innovation" className="innovations">
            <div className='innovation'>
                <h1 className='innovationsT'>Innovations</h1>
            <div className="par">
            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
            </div>
            </div>

            <div id="inovacije">
                <div className="innovation-card">
                <AiFillThunderbolt className='ikone' />
                  <h2 className='TS'>
                    Thunderstorm
                  </h2>
                </div>
                <div className="innovation-card">
                    <GiGasStove className='ikone' />
                  <h2 className='T'>
                    Toxins
                  </h2>
                </div>
                <div className="innovation-card">
                    <AiFillFire className='ikone' />
                  <h2 className='ET'>
                    Extreme Temperature
                  </h2>
                </div>
              
            </div>
            <div className='subm'>

            <BsChevronDoubleDown />
            </div>
        </div>
     );
}
 
export default Innovations;