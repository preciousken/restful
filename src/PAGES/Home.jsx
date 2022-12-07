import React, { useEffect,useReducer,useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
  // import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/css';



  import {ALLPRODUCTS,BEST_SELLING} from '../assets/controls/Controls'

// import components
import Header from '../assets/components/Header'
import Subheader from '../assets/components/Subheader'
import SubheaderImages from '../assets/components/SubheaderImages'
import LatestProduct from '../assets/components/LatestProduct'
import BestSeller from  '../assets/components/BestSeller'
import AllProducts from '../assets/components/AllProducts'

// loading import
import Loading from '../assets/components/Loading'

const reducer = async (state,action)=>{
  
}
const defaultState = {
  

}


// auth pages/login/register
import Login from '../assets/Auth.jsx/LoginComponent'
import Register from '../assets/Auth.jsx/RegisterComponent'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const [allproduct, setAllProduct] = useState([])
  const [state,dispatch] = useReducer(reducer,defaultState)

  let navigate = useNavigate()


useEffect(()=>{
    // sweetjs snippet goes in here
 const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Welcome to kinkycoilygirls'
})


},[])


// set loading to false
useEffect(()=>{
  if(JSON.parse(localStorage.getItem("userInfo")).isAdmin){
    navigate('/admin')
  }
},[])
{
  return <div className='page cc'>
  <Header/>
  <Subheader/>
  <SubheaderImages/>
  <LatestProduct />
  <BestSeller/>
  <AllProducts/> 
</div>
}}

export default Home























































// import React, { useEffect,useState } from 'react'
// import axios from 'axios'
// import Swal from 'sweetalert2'
//   // import Swiper JS
//   import Swiper from 'swiper';
//   // import Swiper styles
//   import 'swiper/css';

// // import components
// import Header from '../assets/components/Header'
// import Subheader from '../assets/components/Subheader'
// import SubheaderImages from '../assets/components/SubheaderImages'
// import LatestProduct from '../assets/components/LatestProduct'
// import BestSeller from  '../assets/components/BestSeller'
// import AllProducts from '../assets/components/AllProducts'
// import SmallFooter from '../assets/components/footer/SmallFooter'

// const url = 'localhost:2002/api'

// // loading import
// import Loading from '../assets/components/Loading'


// // auth pages/login/register
// import Login from '../assets/Auth.jsx/LoginComponent'
// import Register from '../assets/Auth.jsx/RegisterComponent'
// import { Carousel } from 'react-bootstrap';

// const Home = () => {
//   const [loading, setLoading] = useState(false);
//   const [latestproducts, setLatestProducts] = useState([]);



// useEffect(()=>{
//     // sweetjs snippet goes in here
//  const Toast = Swal.mixin({
//   toast: true,
//   position: 'top-end',
//   showConfirmButton: false,
//   timer: 5000,
//   timerProgressBar: true,
//   didOpen: (toast) => {
//     toast.addEventListener('mouseenter', Swal.stopTimer)
//     toast.addEventListener('mouseleave', Swal.resumeTimer)
//   }
// })

// Toast.fire({
//   icon: 'success',
//   title: 'Welcome to kinkycoilygirls'
// })


// },[])

// // 
//   const fetchProducts = async (event) =>{
    
//     event.preventDefault();
//     console.log(email,password)

//     try {
    
//       await axios.post(`${URL}/auth/login`, {
//         email:email,
//         password:password,
//       })
//       .then(function (response) {
//         setData(response.data)
//         console.log(data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     } catch (error) {
//       console.log(error)
//     }
    
    

//   }
//   useEffect(()=>{
//     fetchProducts();
//   })

//   if(loading){
//     return(
//     <Loading/>
//     );
//   }
//   return (
//     <>
//     <div className='page cc'>
//         <Header/>
//         <Subheader/>
//         <SubheaderImages/>
//         <Carousel/>
//         <LatestProduct latestproducts={latestproducts} {...latestproducts}/>
//         <BestSeller/>
//         <AllProducts/>  
//         {/* <Loading/> */}
//         <SmallFooter/>
//     </div>


//     {/* pop up goes down */}
//     {/* <Login/> */}
//     {/* <Register/> */}
//     </>
//   )
// }

// export default Home
