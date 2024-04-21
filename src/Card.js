import React from 'react';

function Card(props) {
   
   
    
    return (
      
       <>
       
    <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark h-3/6 w-3/6 ">
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
  <div className="p-6 text-surface dark:text-white">
    <h5 className="mb-2 text-xl font-medium leading-tight">{props.name},{props.id}</h5>
    <p className="mb-4 text-base">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <button className="bg-orange-500 text-white text-4xl rounded p-[10px] hover:bg-blue-300 hover:text-black duration-700">
      Submit
    </button>
  </div>
</div>


       </>
    );
}

export default Card;