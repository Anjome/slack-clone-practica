import React from 'react'
import ChannelItem from './ChannelItem'

const ChannelList = ({canales}) => {
    return (
    canales.map ((canal) =>{
        return(
            <ChannelItem key={canal.id} nombre={canal.nombre}></ChannelItem>
        )
    })
      )
}


export default ChannelList