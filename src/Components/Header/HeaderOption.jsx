import React from 'react'
import './HeaderOption.css'
import {Avatar} from '@mui/material'
import { useSelector } from 'react-redux'
function HeaderOption({avatar ,Icon ,title,onClick}) {
  const {user} = useSelector(x=>x.UserData)
  return (
    <div onClick={onClick} className='headerOption'>
        {Icon && <Icon className='headerOption_Icon'/> }
        {avatar && <Avatar  className='headerOption_Icon' src={user?.photoURL}>
        {user?.email[0]}
          </Avatar>}
      <h3 className='headerOption_Title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
