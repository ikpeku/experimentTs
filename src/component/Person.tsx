
interface PersonProps {
    
    name: {
        firstName: string,
        lastName: string

    }
}


export const Person = ({name}: PersonProps) => {
  return (
    <div>
        <h1>{name.firstName} {name.lastName}</h1>
    </div>
  )
}

