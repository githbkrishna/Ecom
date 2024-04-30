import React, { useEffect, useRef } from 'react'
import '../App.css'
import ScrollReveal from 'scrollreveal'
import Typed from 'typed.js';

function Head() {

  // for typed.js  
  useEffect(() => {
    const typed = new Typed(".typing", {
      strings: ['<span style="color: blue;">frontend developer</span>', '<span style="color: rgb(255, 0, 212)";>React developer.</span>', '<span style="color: rgb(21, 182, 128)";>&amp; Web developer.</span>'],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  // for scrollReveal

  useEffect(()=>{

    ScrollReveal().reveal('.headcont', {
      reset:true,
      origin: 'left',
      distance: '50px',
    })

    ScrollReveal().reveal('.headimg', {
      reset:true,
      origin: 'top',
      distance: '50px',
    })

    ScrollReveal().reveal('.headcont', {
      reset:true,
      origin: 'left',
      distance: '50px',
    })


    
  })

  return (
  <>
  <section>

  </section>
    <header>
      <div className='headcont'>
        <h1>hello</h1>
        <h1>hello world</h1>
        <h1>
          <span className='typing'></span>
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, repellendus minima?</p>
      </div>
      <div className='headimg'>
        <img src="https://images.pexels.com/photos/20336663/pexels-photo-20336663/free-photo-of-the-ancient-ruins-of-ephesus-turkey.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" /> 
      </div>
    </header>
  </>

  )
}  

export default Head
