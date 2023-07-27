import React, { FC } from 'react'


type ContainerProps = {
    styles: React.CSSProperties
}
export const Container: FC<ContainerProps> = ({styles}) => {
  return (
    <div style={styles}>Testing the styles props</div>
  )
}
