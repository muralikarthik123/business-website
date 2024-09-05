import React from 'react'
import './plans.css';
const plans = () => {
  return (
    <div className='bg4'>
        <h1 className='head'>GROWTH AND INNOVATION PLANS</h1>
        <p className='content'>We help businesses improve their performance through innovation in products, services, and strategy.</p>

        {/*outer box*/}
        <div className='boxs'>
          {/*boxes1*/}
            <div className='box1'>
                <p className='text'>Basic plan</p>
                <p className='amount'>RS 2500</p>
                <p className='content'>All Small Project or mini projects  are avaliable  in this plan</p>
                

            </div>
          
          {/*boxes2*/}
          <div className='box1'>
                <p className='text'>Medium Plan</p>
                <p className='amount'>RS 4000</p>
                <p className='content'>All  medium range  projects are avalabile in this plan</p>
                
                
            </div>
            {/*boxes3*/}
            <div className='box1'>
                <p className='text'>Top Plan</p>
                <p className='amount'>RS 6000</p>
                <p className='content'>All Major projects are avalabile in this plan</p>
                
                
            </div>
        </div>
    </div>
  )
}

export default plans
