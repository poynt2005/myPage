import React from 'react'
import Avatarpic from './pictures/avatar.png'

const styles = {
  maxWidth: '70%',
  position: 'relative',
  borderStyle: 'solid',
  margin: '10px 0',
  borderColor: '#254d85',
}

export default function(props){
  return (
    <>
      <img style={styles} src={Avatarpic} alt="照片"></img>
    </>
  )
}
