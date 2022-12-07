import React, { useState } from 'react'

// //////URL
const URL ='https://kinkycoilygirls4.onrender.com/api'
// /////  

// importing the components
import Modalproduct from './ModalProduct'

const GetProducts = ({products}) => {
    // const[modal, setModal] = useState(false)

  // destroy a user
  const destroyAm = async (id)=>{
    // console.log(id)
    await axios.delete(`${URL}/product/delete/${id}`)
    location.reload()
  }
    //   update modal
    const updateModal=(_id)=>{
        // setModal(!modal)
        localStorage.setItem("productupdate",'true')
        // console.log(_id)
        
        let toBeUpdated = products.find((product)=> product._id === _id)
        localStorage.setItem("toBeUpdated",JSON.stringify(toBeUpdated))
        // console.log(toBeUpdated)
    }


      




  return (
    <div className='uploadpictures'>
        <h1 className='title'>GET PRODUCTS</h1>

      


        <table>
  <tr>
    <th>TITLE</th>
    <th>DESCRIPTION</th>
    <th>CATEGORY</th>
    <th>PRICE</th>
    <th>RATING</th>
    <th></th>
    <th></th>
  </tr>
  {products.map((product)=>{
    const {_id} = product
    let id = product._id
    let OldId = product._id
    return <tr key={id}>
    <td>{product.title}</td>
    <td>{product.description}</td>
    <td>{product.category}</td>
    <td>USD {product.price}</td>
    <td>{product.rating}</td>
    <td><button className='btnUpdate' onClick={()=>updateModal(_id)} >Update Product</button></td>
    <td><button className='btnDelete'onClick={()=>destroyAm(id)} >Delete Product</button></td>
  </tr>
  })}
</table>

{localStorage.getItem("productupdate") === 'true' && <Modalproduct/>}

    </div> 
  )
}

export default GetProducts
