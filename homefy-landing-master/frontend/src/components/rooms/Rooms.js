import './rooms.css'
import { AiOutlinePlus } from 'react-icons/ai'
import RoomCard from '../ui/RoomCard.js'
import RoomsData from './RoomsData'

console.log('provjera')
const Rooms = ({RoomsData}) => {
  return (
    <div id='about' className='text1'>
      <h1 className='roomT'>Your Rooms</h1>
      <div id="rooms">
        <RoomCard roomName={'Living Room'}/>
        <RoomCard roomName={'Bed Room'}/>
        <RoomCard roomName={'Bathroom'}/>
        <RoomCard roomName={'Guestroom'}/>
        <RoomCard roomName={'Kitchen'}/>
        <RoomCard roomName={'Attic'}/>
        <RoomCard roomName={'Basement'}/>
        <RoomCard roomName={'Bed Room'}/>
        
      </div>
    </div>
  )
}

export default Rooms