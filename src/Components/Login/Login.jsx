import React from 'react';
import './Login.css';
import logo from '../../assets/Linkedin-logo-png.png';
import { auth } from '../../firebase';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../features/counter/userSlice';

export default function Login() {
  let dispatch = useDispatch();

  const Register = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, loginFormik.values.Email, loginFormik.values.password);

      await updateProfile(auth.currentUser, {
        displayName: loginFormik.values.name,
        photoURL: loginFormik.values.profilePic,
      });

      dispatch(login({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: loginFormik.values.name,
        photoURL: loginFormik.values.profilePic,
      }));
    } catch (error) {
      console.error(error);
    }
  }

  const loginToApp = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginFormik.values.Email, loginFormik.values.password);

      dispatch(login({
        email: userCredential.user.email,
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
        photoURL: userCredential.user.photoURL,
      }));
    } catch (error) {
      console.error(error);
    }
  }

  let validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    Email: yup.string().required("Email is required").email(),
    password: yup.string().required("Password is required"),
    profilePic: yup.string(),
  });

  let loginFormik = useFormik({
    initialValues: {
      name: "",
      Email: "",
      password: "",
      profilePic: "",
    },
    validationSchema,
    onSubmit: loginToApp,
  });

  return (
    <div className='login'>
      <img src={logo} alt="" />

      <form onSubmit={loginFormik.handleSubmit}>
        <input type="text" onChange={loginFormik.handleChange} placeholder='Full name (required if registering)' name="name" id="name" />
        {loginFormik.errors.name ? <p className='alert'>{loginFormik.errors.name}</p> : ""}
        <input type="text" onChange={loginFormik.handleChange} placeholder='Profile Pic URL (Optional)' name="profilePic" id="profilePic" />
        {loginFormik.errors.profilePic ? <p className='alert'>{loginFormik.errors.profilePic}</p> : ""}
        <input type="email" onChange={loginFormik.handleChange} placeholder='Email' name="Email" id="Email" />
        {loginFormik.errors.Email ? <p className='alert'>{loginFormik.errors.Email}</p> : ""}
        <input type="password" onChange={loginFormik.handleChange} placeholder='Password' name="password" id="password" />
        {loginFormik.errors.password ? <p className='alert'>{loginFormik.errors.password}</p> : ""}
        <button disabled={!(loginFormik.isValid && loginFormik.dirty)} type='submit'>Sign In</button>
      </form>
      <p>Not a member?  <span className='login_register' onClick={Register}>Register NOW</span></p>
    </div>
  );
}
