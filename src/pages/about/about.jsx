import React from 'react'
import './about.css'
const about = () => {
  return (
    <div className='bg'>
      {/*about* header*/}
      <h1>
        About
      </h1>

      {/*image with content starts*/}
      <div className='contentimg'>
        {/*content*/}
        <div className='content'>
            <p>Hi, I'm Karthik, a versatile freelancer specializing in machine learning (ML), Internet of Things (IoT), AutoCAD, and web development projects. With a diverse skill set and a passion for technology, I bring innovative solutions to complex problems across various domains. In ML, I develop predictive models, perform data analysis, and create intelligent systems that enhance decision-making and automation. My IoT projects involve designing and implementing smart solutions that connect devices, collect data, and improve operational efficiencies.</p>
            <p>In addition to ML and IoT, I excel in AutoCAD and web development. My AutoCAD expertise allows me to produce detailed technical drawings and 3D models for architects, engineers, and construction professionals, ensuring precision and adherence to industry standards. In web development, I craft responsive and user-friendly websites that provide seamless user experiences and meet the specific needs of businesses and individuals.</p>
        </div>
        {/*image*/}
        <div className='img'>
          <img className='image' src='./img3.webp' alt=''/>
        </div>
      </div>
    
      <h2>
      OUR TEAM
      </h2>
      <p className='team'>karthik,Rajesh,Bunti,Naveen,Fathima,Adhi</p>


      {/*container 2*/}
      <div className='container3'>
        {/*left image*/}
        <div className='box1'>
          <img className='img4' src='./img4.webp' alt=''/>

          <p className='name'>DOMINICK JAMES</p>
         
          <p className='content'>The Internet of Things (IoT) revolutionizes how businesses operate by seamlessly connecting devices, systems, and processes. With IoT, you can gather and analyze real-time data from various sources, leading to improved efficiency, reduced operational costs, and enhanced customer experiences. </p>
        </div>
        {/*right side*/}
        <div className='box1'>
          <img className='img4' src='./img5.webp' alt=''/>

          <p className='name'> GRACE RIOS</p>

          <p className='content'>We understand that every client has unique requirements, so we offer customizable options to meet your specific demands. Investing in our machines means investing in quality, innovation, and unmatched performance. Let's discuss how our solutions can best serve your business and drive your success.</p>
        </div>
      </div>


    </div>
  )
}

export default about
