import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

// //////URL
const URL ='https://kinkycoilygirls4.onrender.com/api'
// /////  

import { LOGIN,ERROR,CLOSE_MODAL } from '../controls/Controls';
// 

// START reducer
const reducer = (state,action)=>{
  if(action.type===LOGIN){
    console.log(action.payload)

    // ///WRITE YOUR CODES IN HERE
    const Login = async ()=>{
      try {
        await axios.post(`${URL}/auth/login`, action.payload).then((response)=>{
          console.log(response.data)
          localStorage.setItem("userInfo",`${JSON.stringify(response.data)}`)
        return {...state,allowed:true,userInfo:response.data}
        }).catch((err)=>console.log(err))
       } catch (error) {
        console.log(error)
       }
    }
    Login()

    return{...state,modal:true,modalContent:'Logging....',userInfo:action.payload}
  }
  if(action.type===ERROR){
    return{...state,modal:true,modalContent:'Please fill all fields'}
  }
  if(action.type===CLOSE_MODAL){
    return{...state,modal:false}
  }
// throw new Error()
return{...state}
}
// END reducer



const defaultState ={
  userInfo:[],
  modal:false,
  modalContent:'Welcome to Kinkycoilygirls',
  enable:false,
}

const Login = () => {
  let navigate = useNavigate()

  

useEffect(()=>{
  // sweetjs snippet goes in here
const Toast = Swal.mixin({
toast: true,
position: 'top-end',
showConfirmButton: false,
timer: 3000,
timerProgressBar: true,
didOpen: (toast) => {
  toast.addEventListener('mouseenter', Swal.stopTimer)
  toast.addEventListener('mouseleave', Swal.resumeTimer)
}
})

Toast.fire({
icon: 'success',
title: 'Proceed to login'
})


},[])
  const [state,dispatch] = useReducer(reducer,defaultState)
  const[data,setData] = useState([])
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('')

    const SubmitHandle = async (event)=>{
      event.preventDefault();
      if(email&&password){
      dispatch({type:LOGIN,payload:{email,password}})
      setTimeout(() => {
               navigate('/')
        
      }, 5000);
      }else{
        dispatch({type:ERROR})
      }
      const closeModal=()=>{
        dispatch({type:CLOSE_MODAL})
      }
      setTimeout(() => {
        closeModal()
      }, 3000);
    }



    
  return (
    <div className='auth modal'>
      <div className="loginmodal cc">
        <p className='alert'>{state.modalContent}</p>
        <p className='controls'>
            <p>Sign in</p>
            <Link className='btn navtoreg' to='/register'>Register</Link>
        </p>
        <form onSubmit={SubmitHandle}>
            <input type="email" placeholder='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="submit" value='Sign in' onClick={SubmitHandle} />
        </form>
        <p className="terms">
        By clicking Sign in you are to our terms and conditions Lorem ipsum dolor sit amet consecte Lorem ipsum dolor sit amet. tur..
        </p>
      </div>
    </div>
  )
}

export default Login













































































// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import Swal from 'sweetalert2'

// // //////URL
// const URL ='http://localhost:5500/api'
// // /////

// const Login = () => {


  

// useEffect(()=>{
//   // sweetjs snippet goes in here
// const Toast = Swal.mixin({
// toast: true,
// position: 'top-end',
// showConfirmButton: false,
// timer: 3000,
// timerProgressBar: true,
// didOpen: (toast) => {
//   toast.addEventListener('mouseenter', Swal.stopTimer)
//   toast.addEventListener('mouseleave', Swal.resumeTimer)
// }
// })

// Toast.fire({
// icon: 'success',
// title: 'Proceed to login'
// })


// },[])


//   const[data,setData] = useState([])
//   const[email,setEmail] = useState('');
//   const[password,setPassword] = useState('')

//     const SubmitHandle = async (event)=>{
//       event.preventDefault();
//       console.log(email,password)

//       try {
      
//         await axios.post(`${URL}/auth/login`, {
//           email:email,
//           password:password,
//         })
//         .then(function (response) {
//           // console.log(response.data.message);
//           setData(response.data)
//           console.log(data)
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
//         // setRegistering(false)
//       } catch (error) {
//         console.log(error)
//       }
      
//     }
    
//   return (
//     <div className='auth modal'>
//       <div className="loginmodal cc">
//         <p className='alert'>Welcome to kinkycoilygirls</p>
//         <p className='controls'>
//             <p>Sign in</p>
//             <button className="btn">Register</button>
//         </p>
//         <form onSubmit={SubmitHandle}>
//             <input type="email" placeholder='Email address' value={email} onChange={(e)=>setEmail(e.target.value)}/>
//             <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
//             <input type="submit" value='Sign in' onClick={SubmitHandle} />
//         </form>
//         <p className="terms">
//         By clicking Sign in you are to our terms and conditions Lorem ipsum dolor sit amet consecte Lorem ipsum dolor sit amet. tur..
//         </p>
//         {!data && <p className='auth alert'>Sign in successfully</p>}
//       </div>
//     </div>
//   )
// }

// export default Login
