import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './maincontent.module.css'

export default function(props){

  return (
      <div key={props.pageNum} className={`${styles['main-content']} ${styles['fadeInAni']}`}>
        <div style={{textAlign: 'left'}}>
          {props.children}
        </div>
      </div>
  )
}
