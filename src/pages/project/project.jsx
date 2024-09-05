import React from 'react'
import './project.css'
const project = () => {
  return (
    <div >
        {/*header*/}
      <h1 className='heading'>
        Undergoing   Projects 
      </h1>
    {/*container 1*/}
      <div className='cont1'> 
        {/*box1*/}
        <div className='bx1'>
            <img className='img1'src='./iot1.jpg' alt=''/>
            <h1>IOT</h1>
            <p>Our cutting-edge mobile robots are integrated with IoT technology to provide seamless connectivity and advanced automation capabilities. These robots are designed to navigate complex environments, gather and transmit data in real time, and interact intelligently with other devices in your network. .</p>
        </div>

        {/*box2*/}
    
        <div className='bx2'>
            <img className='img1'src='./web1.jpg' alt=''/>
            <h1>Web development</h1>
            <p>Creating a website in React.js offers a modern, efficient approach to building dynamic and responsive web applications. React.js, a popular JavaScript library maintained by Facebook, enables developers to build user interfaces using reusable components, making your codebase more maintainable and scalable.</p>
        </div>

      </div>


    {/*container 2*/}
    <div className='cont1'> 
        {/*box1*/}
        <div className='bx1'>
            <img className='img1'src='./ml.webp' alt=''/>
            <h1>Machine Learning</h1>
            <p>Embarking on a machine learning project can be both exciting and challenging. The process begins with clearly defining the problem you aim to solve, which is crucial for setting a clear direction. Next, gather and preprocess your data, ensuring it is clean, relevant, and properly formatted for analysis. Choosing the right algorithms and models is essential, and this often involves experimenting with different approaches to find the best fit for your data.</p>
        </div>

        {/*box2*/}
    
        <div className='bx2'>
            <img className='img1'src='./ai.png' alt=''/>
            <h1>Artifical Intelligence</h1>
            <p>Artificial Intelligence (AI) is revolutionizing numerous industries by enabling machines to perform tasks that typically require human intelligence. From machine learning algorithms that predict consumer behavior to natural language processing that powers virtual assistants, AI is at the forefront of technological advancement. Developing AI involves creating systems capable of learning from data, recognizing patterns, and making decisions with minimal human intervention. </p>
        </div>

      </div>

      
    </div>
  )
}

export default project
