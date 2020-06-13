import React from 'react'
import Pagenumber from './pagenumber'


const styles = {
  width: '2%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

export default function(props){

  var { totalPage, activePage } = props;


  return (
    <div style={styles}>
    {
      (new Array(parseInt(totalPage))).fill(1).map((e, i) =>　
        <Pagenumber key={e+i} page={e+i} isActive={parseInt(activePage) == (e+i) ? true : false} clickHandler={props.clickHandler} />
      )
    }
    </div>
  )
}
