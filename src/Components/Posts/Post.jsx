import React ,{forwardRef} from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import  ThumbUpAltOutlined  from '@material-ui/icons/ThumbUpAltOutlined';
import  ChatOutlined  from '@material-ui/icons/ChatOutlined';
import InputOption from '../Feed/InputOption/InputOption';
import  ShareOutLined  from '@material-ui/icons/ShareOutlined';
import  sendOutLined from '@material-ui/icons/SendOutlined';
const Post=forwardRef(({name , discription ,message , photoUrl},ref) => {
  return (
    <div ref={ref} className='post'>
        <div className="post_header">
            <Avatar src={photoUrl}>{name[0]}</Avatar>
            <div className="post_info">
                <h2>{name}</h2>
                <p>{discription}</p>
            </div>
        </div>

        <div className="post_body">
            <p>{message}</p>
        </div>

        <div className="post_buttons">
            <InputOption Icon={ThumbUpAltOutlined} title="Like" color="grey"/>
        
            <InputOption Icon={ChatOutlined} title="Comment" color="grey"/>
   
            <InputOption Icon={ShareOutLined} title="Share" color="grey"/>
   
            <InputOption Icon={sendOutLined} title="Send" color="grey"/>
        </div>
    </div>
  )
})

export default Post
