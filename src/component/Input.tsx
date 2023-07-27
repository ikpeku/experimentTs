import { ChangeEvent, FC, useState } from 'react'

type InputProps = {
  placeholder: string

}

export const Input: FC<InputProps> = ({ placeholder }) => {
  const [fullName, setFullName] = useState("")


  const handleonChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value)

  }

  console.log(fullName)




  return (
    <input value={fullName} placeholder={placeholder} onChange={handleonChange} />
  )
}
