interface IPersonLIst {
    firstName: string,
    lastName: string
}

type PersonLIstProps = {
    name: IPersonLIst[]
}


export function PersonLIst({name}: PersonLIstProps) {
  return (
    <div>
        <h1>List of lecturers</h1>
        <ul>
            {
                name.map((name, index) =>  <li key={index}>{name.firstName} {name.lastName}</li>)
            }
        </ul>
    </div>
  )
}
