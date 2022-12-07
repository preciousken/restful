import axios from 'axios'
import React from 'react'


// //////URL
const URL ='https://kinkycoilygirls4.onrender.com/api'
// /////  

const GetUsers = ({users}) => {

  // destroy a user
  const destroyAm = async (id)=>{
    // console.log(id)
    await axios.delete(`${URL}/user/delete/${id}`)
    location.reload()
  }
  

  return (
    <div className='uploadpictures'>
        <h1 className='title'>GET USERS</h1>

        <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Cart</th>
    <th>Order</th>
    <th></th>
  </tr>
  {users.map((user)=>{
    let id = user._id
    return<tr key={id}>
    <td>{user.firstName}</td>
    <td>{user.email}</td>
    <td>{user.cart.length}</td>
    <td>{user.order.length}</td>
    <td><button className='btnDelete' onClick={()=>destroyAm(id)}>Delete User</button></td>
  </tr>
  })}
</table>

    </div> 
  )
}

export default GetUsers
