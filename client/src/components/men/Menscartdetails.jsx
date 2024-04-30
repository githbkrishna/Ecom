import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import mensdata from './Mensdata'
import '../comp.css'
import { useDispatch, useSelector } from 'react-redux'
import { Add, Decrement, Remove } from '../redux/Actions'

const Menscartdetails = () => {

  // console.log(Mensdata);

    const idd = useParams().id
    console.log(idd);

    const getdata = useSelector((state)=>state.Reducers.cart)
    console.log(getdata);

    let filtdata = getdata.filter((filt)=>{
      return filt.id == idd
    })
    console.log(filtdata);

    let dispatch = useDispatch()
    function increase(e) {
      console.log(e);
      dispatch(Add(e))
    }

    function decreas(e) {
      console.log(e);
      dispatch(Decrement(e))
    }

    function remove(id) {
      dispatch(Remove(id))
      navigate("/")
    }
    
    let navigate = useNavigate()

  return (
    <div className='cartdetails' >
      {
        filtdata.map((val)=>{
            return(
                <div className='cartdetail' key={val.id}>
                    <div className='detailimg' >
                        <img src={val.imgurl} alt="" />
                    </div>

                    <div className='detailcont' >
                        <h3>{val.pname}</h3>
                        <p>Dis %: ₹{val.offerprice}</p>
                        <p>MRP: ₹<del>{val.mrp}</del></p>
                        <p>Rating: {val.rating}</p>
                        <p>quantity: {val.quantity}</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid est modi quo distinctio quasi adipisci sed exercitationem repellat quas, molestias reiciendis quae!</p>
                        <div className='quantity'>
                          <span onClick={()=>increase(val)}>+</span>
                          <span>{val.quantity}</span>
                          <span onClick={()=> val.quantity <= 1 ? remove(val.id) : decreas(val)}>-</span>
                        </div>
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Menscartdetails
