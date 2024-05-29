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
        <div className='grid grid-cols-3 my-16  flex flex-row '>
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