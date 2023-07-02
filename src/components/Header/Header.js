import React from 'react'
import "./Header.css"
import Navbar from '../Navbar/Navbar'

const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <Navbar/>
                <div className="cta">
                    <div className='title-secondary'>YOUR</div>
                    <div className='title-main'> PACE </div>
                    <p className='description'>
                        "Revolutionize your visual content with our cutting-edge AI image generation technology. Enhance your brand with unique and captivating visuals, made easy with our AI platform."
                    </p>
                    <div className="list-wrapper">
                        <ul>
                            <li>Take A Look</li>
                            <li>3D Art</li>
                            <li>AI Image Generation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header