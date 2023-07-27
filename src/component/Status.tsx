

type StatusProps = {
    status: "loading" | "success" | "error" | null 
}


export const Status = ({status}: StatusProps) => {

    let message

   if(status === "loading")
        message = "loading... "
    if(status === "success")
        message = "Data fetch sucessfull"

    if(status === "error")
        message = "error fetching data"
    
        
       
  return (
    <>
        { message && <h2>{message}</h2>}
       
    </>
  )
}
