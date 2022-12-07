import React, {useEffect, useState} from 'react'
import Charts from '../assets/components/Charts'
import Swal from 'sweetalert2'
import axios from 'axios'


// //////URL
const URL ='https://kinkycoilygirls4.onrender.com/api'
// /////  


// importing the admin components
import UploadProducts from '../assets/components/AdminComponents/UploadProducts'
import GetUsers from '../assets/components/AdminComponents/GetUsers'
import GetProducts from '../assets/components/AdminComponents/GetProducts'

const AdminDashboard = () => {
    const [users,setUsers] = useState([])
    const [products,setProducts] = useState([])
    const [carts,setCarts] = useState([])



    // INSTANT FETCHING
    const fetInstately = async () =>{
        // fetch users
        await axios.get(`${URL}/user/all`).then((res)=>{
        setUsers(res.data.reverse())
        })
        // fetch products
        await axios.get(`${URL}/product/all`).then((res)=>{
            setProducts(res.data.reverse())
        })
        // fetch carts
        await axios.get(`${URL}/cart/all`).then((res)=>{
            setCarts(res.data.reverse())
        })




    }

    useEffect(()=>{
        fetInstately()
    })


  return (
    <div className='page admindashboard '>
        <aside>
            <div className="completed" title='cart'>
            <img src="https://cdn5.vectorstock.com/i/1000x1000/39/94/complete-order-icon-in-flat-style-for-any-projects-vector-35503994.jpg hr" alt="" />
            <span>{carts.length}</span>
            </div>
            <div className="pending" title='order'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IpgFF8n8H09y_xYlTI8PwP0vq2Fg9KE-5ZYxCX_r&s" alt="" />
                <span>empty</span>
            </div>
            <div title='graph' onClick={()=>{localStorage.setItem("graphModal","false")}}>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/609/277/small/3-23.jpg" alt="graph" />
                <span>Graph</span>
            </div>
            <p>1</p>
            <p>1</p>
            <p>1</p>
        </aside>
        <main className='contentwrapper'>
            <div className="smallgraphs">
            <section>
                <h1>{users.length}</h1>
                <h1>Total users</h1>
            </section>
            <section>
                <h1>{products.length}</h1>
                <h1>Total Products</h1>
            </section>
            <section>
                <h1>empty</h1>
                <h1>Total Reviews</h1>
            </section>
            <section></section>
            </div>
            <div className="fullgraphDesplay">
                {/* <Charts/> */}
            </div>
            <div className="fullgraphDesplay">
                
            </div>
            {localStorage.getItem("graphModal")==='false' &&  <Charts/>}
           
            <UploadProducts/>
            <GetUsers users={users} />
            <GetProducts products={products}/>
            
        </main>
        
    </div>
  )
}

export default AdminDashboard





























































// import React from 'react'
// import Charts from '../assets/components/Charts'
// import Swal from 'sweetalert2'
// import UploadProducts from '../assets/components/AdminComponents/UploadProducts'

// const AdminDashboard = () => {

//     const pending = 107
//     const completed = 897



//   return (
//     <div className='page admindashboard '>
//         <aside>
//             <div className="completed">
//             <img src="https://cdn5.vectorstock.com/i/1000x1000/39/94/complete-order-icon-in-flat-style-for-any-projects-vector-35503994.jpg hr" alt="" />
//             <span>{pending}</span>
//             </div>
//             <div className="pending">
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IpgFF8n8H09y_xYlTI8PwP0vq2Fg9KE-5ZYxCX_r&s" alt="" />
//                 <span>{completed}</span>
//             </div>
//             <p></p>
//             <p>1</p>
//             <p>1</p>
//             <p>1</p>
//         </aside>
//         <main className='contentwrapper'>
//             <div className="smallgraphs">
//             <section>
//                 <h1>785</h1>
//                 <h1>Total users</h1>
//             </section>
//             <section>
//                 <h1>69</h1>
//                 <h1>Total Products</h1>
//             </section>
//             <section>
//                 <h1>789</h1>
//                 <h1>Total Reviews</h1>
//             </section>
//             <section></section>
//             </div>
//             <div className="fullgraphDesplay">
//                 {/* <Charts/> */}
//             </div>
//             <div className="fullgraphDesplay">
//                 asfd
//             </div>

//             <UploadProducts/>
            
//         </main>
        
//     </div>
//   )
// }

// export default AdminDashboard
