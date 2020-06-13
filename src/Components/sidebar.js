import React, { useEffect } from 'react'
import styles from './sidebar.module.css'

import Avatar from './avatar'
import Contact from './contact'

import contacts from './datas/contact.json'


export default function(props){
  return (
    <div className={styles.sidebar}>
      <div className={styles.title}> {props.sidebarTitle} </div>
      <Avatar />
      <div className={styles.inner}> {props.children} </div>
      <div>
        <Contact contacts={contacts} />
      </div>
    </div>
  )
}
