import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const roomCard = (props) => {
  return (
    <div className="room-card">
          <h2>
            {props.roomName}
          </h2>
        </div>
  )
}

export default roomCard