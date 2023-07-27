import { useReducer } from 'react'


type ReducerStateProps = {
    count: number
}

type ReducerActionPayloadProps = {
    type: "incrementbytwo" | "decrementbytwo"
    payload: number

}


type ReducerActionNoPayloadProps = {
    type: "increment" | "decrement" | "reset"

}

type ReducerActionProps = ReducerActionPayloadProps | ReducerActionNoPayloadProps


const reducer = (state: ReducerStateProps, action: ReducerActionProps) => {
    switch (action.type) {
        case "increment":
            return { count: state.count++ }

        case "decrement":
            return { count: state.count-- }

        case "incrementbytwo":
            return { count: state.count + (action.payload) }

        case "decrementbytwo":
            return { count: state.count - action.payload }
        case "reset":
            return initialState

        default:
            return state
    }

}

const initialState = {
    count: 0
}


export const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>Increase</button>
            <button disabled={state.count === 0} onClick={() => dispatch({ type: "decrement" })}>decrease</button>
            <button onClick={() => dispatch({ type: "incrementbytwo", payload: 2 })}>Increase by 2</button>
            <button disabled={state.count === 0} onClick={() => dispatch({ type: "decrementbytwo", payload: 2 })}>decrease by 2</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    )
}
