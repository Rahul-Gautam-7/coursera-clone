import React from 'react'
import Institute from './Institute';

function Online_learning() {
  const data=[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
       
  ]
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='grid grid-cols-5 my-16 ml-24 '>
         {data.map(function(s)
            {
              return <Institute />
            }
    
             )}
      </div>
    </div>
  </div>
    </>
  )
}
export default Online_learning;