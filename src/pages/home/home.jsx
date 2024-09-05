import React from 'react'
import './home.css'

const home = () => {
  return (
    
    <div className='bg1'>
      {/*image*/}
      <img className='img1' src='./img1.png' alt=''/>
      {/*white container 1*/}
  
      <div className='container1'>
        <p className='c1'>Developing Innovative Strategies</p>
        <p className='c2'>ACHIEVING GROWTH</p>
        <button className='bt1'>Free Consulation</button>
        {/* contanier 2*/}
      <div className='container2'>
        {/*box1*/}
        <div className='box1'>
          <p className='heading'>Services</p>
          <p className='content'> We provide comprehensive services in IoT, web development, machine learning, and AutoCAD design to help businesses leverage cutting-edge technology for growth and innovation. Our IoT solutions include device integration, data analytics, and remote monitoring to enhance operational efficiency. In web development, we create responsive, user-friendly websites and robust e-commerce platforms. Our machine learning services involve developing predictive models and intelligent systems to drive data-driven decision-making. Additionally, our AutoCAD design </p>
        </div>
        {/*box2*/}
        <div className='box2'>
          <p className='heading'>Projects</p>
          <p className='content'> Our web development services create responsive, user-friendly websites and robust e-commerce platforms.Leverage our machine learning expertise to develop predictive models and intelligent systems.Our AutoCAD design services provide precise and innovative designs for architecture, engineering, and construction projects. We offer IoT services including device integration, real-time data analytics, and remote monitoring. Enhance operational efficiency and gain insights through connected devices.</p>
        </div>
        {/*box3*/}
        <div className='box3'>
          <p className='heading'>Clients</p>
          <p className='content'> We have clients all over the India and we have internation client and few projects have been done.So far we have 2years of expererince in deling with the project and also so incresed the services  </p>
        </div>
      </div>
      <div className='imgs'>
        
        
      </div>
      </div>
      

    </div>
  )
}

export default home
