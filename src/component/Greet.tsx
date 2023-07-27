import React from 'react'


interface GreetProps {
    name: string,
    course: string,
    messageCount: number,
    isLoggin: boolean
}


export const Greet = (props: GreetProps) => {
  return (
    <div>
        {props.isLoggin ? 
    <>
    <h1>Welcome {props.name}! this is the begining of your {props.course} journey</h1>
        <p>you have {props.messageCount} unread message</p>
    </> : 
    <h1>Welcome guest, login lets dance</h1>   
    }
    </div>
  )
}
