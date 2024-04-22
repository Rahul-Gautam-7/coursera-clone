import React from 'react';

function Card(props) {
   
   
    
    return (    
       <>
    <div className="block rounded-lg bg-white shadow-secondary-1  dark:bg-surface-dark h-4/6 w-4/6 m-2 ">
  <div
    className="relative overflow-hidden bg-cover bg-no-repeat"
    data-twe-ripple-init=""
    data-twe-ripple-color="light"
  >
    <img
      className="rounded-t-lg "
      src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
      alt=""
    />
    <a href="#!">
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100" />
    </a>
  </div>
  <div className=" text-surface dark:text-white">
    <h5 className="m-2 text-xl font-medium leading-tight">{props.name}</h5>
    <p className="my-4 text-base">
    Collect, organize, and transform data to make informed decisions.
    </p>
    <p className='my-3'>Great if you like:
      <p style={{ display:'flex' }}>
        <p className='bg-gray-200 m-1 p-1'>Attention to detail</p>
        <p className='bg-gray-200 m-1 p-1'> Problem solving</p>
        <p className='bg-gray-200 m-1 p-1'>Working with numbers</p>
      </p>  
    </p>
    <div className='my-10'>
    <a href='' className="bg-orange-500 text-white text-4 rounded p-[10px] hover:bg-blue-300 hover:text-black duration-700">
      Google Data Analytics
    </a>
    </div>
    <div className='my-10'>
    <a href='' className="bg-orange-500 text-white text-4 rounded p-[10px] hover:bg-blue-300 hover:text-black duration-700">
     IBM  Data Analyst
    </a>
    </div>
    <div className='my-10'>
    <a href='' className="bg-orange-500 text-white text-4 rounded p-[10px] hover:bg-blue-300 hover:text-black duration-700">
      IBM Data Analytics with Excel and R
    </a>
    </div>
  </div>
    </div>
    </>
    );
}

export default Card;