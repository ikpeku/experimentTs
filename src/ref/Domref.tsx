import { useRef, useEffect } from 'react'

export const Domref = () => {
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}
