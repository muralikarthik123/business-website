import React, { useState } from 'react';
import './header.css';
import Home from '../home/home.jsx';
import About from '../about/about.jsx'
import Project from '../project/project.jsx'
import Plans from '../plans/plans.jsx'
import Services from '../services/services.jsx'

const Header = () => {
  const [activeTab, setActiveTab] = useState('London');

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  return (
    <div className='page'>
      {/*header */}
    <div className='header'>
      <div className='logo'>
        <img className ='logosize' src='./logo1.jpg' alt=''/>
      </div>
    {/*buttons in nav bar */}
      <ul className='navbar'>
        <li className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} onClick={() => openCity('London')}>Home</li>
        <li className={`tablinks ${activeTab === 'Paris' ? 'active' : ''}`} onClick={() => openCity('Paris')}>About</li>
        <li className={`tablinks ${activeTab === 'Tokyo' ? 'active' : ''}`} onClick={() => openCity('Tokyo')}>Plans</li>
        <li className={`tablinks ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => openCity('projects')}>Services</li>
        <li className={`tablinks ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => openCity('contact')}>Projects</li>
      </ul>

    </div>


{/* Body responces starts*/}
    <div>
      
    <div id="London" className="tabcontent" style={{ display: activeTab === 'London' ? 'block' : 'none' }}>
        <Home/>
      </div>

      <div id="Paris" className="tabcontent" style={{ display: activeTab === 'Paris' ? 'block' : 'none' }}>
        <About/>
      </div>

      <div id="Tokyo" className="tabcontent" style={{ display: activeTab === 'Tokyo' ? 'block' : 'none' }}>
            <Plans/>
      </div>

      <div id="projects" className="tabcontent" style={{ display: activeTab === 'projects' ? 'block' : 'none' }}>
      <Services/>
       
      </div>

      <div id="contact" className="tabcontent" style={{ display: activeTab === 'contact' ? 'block' : 'none' }}>
      <Project/>
      </div>
      </div>
{/*body responces*/}


{/*footer */}
    <div className='footer'>
      {/*contact text*/}
      <p className='contact'>Contact Form</p>
      {/*Inputs*/}
      <div className='inputs'>
      {/*first Name*/}
        <div>
          <p>First Name</p>
          <input className='textbox' type='text' placeholder='First Name'/>
        </div>
        
      {/*last name*/}
        <div className='lastname'>
          <p>Last Name</p>
          <input className='textbox' type='text' placeholder='Last Name'/>
        </div>
      </div>


      <div className='inputs'>
      {/*Email Name*/}
        <div>
          <p>Email</p>
          <input className='textbox' type='text' placeholder='Email'/>
        </div>
        
      {/*subject name*/}
        <div className='lastname'>
          <p>Subject</p>
          <input className='textbox' type='text' placeholder='Subject'/>
        </div>
      </div>
    {/*messages*/}
      <div className='inputs'>
      {/*Email Name*/}
        <div>
          <p>Messages</p>
          <input className='messagebox' type='text' placeholder='Message box'/>
           {/*submit button*/}
           <span><button className='submit'>Submit</button></span>
        </div> 
      </div>
     
    </div>
      <div>
      
    </div>


    {/*last onces*/}
    <div className='footerlast'>
      {/*heading1*/}
      <div  className='content1'>
        <p className='heading'>MK Projects</p>
        <p>6-3-88,Arundel Pet 3/4,Guntur 522002,Mail: muralikarthik845.com tel: 7386427924</p>
      </div>
      {/*heading2*/}
      <div  className='content1'>
        <p className='heading'>Menu</p>
        <p className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} onClick={() => openCity('London')}>Home</p>
        <p className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} onClick={() => openCity('Paris')}>About</p>
        <p className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} onClick={() => openCity('Tokyo')}>Plans</p>
        <p className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} onClick={() => openCity('projects')}>Services</p>
        <p className={`tablinks ${activeTab === 'London' ? 'active' : ''}`} onClick={() => openCity('contact')}>Project</p>
      </div>
      {/*heading3*/}
      <div  className='content1'>
        <p className='heading'>
        Socials</p>
        
        <p>© 2024 by Mk Projects.</p>
      </div>

    </div>

    </div>
  );
};

export default Header;
