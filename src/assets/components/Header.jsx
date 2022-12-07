import axios from 'axios'
import React, { useEffect,useState, useReducer } from 'react'
import { useNavigate,Link } from 'react-router-dom'

// //////URL
const URL ='https://kinkycoilygirls4.onrender.com/api'
// /////  

const Header = () => {
  const [cartCount, setCartCount] = useState([])
  const [search,setSearch] = useState('')
  let navigate = useNavigate()

// console.log(JSON.parse(localStorage.getItem("userInfo")))

  // fetching the cart
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
  },[cartCount])

    const toCart = () =>{
      if(JSON.parse(localStorage.getItem("userInfo"))){
        navigate('/cart')
      }else{
        navigate('/login')
      }
    }
    // /////SEARCH TAG
    const HandleSearch =async (e)=>{
      e.preventDefault()
      // console.log(search)
      localStorage.setItem("searchTag",`${search}`)
      // localStorage.getItem("searchTag")
      
      navigate("/search")
      location.reload()


    }

  if(JSON.parse(localStorage.getItem("userInfo"))){
    return (
      <div className='header half cr '>
          <div className='header-containers brand' onClick={()=>navigate('/')}>
            <img src="https://res.cloudinary.com/dt41osfqw/image/upload/v1669703891/logo_li6hbb.png" alt="" />
          </div>
          <form className='header-containers form ' onSubmit={HandleSearch}>
              <input type="text" placeholder='Search for anything' value={search} onChange={(e)=>setSearch(e.target.value)}/>
              <img src="https://image.shutterstock.com/image-vector/magnifying-glass-search-icon-flat-260nw-738763579.jpg" className='btn searchbtn'  alt="search" onClick={HandleSearch}  />
          </form>
          <div className='header-containers buttons'>
              <Link className="signinbtn btn rtlink" to='/login' >Sign in</Link>
              {/* <p>2</p> */}
              <Link className='cartlogo' to='/cart' >
              <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="" width='20px' height='20px'/>{cartCount &&  <span className='cartcount'>{cartCount}</span>}</Link>
          </div>
      </div>
    )
  }else{
    return (
      <div className='header half cr '>
          <div className='header-containers brand' onClick={()=>navigate('/')}>
            <img src="https://res.cloudinary.com/dt41osfqw/image/upload/v1669703891/logo_li6hbb.png" alt="" />
          </div>
          <form className='header-containers form ' onSubmit={HandleSearch}>
              <input type="text" placeholder='Search for anything' onChange={()=>searchTag()}/>
              <img src="https://image.shutterstock.com/image-vector/magnifying-glass-search-icon-flat-260nw-738763579.jpg" className='btn searchbtn'  alt="search" onClick={HandleSearch} />
          </form>
          <div className='header-containers buttons'>
              <Link className="signinbtn btn rtlink" to='/login' >Sign in</Link>
              {/* <p>2</p> */}
              <div className='cartlogo' onClick={()=>toCart()} >
              <img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="" width='20px' height='20px'/>{cartCount &&  <span className='cartcount'></span>}</div>
          </div>
      </div>
    )
  }
  
}

export default Header

// const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);