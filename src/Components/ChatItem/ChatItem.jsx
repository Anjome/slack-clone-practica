import React from "react"

const ChatItem = (props) =>{
    return(
        <div>
            <span>{props.author} {props.hour}</span>
            <p>{props.text}</p>
        </div>
    )
}

export default ChatItem