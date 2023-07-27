import React from 'react'

type ButtonProps = {
    handleClick: (React.MouseEventHandler<HTMLButtonElement>)
}

export const Button: React.FC<ButtonProps> = ({handleClick}) => {

  return (
    <button onClick={handleClick}>Submit</button>
  )
}
