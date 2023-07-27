import React, { useContext } from 'react'
import { themeContextProvider } from './ThemeContext'

export const Box = () => {
    const color = useContext(themeContextProvider)
    return (
        <div style={{ color: color.primary.main, border: `2px solid ${color.secondary.main}` }}>Box</div>
    )
}
