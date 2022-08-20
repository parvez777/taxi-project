import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='Hero'>
            <div className="content">
                <h3>Call Us Any Time At:</h3>
                <h1>987-654-321 <span>or</span></h1>
                <h1>456-789-321</h1>
                <button>Call Now</button>
            </div>
            <div className="content1"></div>
        </div>
    );
};

export default Hero;