import React, { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Components/Feed/Feed';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Components/Login/Login';
import { auth } from './firebase';
import { logOut, login } from './features/counter/userSlice';
import Widgets from './Components/Widgets/Widgets';


function App() {
  const dipa = useDispatch();
  let {user}=useSelector((x)=>x.UserData)
  console.log(user)

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        // logerd in 
        dipa(login({
          email: user.email,
          uid: user.uid,
          displayName: user.name,
          photoURL: user.profilePic,
        }))
      }else{
        // log out
        dipa(logOut());
      }
    })
  },[])
  return (
    <div className="app">



      {!user?<Login/>:

      <>
        <Header/>
    

    <div className='app_body'> 

   <Sidebar/>
 

    <Feed/>

    <Widgets/>

    </div>
    </>
      }

    

      

 
    </div>
  );
}

export default App;
