import React, { FC, useState } from 'react'
import { ReminderProp } from '../fetch/FetchData'

interface GeneralProps {
    data: ReminderProp[]
    removeReminder: (id: number) => void
    searchReminder: (event: string) => void
    AddReminder: (title: string) => void

}


export const General: FC<GeneralProps> = ({ data, removeReminder, searchReminder, AddReminder }) => {
    const [addedData, setReminder] = useState<string>("")


    const HandleAddReminder = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        AddReminder(addedData)
        setReminder("")
    }



    return (
        <div>
            <input type="text" placeholder='search reminder' onChange={(event) => searchReminder(event.target.value)} />

            <form onSubmit={HandleAddReminder}>
                <input value={addedData} type="text" placeholder='search reminder' onChange={(event) => setReminder(event.target.value)} />
                <button>Add Reminder</button>
            </form>

            {data.map(data => <li key={data.id} style={{ display: "flex", gap: 20 }}>

                <h2>{data.title} </h2>
                <button onClick={() => removeReminder(data.id)}>delete</button>

            </li>)}
        </div>
    )
}
