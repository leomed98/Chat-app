import React from 'react'

const Message = () => {
  return (
    <div className=' chat chat-end'>
    <div className='chat-image avatar'>

     <div className='w-10 rounded full'>
    <img 
        alt="Tailwind CSS chat bubble component"
        src={"https://cdn1.iconfinder.com/data/icons/material-core/20/account-circle-512.png"
    }
  />
     </div>
    </div>
    <div className={'chat-bubble text-white bg-blue-400 '}>Hi Whats up? </div>
    <div className='chat-footer opacity-40 text-xs flex gap-1 items-center'> 12:42</div>
    
    </div>
  )
}

export default Message