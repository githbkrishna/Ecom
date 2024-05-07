import React from 'react'
import '../comp.css'
import womensdata from './womensdata'
import {useDispatch} from 'react-redux'
import { Add } from '../redux/Actions'
import { Link } from 'react-router-dom'

const Womens = ({search}) => {

  // console.log(womensdata);

  function send(e) {

    console.log(e);
    
    dispatch(Add(e))
    // to send data to actions item.payload

    // console.log(e.id);
  }

  const dispatch = useDispatch()

  // console.log(search , "from women.jsx");
  let searchdata = womensdata.filter((val)=>val.pname.toLowerCase().includes(search.toLowerCase()))
  console.log(search);

    
  return (
    <div>
      
      <h1>Check Latest Womens Wear</h1>

      <div className='products'>
        {
          searchdata.map((val)=>{
            return(
              <div className='productbox' key={val.id}>
                <div>
                <img src={val.imgurl} alt="" />
                {/* <Link to={`/womens/cartdetails/${val.id}`}><img src={val.imgurl} alt="" /></Link> */}
                </div>
                <h4><Link to="https://www.google.com/" target='black'>{val.pname}</Link></h4>
                <p>Rating: {val.rating}</p>
                <p>Dis price: ₹{val.offerprice}</p>
                <p>MRP: ₹{val.mrp}</p>
                <button onClick={()=>send(val)} className='btn'>Add to cart</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Womens
