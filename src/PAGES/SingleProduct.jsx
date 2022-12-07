import React,{useEffect} from 'react'
import Swal from 'sweetalert2'

// importing components
import Header from '../assets/components/Header'

const SigleProduct = () => {
useEffect(()=>{
  
      // JSON.parse(localStorage.getItem("singleProduct"))
      // _id,title,image1,image2,image3,description,category,price,rating

      
})
      

  return (
    <div className='page full cc'>
      <Header/> 
      <div className="singleproduct half ">
        {/* container 1 */}
       <div className='container'>

        <img src={JSON.parse(localStorage.getItem("singleProduct")).image1} alt="" />

        <div>
          <img src={JSON.parse(localStorage.getItem("singleProduct")).image1} alt="" />
          <img src={JSON.parse(localStorage.getItem("singleProduct")).image2} alt="" />

          <img src={JSON.parse(localStorage.getItem("singleProduct")).image3} alt="" />
{/* 
          <img src="https://images.pexels.com/photos/8964239/pexels-photo-8964239.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /> */}
        </div>

        
       </div>
        {/* container 2 */}
       <div className='container'>
        {/* ////// */}
        <h1 className='title'>{JSON.parse(localStorage.getItem("singleProduct")).title}</h1>
        <p>{JSON.parse(localStorage.getItem("singleProduct")).description}</p>
        <div className='rating'> <p>Rating:</p> <span>{JSON.parse(localStorage.getItem("singleProduct")).rating}.0</span> </div>
        <div className="category"><p>Category:</p><span>{JSON.parse(localStorage.getItem("singleProduct")).category}</span></div>
        <div className="price"><p>Price:</p> <span>USD {JSON.parse(localStorage.getItem("singleProduct")).price}</span></div>
        <form>
          <input type="text" placeholder='quantity'/>
        </form>

       </div>
      </div>
    </div>
  )
}

export default SigleProduct
