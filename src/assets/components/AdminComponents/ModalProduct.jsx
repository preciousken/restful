import React,{useEffect,useState} from 'react'
import axios from 'axios'

// //////URL
const URL ='https://kinkycoilygirls4.onrender.com/api'
// /////  


const ModalProduct = () => {
  const [title,setTitle] = useState(JSON.parse(localStorage.getItem("toBeUpdated")).title)
  const [image1,setImage1] = useState(JSON.parse(localStorage.getItem("toBeUpdated")).image1)
  const [image2,setImage2] = useState(JSON.parse(localStorage.getItem("toBeUpdated")).image2)
  const [image3,setImage3] = useState(JSON.parse(localStorage.getItem("toBeUpdated")).image3)
  const [description,setDescription] =useState(JSON.parse(localStorage.getItem("toBeUpdated")).description)
  const [category,setCategory] = useState(JSON.parse(localStorage.getItem("toBeUpdated")).category)
  const [price,setPrice] = useState(JSON.parse(localStorage.getItem("toBeUpdated")).price)
  const [rating,setRating] = useState(JSON.parse(localStorage.getItem("toBeUpdated")).rating)
  const [colors,setColors] = useState(JSON.parse(localStorage.getItem("toBeUpdated")).colors)

  const closeModoal = ()=>{
    localStorage.setItem("productupdate","false")
    // location.reload()
  }

  // fetching for updating the product
  const updateAm = async (e)=>{
    console.log('you darn it')
   try {
    await axios.put(`${URL}/product/update/${JSON.parse(localStorage.getItem("toBeUpdated"))._id}`,{title,image1,image2,image3,description,category,price,rating,colors}).then((res)=>{
      localStorage.setItem("productupdate",'false')
      location.reload()
    })

   } catch (error) {
    console.log(error)
   }
    
    
  }


  if(localStorage.getItem("productupdate")==='true'){ return (
    <div className='adminmodal '>
        <div className='modalcontent'>
          <form onSubmit={()=>updateAm()}>
          <h1>Update Product</h1> 

          <div>
            <p>Title</p>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          </div>

          <div>
            <p>Description</p>
          <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
          </div>

          <div>
            <p>Category</p>
          <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} />
          </div>

          <div>
            <p>Price</p>
          <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} />
          </div>

          <div>
            <p>Rating</p>
          <input type="number" min='1' max='5' value={rating} onChange={(e)=>setRating(e.target.value)} />
          </div>

          <div>
            <p>Colors</p>
          <input type="text" value={colors} onChange={(e)=>setColors(e.target.value)} placeholder='e.g yellow,pink,white' />
          </div>
          <div className='images'>
            <img src={image1} alt="product image" />
            <img src={image2} alt="product image" />
            <img src={image3} alt="product image" />
          </div>

          <button type='submit' className="submitbtn" onClick={(e)=>{
             e.preventDefault() 
             updateAm()
             }} >Update</button>




          </form>
          <button className="closemodal" onClick={()=>closeModoal()}>Close</button>
        </div>
    </div>
  )}
}

export default ModalProduct
