import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
// //////URL
const URL ='https://kinkycoilygirls4.onrender.com/api'
// /////  

// importing Loading state
import Loading from '../Loading'

const FilledCart = () => {
    const [loading,setLoading] = useState(false)
    const [cart , setCart] = useState([])
    let navigate = useNavigate()

    // fetching the cart

useEffect(()=>{
    const controller = new AbortController();
    const fetchCart= async ()=>{
     try {
        // first fetch the users for the cart
     await axios.get(`${URL}/user/one/${JSON.parse(localStorage.getItem("userInfo"))._id}`, {signal: controller.signal}).then((response)=>{
        // console.log(response.data.cart)
        const Ids = response.data.cart


        // then use the cart ids to fetch the carts
        const fetchEachCart = async ()=>{
          try {
            const eachCart =  await Promise.all(Ids.map(Id=>{
                return axios.get(`${URL}/cart/cartSingle/${Id}`)
            }))
            // console.log(await eachCart)
            setCart(await eachCart)
          } catch (error) {
            console.log(error)
          }
        }
        fetchEachCart()

    }).catch((err)=>console.log(err))
     } catch (error) {
      console.log(error)
     }
  
    }
    fetchCart()
  },[])

  //  navigate to single product page
  const navToSingle = (_id,title,image1,image2,image3,description,category,price,rating)=>{
    let singleProduct = {
      _id,title,image1,image2,image3,description,category,price,rating
    }
    
    localStorage.setItem("singleProduct",`${JSON.stringify(singleProduct)}`)
    navigate('/singleproduct')

  }


//   //// REMOVING AN ITEM FROM THE CART GOES IN HERE
  const removeCart=(id,image1,image2,image3,description,category,price,rating)=>{
    // /deleteCart/:id/:userId
    const destroyAm = async()=>{
        try {
            await axios.delete(`${URL}/cart/deleteCart/${id}/${JSON.parse(localStorage.getItem("userInfo"))._id}`).then((res)=>{
                // console.log(res)
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
            title: 'Item removed from cart'
          })
        //   reload page
          location.reload()
          
            }).catch((error)=>console.log(error))
        } catch (error) {
            console.log(error)
        }
    }
    destroyAm()

  }

  // getting user data from the localstorage
//   JSON.parse(localStorage.getItem("userInfo"))


if(loading){
    return <Loading/>
  }
  return (
    <div className='half emptycart  cc'>
    <div className='emptycartcontainer full'>
        <p>Buy confidently with Etsy's Purchase Protection program for buyers, get a full refund in the rare case your item doesn't arrive, arrives damaged, or isn't as described. See eligibility</p>
    </div>
    <div className="contentsincart full cr">
        <div className='cartitems'>
            {/* ITEM 1 */}
            {cart.map((cart)=>{
                // _id,title,image1,image2,image3,description,category,price,rating


                // //ASSIGNING NAMES TO THEM
                let id = cart.data._id
                let _id = cart.data._id
                let title = cart.data.title
                let image1 = cart.data.image1
                let image2 = cart.data.image2
                let image3 = cart.data.image3
                let description = cart.data.description
                let category = cart.data.category
                let price = cart.data.price
                let rating = cart.data.rating

                return  <div className='items' key={cart.data._id}>
                {/*  */}
                <img src={cart.data.image1} alt="productImage" />
                    {/*  */}
                <div>
                    <a href="#" onClick={()=>navToSingle(_id,title,image1,image2,image3,description,category,price,rating)} >{cart.data.description}</a>
                    <div className="btncontainer">
                    <button>Buy</button>
                    <button onClick={()=>removeCart(id,image1,image2,image3,description,category,price,rating)}>Remove</button>
                    </div>
                </div>

                <div className='pricedetails'>
                    <p className='price'>USD {cart.data.price}</p>
                </div>
            </div>     
            })}
                 

        </div>
    </div>
    </ div >
  )
}

export default FilledCart































































// import axios from 'axios'
// import React, { useState,useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Swal from 'sweetalert2'
// // //////URL
// const URL ='https://kinkycoilygirls4.onrender.com/api'
// // /////  

// // importing Loading state
// import Loading from '../Loading'

// const FilledCart = () => {
//     const [loading,setLoading] = useState(false)
//     const [cart , setCart] = useState([])
//     let navigate = useNavigate()

//     // fetching the cart

// useEffect(()=>{
//     const controller = new AbortController();
//     const fetchCart= async ()=>{
//      try {
//         // first fetch the users for the cart
//      await axios.get(`${URL}/user/one/${JSON.parse(localStorage.getItem("userInfo"))._id}`, {signal: controller.signal}).then((response)=>{
//         // console.log(response.data.cart)
//         const Ids = response.data.cart


//         // then use the cart ids to fetch the carts
//         const fetchEachCart = async ()=>{
//           try {
//             const eachCart =  await Promise.all(Ids.map(Id=>{
//                 return axios.get(`${URL}/cart/cartSingle/${Id}`)
//             }))
//             // console.log(await eachCart)
//             setCart(await eachCart)
            
//             // cart.push(await eachCart)
//             // cart.push(cartData)
//             // console.log(cart)
//             // console.log(await cartData)
//           } catch (error) {
//             console.log(error)
//           }
//         }
//         fetchEachCart()

//     }).catch((err)=>console.log(err))
//      } catch (error) {
//       console.log(error)
//      }
  
//     }
//     fetchCart()
//   },[])

