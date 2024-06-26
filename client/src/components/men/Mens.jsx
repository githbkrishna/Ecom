import React from "react";
import "../comp.css";
import mensdata from "./Mensdata";
import { useDispatch } from "react-redux";
import { Add } from "../redux/Actions";
import { Link } from "react-router-dom";

const Mens = ({search}) => {
  console.log(mensdata);

  // console.log(womensdata);

  function send(e) {
    console.log(e);

    dispatch(Add(e));
    // to send data to actions item.payload

    // console.log(e.id);
  }

  const dispatch = useDispatch();

  // console.log(search , "from men.jsx");
  let searchdata = mensdata.filter((val) =>
    val.pname.toLowerCase().includes(search.toLowerCase())
  );
  // console.log(search);

  return (
    <div>
      <h1>Check Latest Mens Wear</h1>

      <div className="products">
        {
          // mensdata.map((val) => {
          searchdata.map((val) => {
            return (
              <div className="productbox" key={val.id}>
                <div>
                  <img src={val.imgurl} alt="" />
                  {/* <Link to={`/womens/cartdetails/${val.id}`}><img src={val.imgurl} alt="" /></Link> */}
                </div>
                <h4>
                  <Link to="https://www.google.com/" target="black">
                    {val.pname}
                  </Link>
                </h4>
                <p>Rating: {val.rating}</p>
                <p>Dis price: ₹{val.offerprice}</p>
                <p>MRP: ₹{val.mrp}</p>
                <button onClick={() => send(val)} className="btn">
                  Add to cart
                </button>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Mens;