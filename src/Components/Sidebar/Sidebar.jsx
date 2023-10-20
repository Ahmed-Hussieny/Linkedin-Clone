import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import img from '../../assets/Images/statBack.jpg'
import { useSelector } from 'react-redux'
function Sidebar() {

  const {user}=useSelector((x)=>x.UserData)
  console.log(user)
    const recentItem = (topic)=>{
      return  <div className="Sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    }
  return (
    <div className='Sidebar'>
     <div className="sidebar__top">
        <img src={img} alt="" />
        <Avatar src={user.photoURL} className='Sidebar_avatar'>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
     </div>

     <div className="Sidebar_stats">
        <div className="Sidebar_stat">
            <p>Who viewed you</p>
            <p className="sidebar_statNumber">2.543</p>
        </div>
        <div className="Sidebar_stat">
            <p>viewes on Post</p>
            <p className="sidebar_statNumber">2.543</p>
        </div>

     </div>

     <div className="Sidebar_botton">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('SoftwareEngineering')}
        {recentItem('design')}
        {recentItem('NextJS')}
        {recentItem('Java')}
     </div>
    </div>
  )
}

export default Sidebar
