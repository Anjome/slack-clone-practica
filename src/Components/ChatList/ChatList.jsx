import React from 'react'
import ChatItem from '../ChatItem/ChatItem'

 const ChatList = ({mensajes}) => {
    const handleSubmitMessage =(evento) =>{
        evento.preventDefault ()
        const formulario = new FormData (evento.target)
        console.log(formulario.get('mensaje'))
    }

    return (
        <div>
            <div className='mensajes'>
            {
mensajes.map((mensaje) =>{
    return (
<ChatItem key={mensaje.id} author={mensaje.author} hour={mensaje.hour} text={mensaje.text}></ChatItem>
)
})
            }
        </div>
        <form onSubmit ={handleSubmitMessage}>
            <input placeholder='Escriba algo...' name= 'mensaje'></input>
            <button type = 'submit'>Enviar mensaje</button>
        </form>  

        <form onSubmit ={handleSubmitMessage}>
            <input placeholder='Escriba algo...' name= 'mensaje'></input>
            <button type = 'submit'>Enviar mensaje</button>
        </form>  
        
      </div>


            

    )
}



export default ChatList
