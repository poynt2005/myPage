import React from 'react'

const styles = {
  pages: {
    width: '5px',
    height: '5px',
    margin: '10px 0',
    borderColor: '#001f4d',
    borderStyle: 'solid',
    borderRadius: '50px',
    cursor: 'pointer'
  },
  pageActive: {
    backgroundColor: '#001f4d'
  }
}

export default function(props){
  return (
    <span onClick={props.clickHandler}
      style={props.isActive ? {...styles.pages, ...styles.pageActive} : styles.pages}
      data-page={props.page}
    >
    </span>
  )
}
