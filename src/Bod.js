import React from 'react';
import Card from './Card';

function Bod(props) {

    const users= [
        { name:'Data Analyst '},
        { name:'Project Manager '},
        { name:'Data Analyst '},
        { name:'Software Engineer '},
        { name:'Web Developer '},
        { name:'Fullstack Developer '}
     
        
    ]
    return (
        <>
        
        <div className='container mx-auto border-x-2 border-stone-950'>
            <div className='text-center '>
            <h1 className='text-4xl font-bold p-8 '>Find a career that works for you</h1>
            <p>Whatever your background or interests are, Professional Certificates have you covered.</p>
            <p className='font-bold p-4'>Filter by job category</p>
            <div>
                <button type="button" className='border border-black hover:bg-sky-300 duration-500 px-4 mx-4 my-1 rounded-xl'>All Careers</button>
                <button type="button" className='border border-black hover:bg-sky-300 duration-500 px-4 mx-4 my-1 rounded-xl'>Software Engineering & It</button>
                <button type="button" className='border border-black hover:bg-sky-300 duration-500 px-4 mx-4 my-1 rounded-xl'>Business</button>
                <button type="button" className='border border-black hover:bg-sky-300 duration-500 px-4 mx-4 my-1 rounded-xl'>Sales & Marketing</button>
                <button type="button" className='border border-black hover:bg-sky-300 duration-500 px-4 mx-4 my-1 rounded-xl'>Data Science & Analytics</button>


            </div>
                
            </div>

        </div>
        
        {/* {
            users.map((item,i)=>
            <Card data={item} />
             )
        } */}

        <div className='grid grid-cols-3  border-x-2 border-stone-950 '>
        {
            users.map(function(day)
            {
                return <Card   name={day.name} />
                    
                    
            })

        }
       </div>
        
        </>
    );
}

export default Bod;