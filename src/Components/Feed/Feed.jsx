import React, { useEffect, useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import Subscriptions from '@material-ui/icons/Subscriptions';
import EventNote from '@material-ui/icons/EventNote';
import CalendarViewDay from '@material-ui/icons/CalendarViewDay';
import Post from '../Posts/Post';
import { db, auth } from '../../firebase';
import FlipMove from 'react-flip-move' 
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { collection, addDoc, serverTimestamp, onSnapshot, orderBy, query } from 'firebase/firestore'; // Include 'query' in the import
import { useSelector } from 'react-redux';

function Feed() {
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);
  const {user}=useSelector((x)=>x.UserData)
  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp',"desc")); // Create a query with orderBy
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    
    return () => {
      // Unsubscribe the snapshot listener when the component unmounts
      unsubscribe();
    };
  }, []);
  const sendPost = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        name: user.displayName,
        description: "user.email",
        message: input,
        photoUrl: user.photoURL || "" ,
        timestamp: serverTimestamp(),
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }

    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
              name=''
              id=''
            />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>

        <div className='feed_inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#7885f9' />
          <InputOption Icon={Subscriptions} title='Video' color='#E7A33E' />
          <InputOption Icon={EventNote} title='Event' color='#C0CBCD' />
          <InputOption
            Icon={CalendarViewDay}
            title='Write article'
            color='#7FC15E'
          />
        </div>
      </div>

      {/* post */}
      <FlipMove>
         {posts.map((el) => (
        <Post
          key={el.id}
          name={el.data.name}
          discription={el.data.description}
          message={el.data.message}
        />
      ))}
      </FlipMove>
     
    </div>
  );
}

export default Feed;
