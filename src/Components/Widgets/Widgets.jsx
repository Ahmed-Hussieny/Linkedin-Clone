import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecord from '@material-ui/icons/FiberManualRecord'
function Widgets() {
    const newArticle = (heading , subtitle)=>(
        <div className="widgits_article">
            <div className="widget_Articleleft">
                <FiberManualRecord className='MultiSvgIcon-root'/>

            </div>
            <div className="widget_Articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>
        </div>
    )
  return (
    <div className='widgets'>
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>
      {newArticle("Ahmed Hussieny","Top news - 9099 readers")}
      {newArticle("Ahmed Hussieny","Top news - 9099 readers")}
      {newArticle("Ahmed Hussieny","Top news - 9099 readers")}
      {newArticle("Ahmed Hussieny","Top news - 9099 readers")}
      {newArticle("Ahmed Hussieny","Top news - 9099 readers")}
      {newArticle("Ahmed Hussieny","Top news - 9099 readers")}
    </div>
  )
}

export default Widgets
