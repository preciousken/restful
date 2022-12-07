import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
// /////
const URL = 'http://localhost:5000/api'
// ////

import Loading from '../assets/components/Loading'

// importing components
import Header from '../assets/components/Header'

const SearchPage = () => {
    const [list,setList] = useState([])
    const [loading,setLoading] = useState(true)
    let navigate = useNavigate()


    useEffect(()=>{
        // /product/productCategory?title=
        const controller = new AbortController();
        

        const str = JSON.stringify(localStorage.getItem("searchTag"));

const withoutQuotes = str.replace(/"/g, '');



        const fetchProducts = async ()=>{
            try {
                await axios.get(`${URL}/product/productCategory?title=${withoutQuotes}`).then((res)=>{
                    // console.log(res.data)
                    setList(res.data)
                    setLoading(false)
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    })
    // location.reload()

    if(loading){
        return <Loading/>
    }else{
        return (
            <div className="page cc">
               {/* <AllProductTitle/> */}
               <Header/>
      <div className="maincontainer">
          {/* <LatestProductTitle/> */}
          <div className='half latestproduct cr'>
        {list.map((product)=>{
            const {_id,title,image1,image2,image3,description,category,price,rating} = product
            return(
                <div className='imagecontainer cc' key={_id} >
                <img src={image1} alt="" onClick={()=>navToSingle(_id,title,image1,image2,image3,description,category,price,rating)} />
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
               
           </div>
         )
    }
      }
      

export default SearchPage