//   //  navigate to single product page
//   const navToSingle = (_id,title,image1,image2,image3,description,category,price,rating)=>{
//     let singleProduct = {
//       _id,title,image1,image2,image3,description,category,price,rating
//     }
    
//     localStorage.setItem("singleProduct",`${JSON.stringify(singleProduct)}`)
//     navigate('/singleproduct')

//   }


// //   //// REMOVING AN ITEM FROM THE CART GOES IN HERE
//   const removeCart=(id,image1,image2,image3,description,category,price,rating)=>{
//     // /deleteCart/:id/:userId
//     const destroyAm = async()=>{
//         try {
//             await axios.delete(`${URL}/cart/deleteCart/${id}/${JSON.parse(localStorage.getItem("userInfo"))._id}`).then((res)=>{
//                 // console.log(res)
//            // sweetjs snippet goes in here
//            const Toast = Swal.mixin({
//             toast: true,
//             position: 'top-end',
//             showConfirmButton: false,
//             timer: 2000,
//             timerProgressBar: true,
//             didOpen: (toast) => {
//               toast.addEventListener('mouseenter', Swal.stopTimer)
//               toast.addEventListener('mouseleave', Swal.resumeTimer)
//             }
//           })
          
//           Toast.fire({
//             icon: 'success',
//             title: 'Item removed from cart'
//           })
//         //   reload page
//           location.reload()
          
//             }).catch((error)=>console.log(error))
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     destroyAm()

//   }

//   // getting user data from the localstorage
// //   JSON.parse(localStorage.getItem("userInfo"))


// if(loading){
//     return <Loading/>
//   }
//   return (
//     <div className='half emptycart  cc'>
//     <div className='emptycartcontainer full'>
//         <p>Buy confidently with Etsy's Purchase Protection program for buyers, get a full refund in the rare case your item doesn't arrive, arrives damaged, or isn't as described. See eligibility</p>
//     </div>
//     <div className="contentsincart full cr">
//         <div className='cartitems'>
//             {/* ITEM 1 */}
//             {cart.map((cart)=>{
//                 // _id,title,image1,image2,image3,description,category,price,rating


//                 // //ASSIGNING NAMES TO THEM
//                 let id = cart.data._id
//                 let _id = cart.data._id
//                 let title = cart.data.title
//                 let image1 = cart.data.image1
//                 let image2 = cart.data.image2
//                 let image3 = cart.data.image3
//                 let description = cart.data.description
//                 let category = cart.data.category
//                 let price = cart.data.price
//                 let rating = cart.data.rating

//                 return  <div className='items' key={cart.data._id}>
//                 {/*  */}
//                 <img src={cart.data.image1} alt="productImage" />
//                     {/*  */}
//                 <div>
//                     <a href="#" onClick={()=>navToSingle(_id,title,image1,image2,image3,description,category,price,rating)} >{cart.data.description}</a>
//                     <div className="btncontainer">
//                     <button>Buy</button>
//                     <button onClick={()=>removeCart(id,image1,image2,image3,description,category,price,rating)}>Remove</button>
//                     </div>
//                 </div>
//                 {/*  */}
//                 <select name="quantity" id="quantity">
//                     <option value="1">1</option>
//                     <option value="2">2</option>
//                     <option value="3">3</option>
//                 </select>
//                 {/*  */}

//                 <div className='pricedetails'>
//                     <p className='price'>USD {cart.data.price}</p>
//                 </div>
//             </div>     
//             })}
                 

//         </div>
//         <div className='checkout'>
//             {/* <div><p className='lbt'>Item(s) total</p>	 <span>USD 22.73</span></div>
//             <hr />
//             <div><p className='lbt'>Total(3 Items )</p>	 <span>USD 22.73</span></div> */}
//         <button className="checkoutbtn">Checkout All</button>
//         </div>
//     </div>
//     </ div >
//   )
// }

// export default FilledCart













































// // if(loading){
// //     return <Loading/>
// //   }
// //   return (
// //     <div className='half emptycart  cc'>
// //     <div className='emptycartcontainer full'>
// //         <p>Buy confidently with Etsy's Purchase Protection program for buyers, get a full refund in the rare case your item doesn't arrive, arrives damaged, or isn't as described. See eligibility</p>
// //     </div>
// //     <div className="contentsincart full cr">
// //         <div className='cartitems'>
// //             {/* ITEM 1 */}
// //             <div className='items'>
// //                 {/*  */}
// //                 <img src="https://i.etsystatic.com/21114261/r/il/fc6af6/3524772787/il_170x135.3524772787_dc5r.jpg" alt="productImage" />
// //                     {/*  */}
// //                 <div>
// //                     <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, optio! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, voluptatum!</a>
// //                     <div className="btncontainer">
// //                     <button>Buy</button>
// //                     <button>Remove</button>
// //                     </div>
// //                 </div>
// //                 {/*  */}
// //                 <select name="quantity" id="quantity">
// //                     <option value="1">1</option>
// //                     <option value="2">2</option>
// //                     <option value="3">3</option>
// //                 </select>
// //                 {/*  */}

// //                 <div className='pricedetails'>
// //                     <p className='price'>USD 3.48</p>
// //                 </div>
// //             </div>
           
// //         </div>
// //         <div className='checkout'>
// //             <div><p className='lbt'>Item(s) total</p>	 <span>USD 22.73</span></div>
// //             <hr />
// //             <div><p className='lbt'>Total(3 Items )</p>	 <span>USD 22.73</span></div>
// //         <button className="checkoutbtn">Checkout</button>
// //         </div>
// //     </div>
// //     </ div >
// //   )
// // }

// // export default FilledCart
