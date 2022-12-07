import axios from 'axios';
import React,{useState,useEffect, useReducer} from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

// //////URL
const URL ='https://kinkycoilygirls4.onrender.com/api'
// /////  



// 
import { REGISTER,ERROR,CLOSE_MODAL,NAVIGATE } from '../controls/Controls';
// 

// START reducer
const reducer = (state,action)=>{
  if(action.type===REGISTER){
    // registration code
    const Register = async()=>{
     try {
      await axios.post(`${URL}/auth/register`, action.payload).then((response)=>{
        console.log(response.data)
      return {...state,allowed:true}
      }).catch((err)=>console.log(err))
     } catch (error) {
      console.log(error)
     }
    }
    Register()
    

    return{...state,modal:true,modalContent:'Registering....',userInfo:action.payload}

  }
  if(action.type===ERROR){
    return{...state,modal:true,modalContent:'Please fill all fields'}
  }
  if(action.type===CLOSE_MODAL){
    return{...state,modal:false}
  }
throw new Error()
}
// END reducer



const defaultState ={
  allowed:false,
  userInfo:'',
  modal:false,
  modalContent:'',
  enable:false,
}

const Register = () => {
  let navigate = useNavigate()

  const [state,dispatch] = useReducer(reducer,defaultState)
  const [email,setEmail] = useState('');
  const [firstName,setFirstName] = useState('');
  const [password,setPassword] = useState('');


  

  // sweetjs snippet goes in here
useEffect(()=>{
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
title: 'Registration is free'
})


},[])


// submission handling
  const HandleSubmit = async (e) =>{
    e.preventDefault();
    if(email&&firstName&&password){
      dispatch({type:REGISTER,payload:{email,password,firstName}})
      
  setTimeout(() => {
    navigate('/login')
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
  // ////END submission handling
  

    return (
        <div className='auth modal'>
          <div className="loginmodal cc">
           {state.modal&& <p className='alert'>{state.modalContent}</p>}
            <p className='controls'>
                <p>Create your account</p>
            </p>
            <h6>Registration is easy.</h6>
            <form onSubmit={HandleSubmit}>
                <input type="email" value={email} placeholder='Email address' onChange={e=>setEmail(e.target.value)}/>
                <input type="text" value={firstName} placeholder='First name' onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="password" value={password} placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
                
                 {/* <input type="submit" className='disabled' disabled value='Register' /> */}
                 <input type="submit"  value='Register'   onClick={HandleSubmit} />
               
               
            </form>
            <p className="terms">
            By clicking Sign in you are to our terms and conditions Lorem ipsum dolor sit amet consecte Lorem ipsum dolor sit amet. tur..
            </p>
          </div>
        </div>
      )
}

export default Register



































































// import axios from 'axios';
// import React,{useState,useEffect} from 'react'
// import Swal from 'sweetalert2'

// // //////URL
// const URL ='http://localhost:5500/api'
// // /////

// const register = () => {

//   const [registering,setRegistering] = useState(false)
//   const [allowed,setAllowed] = useState(false)
//   const [email,setEmail] = useState('');
//   const [firstName,setFirstName] = useState('');
//   const [password,setPassword] = useState('');


  

//   // sweetjs snippet goes in here
// useEffect(()=>{
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
// title: 'Registration is free'
// })


// },[])

// // submission handling
//   const HandleSubmit = async (e) =>{
//     console.log(email,firstName,password)
//     e.preventDefault();
//     if(email,password,firstName){
//       setRegistering(true)
//     }
//     try {
      
//       await axios.post(`${URL}/auth/register`, {
//         email:email,
//         firstName:firstName,
//         password:password
//       })
//       .then(function (response) {
//         console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//       setRegistering(false)
//     } catch (error) {
      
//     }
//   }
//   useEffect(()=>{
//     if(email && firstName && password){
//       setAllowed(true)
//     }
//   },[email,password,firstName])

//     return (
//         <div className='auth modal'>
//           <div className="loginmodal cc">
//             {/* <p className='alert'>An error has occurred, please try again!</p> */}
//             <p className='controls'>
//                 <p>Create your account</p>
//                 {/* <button className="btn">Register</button> */}
//             </p>
//             <h6>Registration is easy.</h6>
//             <form onSubmit={HandleSubmit}>
//                 <input type="email" value={email} placeholder='Email address' onChange={e=>setEmail(e.target.value)}/>
//                 <input type="text" value={firstName} placeholder='First name' onChange={(e)=>setFirstName(e.target.value)}/>
//                 <input type="password" value={password} placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
//                 {!allowed && <input type="submit" className='disabled' disabled value='Register' />}
//                 {registering && <input type="submit" className='disabled' disabled value='Register' />}
//                 {allowed && <input type="submit" value='Register' onClick={HandleSubmit} />}
//             </form>
//             <p className="terms">
//             By clicking Sign in you are to our terms and conditions Lorem ipsum dolor sit amet consecte Lorem ipsum dolor sit amet. tur..
//             </p>
//           </div>
//         </div>
//       )
// }

// export default register
