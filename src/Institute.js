import React from 'react'
import college from './images/college.jpg';

function Institute() {

  return (
    <>
      <div className="card " style={{ "width": "18rem","padding":"5px","border":"2px solid #d0d2d6","borderRadius":"7%"}}>
        <img src={college} className="card-img-top " alt="..." style={{"borderRadius":"10%"}}/>
        <div className="card-body">
          <p className="card-text">Indian Institute of Technology Guwahati</p>
          <h5 className="card-title">Bachelor of science in Data science & AI</h5>
          <p className="card-text">48 -95 months .Applications now open</p>
        </div>
      </div>
    </>
  )
}
export default Institute;