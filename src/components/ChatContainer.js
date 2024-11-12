import React,{useEffect,useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateName } from '../utils/helper';
import { nameList, quotes } from '../utils/nameandquote';

const ChatContainer = () => {
    const dispatch=useDispatch()
    const [liveMessage,setliveMessage]=useState('')
    const chatLiveMessage=useSelector(store=>store.chat.message)
    const handleClick=()=>{
        dispatch(addMessage({name:"Rashika",message:liveMessage}))
        setliveMessage("")
    }
    useEffect(() => {
        const t= setInterval(()=>{
            dispatch(addMessage({name:generateName(nameList),message:generateName(quotes)}))
        },2000)
        return () => {
            clearInterval(t)
        };
    }, []);

  return (
    <div>
    <div className='border-t border-gray-600 h-96  overflow-y-auto no-scrollbar flex flex-col-reverse py-2 my-2'>
        {
            chatLiveMessage.map((m,index)=>(
                <ChatMessage key={index} name={m.name} message={m.message}/>
            ))
        }
      </div>
      <div >
        <form className='flex justify-between' onSubmit={(e)=>{e.preventDefault();handleClick();}}>
        <input value={liveMessage} onChange={(e)=>setliveMessage(e.target.value)} className='w-4/5 text-black px-2' type="text"/>
        <button className=' bg-red-600 px-4 py-1 ml-1'>Send</button>
        </form>
      </div>
      </div>
  )
}

export default ChatContainer