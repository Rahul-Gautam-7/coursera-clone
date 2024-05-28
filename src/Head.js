import React from 'react';
import logo from './images/logo.jpg';

function Head() {
    return (
        <div className='container mx-auto border-2 border-stone-950'>
            <div className='grid grid-cols-3'>
            <div className='col-span-2 p-9 space-y-8'>
            <h1 className='  text-6xl  font-bold'>Launch your new career with a Professional Certificate on Coursera</h1>
            <p>Professional Certificates offer flexible, online training designed to get you job-ready for high-growth fields.</p>
            <span className='font-bold'>7-day free trial | Starting at $49 per month | Less than 6 months at your own pace</span><br/>
            <button type='button'  className='transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none bg-sky-500 '>Explore Here</button>
            </div>
            <img src={logo}  className='p-9 '></img>
           
            </div>
        </div>
        
    );
}

export default Head;