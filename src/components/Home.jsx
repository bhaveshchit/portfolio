import React from 'react'
import "../components/component.css"
import Work from '../images/work.png'
const Home = () => {
  return (
    <div className='row' style={{backgroundColor:"#caf0f8"}}>
            <div className='col-md-6 home-left-greet'>
                <div className='typewriter'>
                    <h1>Bhavesh Chittora</h1>
                </div>
                <br /><br />
                <p className='greet-para'> A seasoned backend developer with a wealth of experience in full stack development. 
                    With a deep understanding of front-end and back-end technologies, they are adept at seamlessly 
                    integrating different components of a project. Alongside their technical expertise, they excel in client 
                    handling, ensuring effective communication and collaboration to deliver successful solutions tailored to clients' needs.
                     Their versatile skill set and client-centric approach
                     make them an invaluable asset in delivering comprehensive and impactful results.</p>
        </div>
        <div className='col-md-6'>
            <img src={Work} className='greet-img' alt="Header-image"/>
        </div>
      
    </div>
  )
}

export default Home
