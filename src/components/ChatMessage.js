import React from 'react'
import user_icon from "../assets/chat-user-icon.png"

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center '>
        <img className="w-11 h-10 inline border border-green-700 shadow-lg rounded-full mr-3 my-2" alt='chat-icon' src={user_icon}/>
       <div className=''>
        <span className='font-semibold text-sm '>{name}</span>
        <span className='ml-2 text-xs'>{message}</span>
        </div>
    </div>

  )
}

export default ChatMessage