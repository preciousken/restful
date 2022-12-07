import React, { useState,useEffect } from 'react'
import Swal from 'sweetalert2'


// importing components
import Empty from '../assets/components/cart/Empty'
import FilledCart from '../assets/components/cart/FilledCart'
import SmallFooter from '../assets/components/footer/SmallFooter'
import Header from '../assets/components/Header'
import Login from '../assets/Auth.jsx/LoginComponent'
import Register from '../assets/Auth.jsx/RegisterComponent'

const Cart = () => {
  const [cartCount, setCartCount] = useState([])

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem("userInfo"))){
     const fetchCart= async ()=>{
       await axios.get(`${URL}/user/one/${JSON.parse(localStorage.getItem("userInfo"))._id}`).then((res)=>{
         // console.log(res.data.cart.length)
         setCartCount(res.data.cart.length)
       }).catch((err)=>console.log(err))
     }
     fetchCart()
    }
   },[])

   console.log(cartCount)
  return (
    <div className='page cc'>
        <Header/>
        {/* <Empty/> */}
        <FilledCart/>
       
        {/* <SmallFooter/> */}
    </div>
  )
}

export default Cart












































// import React from 'react'
// import Swal from 'sweetalert2'


// // importing components
// import Empty from '../assets/components/cart/Empty'
// import FilledCart from '../assets/components/cart/FilledCart'
// import SmallFooter from '../assets/components/footer/SmallFooter'
// import Header from '../assets/components/Header'
// import Login from '../assets/Auth.jsx/LoginComponent'
// import Register from '../assets/Auth.jsx/RegisterComponent'

// const Cart = () => {
//   return (
//     <div className='page cc'>
//         <Header/>
//         {/* <Empty/> */}
//         <FilledCart/>
//         <SmallFooter/>
//     </div>
//   )
// }

// export default Cart
