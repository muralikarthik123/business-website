import React from 'react'

const project = () => {
  return (
    <div className='bs' >
        {/*header*/}
      <h1 className='heading'>
        Services
      </h1>
    {/*container 1*/}
      <div className='cont1'> 
        {/*box1*/}
        <div className='bx1'>
            <img className='img1'src='./iot.jpg' alt=''/>
            <h1 style={{textDecoration:'underline'}}>IOT</h1>
            <p>The Internet of Things (IoT) involves the interconnection of everyday objects via the internet, enabling data exchange to enhance functionality and efficiency. My recent project focused on creating a smart home automation system, allowing users to control appliances through a mobile app, aimed at boosting convenience and energy efficiency.</p>
        </div>

        {/*box2*/}
    
        <div className='bx2'>
            <img className='img1'src='./web.jpg' alt=''/>
            <h1 style={{textDecoration:'underline'}}>Web develpement</h1>
            <p>As a freelance web developer, I specialize in creating and maintaining websites, focusing on web design, publishing, programming, and database management. Recently, I completed a responsive e-commerce website project aimed at enhancing user experience and increasing sales. </p>
        </div>

      </div>


    {/*container 2*/}
    <div className='cont1'> 
        {/*box1*/}
        <div className='bx1'>
            <img className='img1'src='./ml.png' alt=''/>
            <h1 style={{textDecoration:'underline'}}>Machine Learning</h1>
            <p>Machine learning (ML) is a transformative technology that enables systems to learn from data and improve their performance without explicit programming. As a freelancer, my recent ML project involved developing a predictive analytics model for a retail client, utilizing Python and libraries such as TensorFlow and scikit-learn.</p>
        </div>

        {/*box2*/}
    
        <div className='bx2'>
            <img className='img1'src='./auto.jpg' alt=''/>
            <h1 style={{textDecoration:'underline'}}>AutoCad</h1>
            <p>As a freelance AutoCAD specialist, I offer comprehensive drafting and design services, transforming concepts into precise, detailed plans for architects, engineers, and construction professionals. My expertise includes creating 2D and 3D models, floor plans, technical drawings, and blueprints, ensuring accuracy and adherence to industry standards.</p>
        </div>

      </div>

      
    </div>
  )
}

export default project
