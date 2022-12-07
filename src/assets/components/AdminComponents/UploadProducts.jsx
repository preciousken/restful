import React, { useEffect, useState } from 'react'
import axios from 'axios';

// //////URL
const URL ='https://kinkycoilygirls4.onrender.com/api'
// /////  


const UploadProducts = () => {
  const [title,setTitle] = useState('');
  const [image1,setImage1]= useState('');
  const [image2, setImage2] = useState('');
  const [image3,setImage3] = useState('');
  const [description,setDescription] = useState('');
  const [category,setCategory] = useState('');
  const [price,setPrice] = useState('');
  const [rating,setRating] = useState('')
  const [colors, setColors] = useState('whitered');
  
  // ////first
  function previewFile1() {
    const file = document.querySelector('.image1').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // convert image file to base64 string
      // setting up function to upload image to cloudinary
      let image = reader.result
      // console.log(image)
      const toCloudinary=async()=>{
       try {
        await axios.post(`${URL}/upload/uploadimages`,{image}).then((res)=>{
          console.log(res.data)
          setImage1(res.data)
        })
       } catch (error) {
        console.log(error)
       }
      }
      toCloudinary()
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  // ////second
  function previewFile2() {
    const file = document.querySelector('.image2').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // convert image file to base64 string
      // setting up function to upload image to cloudinary
      let image = reader.result
      // console.log(image)
      const toCloudinary=async()=>{
       try {
        await axios.post(`${URL}/upload/uploadimages`,{image}).then((res)=>{
          console.log(res.data)
          setImage2(res.data)
        })
       } catch (error) {
        console.log(error)
       }
      }
      toCloudinary()
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  

  // ////third
  function previewFile3() {
    const file = document.querySelector('.image3').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", () => {
      // convert image file to base64 string
      // setting up function to upload image to cloudinary
      let image = reader.result
      // console.log(image)
      const toCloudinary=async()=>{
       try {
        await axios.post(`${URL}/upload/uploadimages`,{image}).then((res)=>{
          console.log(res.data)
          setImage3(res.data)
        })
       } catch (error) {
        console.log(error)
       }
      }
      toCloudinary()
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }


  // uploading products and their images
  const uploadTheDarn= async()=>{
    const colors = 'red'
    let body ={
      title,image1,image2,image3,description,category,price,colors,rating
    }
    

    if(title && image1 && image2 && image3 && description && category && price && colors){
      await axios.post(`${URL}/product`,body)
      .then()
      .catch((error)=>console.log(error))
    }
  }
  return (
    <div className='uploadpictures'>
        <h1 className='title'>UPLOAD PRODUCTS</h1>
        <form >
            <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
            <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
            <input type="text" placeholder='Category' value={category} onChange={(e)=>setCategory(e.target.value)} />
            <input type="number" placeholder='Price' value={price} onChange={(e)=>setPrice(e.target.value)} />
            <input type="number" placeholder='Rating' min='1' max='5' value={rating} onChange={(e)=>setRating(e.target.value)} />
            <textarea name="" id="" cols="30" rows="10" value={colors} placeholder='red,green,yello'></textarea>
                <div className='img'>
                <input type="file"
       accept="image/png, image/jpeg" className='image1' onChange={()=>previewFile1()} />
                <button className="uploadimg" >Upload</button>
                </div>
                <div className='img'>
                <input type="file"
       accept="image/png, image/jpeg" className='image2' onChange={()=>previewFile2()} />
                <button className="uploadimg">Upload</button>
                </div>
                <div className='img'>
                <input type="file"
       accept="image/png, image/jpeg" className='image3' onChange={()=>previewFile3()} />
                <button className="uploadimg">Upload</button>
                </div>
                <button type='submit' className="btn submitbtn" onClick={(e)=>{
                  e.preventDefault()
                  uploadTheDarn()
                }}>Upload Products</button>
        </form>
    </div> 
  )
}

export default UploadProducts
