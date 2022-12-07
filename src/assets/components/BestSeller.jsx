
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Title from './Titles/BestSellerTitle'
import Swal from 'sweetalert2'

// //////URL
const URL ='https://kinkycoilygirls4.onrender.com/api'
// /////  

const BestSeller = () => {
    const [allproduct, setAllProduct] =useState([])
    let navigate = useNavigate()

    // fetching the products

useEffect(()=>{
    const controller = new AbortController();
    const fetchAllProducts= async ()=>{
     try {
        await axios.get(`${URL}/product/all`, {signal: controller.signal}).then((response)=>{
      setAllProduct(response.data)
    }).catch((err)=>console.log(err))
     } catch (error) {
      console.log(error)
     }
  
    }
    fetchAllProducts()
  },[])

  
  // getting user data from the localstorage
   JSON.parse(localStorage.getItem("userInfo"))

  if(allproduct){
    // console.log(allproduct)

          // ADDTOCART FUNCTION
    const addToCart = async (_id,title,image1,image2,image3,description,category,price,rating)=>{
        // console.log(_id,title,category)
        try {
            await axios.post(`${URL}/cart/addCart/${JSON.parse(localStorage.getItem("userInfo"))._id}`, {title,image1,image2,image3,description,category,price,rating}).then((response)=>{
                // console.log(response)
        }).catch((err)=>console.log(err))
         } catch (error) {
          console.log(error)
         }
         
           // sweetjs snippet goes in here
 const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Item added to cart'
})
    }

     //  navigate to single product page
     const navToSingle = (_id,title,image1,image2,image3,description,category,price,rating)=>{
      let singleProduct = {
        _id,title,image1,image2,image3,description,category,price,rating
      }
      
      localStorage.setItem("singleProduct",`${JSON.stringify(singleProduct)}`)
      navigate('/singleproduct')

    }
    
    
    
return (
  <div className="maincontainer">
    
    <div className="title">Best Sellers</div>
      <div className='half latestproduct cr'>
    {allproduct.map((product)=>{
        const {_id,title,image1,image2,image3,description,category,price,rating} = product
        return(
            <div className='imagecontainer cc' key={_id} >
            <img src={image1} alt="" onClick={()=>navToSingle(_id,title,image1,image2,image3,description,category,price,rating)}  />
            <div className='textcontents'>
            <p className='desc'>{description}</p>
            <div className="rating">
                {/* startshere */}
            </div>
            <p className='price'>USD{price}</p>
            <p className="category"><span>{category}</span>
            <button className="addtocartbtn" onClick={()=>addToCart(_id,title,image1,image2,image3,description,category,price,rating)}>Add to Cart</button>
            </p>
            </div>
        </div>
        )
    })}
  </div>
  </div>
)
}
}

export default BestSeller
