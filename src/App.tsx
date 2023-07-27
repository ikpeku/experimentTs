import { useEffect, useState } from 'react';
import './App.css';
import { Button, Container, Counter, Greet, Header, Input, Nav, Person, PersonLIst, Status } from './component';
import { AuthUser } from './Context/AuthUser';
import { Box } from './Context/Box';
import { ThemeContext } from './Context/ThemeContext';
import { UserContextProvider } from './Context/UserContext';
import { User } from './state';
import { Reminder, ReminderProp } from './fetch/FetchData';
import { General } from './component/General';


function App() {
  const [login, setLogin] = useState(false)
  const [data, setData] = useState<ReminderProp[]>([])



  useEffect(() => {
    let reminder = new Reminder()
    const fetchData = async () => {
      const response = await reminder.getData()
      setData(response)
    }

    fetchData()
  }, [])



  const personName = {
    firstName: "flow",
    lastName: "grin"
  }

  const names = [
    {
      firstName: "flow",
      lastName: "grin"
    },
    {
      firstName: "folake",
      lastName: "grin"
    }, {
      firstName: "flow",
      lastName: "grin"
    }, {
      firstName: "flow",
      lastName: "grin"
    },
  ]


  const removeReminder = (id: number) => {
    setData((prev) => {
      return prev.filter(data => data.id !== id)
    })
  }



  const searchReminder = async (event: string) => {
    let searchItem = event
    let Data = [...data]
    // console.log(searchItem)
    if (searchItem.slice() === "") {
      console.log("nothing to log")
      return setData(data)
    } else {
      setData(Data.filter(data => data.title.includes(searchItem)))
    }

    // let reminder = new Reminder()
    // const res = await reminder.searchData(event)
    // setData(res)

  }

  const AddReminder = async (title: string) => {
    // let reminder = new Reminder()
    // const response = await reminder.addData(title)
    setData([{ title: title, id: Math.random() }, ...data])

  }


  return (
    <div style={{ textAlign: "center" }} className="App">
      <Nav >
        <Header>Hello World</Header>
        <User />
      </Nav>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Greet name='Flow' course={"typescript react"} messageCount={20} isLoggin={login} />

        <div>
          <button style={{ margin: 40 }} onClick={() => setLogin((prev) => !prev)}>Login</button>
        </div>
      </div>
      <Person name={personName} />
      <PersonLIst name={names} />
      <Status status={null} />
      <Button handleClick={(event) => console.log(event)} />
      <Input placeholder="enter name" />
      <Container styles={{ color: "green", borderWidth: 4 }} />
      <Counter />
      <ThemeContext>
        <Box />
      </ThemeContext>
      <UserContextProvider>
        <AuthUser />
      </UserContextProvider>
      <General data={data} removeReminder={removeReminder} searchReminder={searchReminder} AddReminder={AddReminder} />


    </div>
  );
}

export default App;
