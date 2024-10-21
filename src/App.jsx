import React from 'react'
import ChannelList from './Components/ChannelList/ChannelList'
import ChatList from './Components/ChatList/ChatList'
import ChannelItem from './Components/ChannelList/ChannelItem'


function App() {
  
  const mensajes =[
    {
      hour: '11:06 PM',
      author: 'Pepe Suarez',
      text: 'Hola a todos',
      id: 1,
    },
    {
      hour: '11:05 PM',
      author: 'Martina',
      text: 'Que tal?',
      id: 2,
    },
    {
      hour: '11:17 aM',
      author: 'Juancito',
      text: 'Muy mal, no se nada de HTML para el examen',
      id: 3
    }
]
const canales =[
  {
    id:1,
    nombre: 'Consultas',
  },
  {
    id:2,
    nombre:'General',
  },
  {
    id:3,
    nombre:'Tareas',
  }
]




return (
   <>
<h1>Hola a todo el publico</h1>
<h1>Canales importantes</h1>
<ChannelList canales={canales} titulo={'Canales Importantes'}></ChannelList>

<h1>Mensajes Generales</h1>
<ChatList mensajes={mensajes} titulo={'Mensajes generales'}></ChatList>
</>

    )
}

export default App
