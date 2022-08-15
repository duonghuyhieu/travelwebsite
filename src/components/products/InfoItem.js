import React from 'react'
import './InfoItem.css'

function InfoItem(props) {
  return (
    <li className='infoitem'>
        <i className={props.src}></i>
        <label>{props.label}</label>
        <p>{props.info}</p>
    </li>
  )
}

export default InfoItem