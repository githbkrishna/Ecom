import React, { useState } from 'react'
import './Stepper.css'

const Stepper = ( { steps } ) => {

    const[currentstep,setcurrentstep]=useState(1)
    // set current step 
    
    const[iscomplete,setiscomplete]=useState(false)
    // completed or not
   
    function handlenext(){
        setcurrentstep((prevstep)=>{
            if (prevstep === steps.length ) {
                setiscomplete(true)
                return prevstep   
            } else {
              return prevstep + 1
            }
        })
    }
    // go to next step
    
    
    function handleprev(){
        setcurrentstep((prevstep)=>{
            if (prevstep === 1 ) { 
                return 1   
            } else {
              return prevstep - 1
            }
        })
    }
    // go to previous step
    
    function cal(){
        return(
            (currentstep - 1) / (steps.length - 1) * 100
            // calculate the actual length of the progress bar line and then to move after every next or previous step
        )
    }
    
  return (
    <div>
        <h1>Checkout</h1>

        <div className='steppermain'>
            {
                steps.map((step,i)=>{
                    return(
                        <div className='stepperparent' key={i}>
                            <div className={`steppernum 

                            ${currentstep > i +1 || iscomplete ? "complete" :"" }
                            // make logic to adding class for designing the success tick mark

                            ${currentstep === i +1 ? "active" : "" }`}>
                            {/* added class active if this condition is true */}

                                {
                                    currentstep > i +1 || iscomplete ? 
                                    <span><i class="fa-solid fa-check"></i></span>
                                    : 
                                    i+1
                                }

                            </div>

                            <div className="steppername">
                                {step.name}
                            </div>

                        </div>
                    )
                })
            }
        </div>

        
        <div className='progressbar'>
           <div className="progress" style={{width:`${cal()}%`}}></div>
           {/* here we have pased the width of progress for 1 step */}
        </div>


        {
            !iscomplete ?
            <div className='stepperbtn'>
                <button onClick={handleprev} disabled ={currentstep == 1}>Prev</button>
                <button onClick={handlenext}>{currentstep === steps.length  ? "Finish" :"Next"  }</button>
            </div>
            :
            <div></div>
        }
        
        { 
            steps[currentstep - 1].component()
        }

    </div>
  )
}

export default Stepper