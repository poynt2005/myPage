import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArchway } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

const typeMap = {
  github: faGithub,
  website: faArchway,
  facebook: faFacebook,
  ig: faInstagram
}

const styles = {
  contactIcon: {
    display: 'inline-block',
    margin: '10px 3px',
    fontSize: '1.3rem'
  }

}

var genComp = (url, type) => {
  var value = (type == 'email')
    ? (
      <a style={styles.contactIcon} href={`mailto:${url}`} title={type}>
        <FontAwesomeIcon icon={faEnvelope} color="#f3f2ff"/>
      </a>
    )
    : (
      <a style={styles.contactIcon} href={url} rel="noopener" target="_blank" title={type}>
        <FontAwesomeIcon icon={typeMap[type]} color="#f3f2ff"/>
      </a>
    )
  return value
}

export  default function(props){
  var { email, github, website, facebook, ig } = props.contacts

  return (
    <div>
      <div>聯絡方式</div>
      { genComp(email, 'email') }
      { genComp(github, 'github') }
      { genComp(website, 'website') }
      { genComp(facebook, 'facebook') }
      { genComp(ig, 'ig') }
    </div>
  )
}
