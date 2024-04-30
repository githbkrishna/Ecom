import React, { useEffect, useState } from 'react'
import '../comp.css'
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Remove } from '../redux/Actions';

function Navbar({ search , setsearch }) {

    function remove(id) {
      dispatch(Remove(id))
    }

    const dispatch = useDispatch()

    // const getdata = useSelector((state)=>state)
    // const getdata = useSelector((state)=>state.Reducers)
    const getdata = useSelector((state)=>state.Reducers.cart)
    // const getdata = useSelector((state)=>state.cart)
    console.log(getdata);
    // console.log(getdata.length);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const[ham,setham] = useState(false)

    const navigate = useNavigate()

    const [totl, settotl] = useState(0)

    function Total() {
      let price = 0;
      getdata.map((val)=>{
        price = val.offerprice * val.quantity + price
      })
      // console.log(price);
      settotl(price);
    }
    useEffect(()=>{
      Total()
    },[Total])

    // const [search, setsearch] = useState('')
    // console.log(search , "from Navbar");

  return (
    <nav>
      <div className="logo" onClick={()=>navigate("/")}>
        <h2>Ecom</h2>
      </div>
      <ul className={ham ? "menus menuopen" : "menus"}>
        <li><Link to="/mens">Mens</Link></li>
        <li><Link to="/womens">Womens</Link></li>
        <li><Link to="/kids">Kids</Link></li>
      </ul>

      <input type="text" search={search} onChange={(e)=>setsearch(e.target.value)}/>

      <div className="ham" onClick={()=>{setham(!ham)}}>
        {
          ham ?
          <i class="fa-solid fa-bars"></i>
          :
          <i class="fa-solid fa-xmark"></i>    
        }
      </div>

      <div className="icons">
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <Badge badgeContent={getdata.length} color="primary">
                  <i class="fa-solid fa-cart-shopping"></i>
                </Badge>
            </Button>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
              {
                getdata.length ?

                <div className='menuItem1'>
                  <h2>Cart</h2>
                    {
                      getdata.map((val)=>{
                        return(
                          <div className='cartdiv'>
                            <div className='cartimg'>
                            <Link to={`/womens/cartdetails/${val.id}`}><img src={val.imgurl} alt="" /></Link>
                            </div>
                            <div className='cartcont'>
                              <h3>title: {val.pname}</h3>
                              <p>price: ₹<del>{val.mrp}</del> {val.offerprice}</p>
                              <p>quantity: {val.quantity}</p>
                              <p>size: M</p>
                              <div className='delseeicon'>
                                <i class="fa-solid fa-trash" onClick={()=>remove(val.id)}></i>
                                <Link to={`/womens/cartdetails/${val.id}`}><i class="fa-solid fa-eye" onClick={()=>see(val)}></i></Link>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    }
                  <h2>Total: {totl}</h2>
                  <div className="checkbtn">
                    <Link to='/checkout' onClick={handleClose}><button>Checkout</button></Link>
                  </div>
                </div>
                
                :

                <div className='menuItem'>
                    <i class="fa-solid fa-xmark" onClick={handleClose}></i>
                    <h2>Cart is empty</h2>
                    <div>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1--q9p_-ov0WOWeeBAJ-Zdi_Bwny2Z2_79w&usqp=CAU" alt="" />
                    </div>
                    <button className='btn'>Add to Cart</button>
                </div>
              }

            </Menu>
        </div>
      </div>
        
    </nav>
  )
}

export default Navbar
