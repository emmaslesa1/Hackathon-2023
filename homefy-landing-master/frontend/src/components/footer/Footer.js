import './footer.css'
import {AiOutlineMail, AiOutlineHome} from "react-icons/ai";


const Footer = () => {
    return ( 
    <footer>
        <div className='socialLinks'>
            <div className='emailovi'>
                <p className='email'><AiOutlineMail /> amna.macic@outlook.com</p>
                <p className='email'><AiOutlineMail /> delicdenancs@gmail.com</p>
                <p className='email'><AiOutlineMail /> eminamaslesa97@gmail.com</p>
                <p className='email'><AiOutlineMail /> huseinhasan0503@gmail.com</p> 
            </div>
            <AiOutlineHome className='ikona' />
            <div className='hak'>
                <h1 className='tim'>Web app by team dotNet</h1>
                <p className='hakaton'>Hackathon 2023</p>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;