import knowledge from './knowledge.png';
import profile from './profile.jpg';
import './color.css'

import React from 'react';


function My_learning() {


    return(
        <>

            

            {/* <div className='container' >
                
                <h2>My Learning</h2>
                

                <button type="button" class="btn btn-secondary color " style={{"borderRadius":"50px","color":"white","paddingRight":"9px","marginTop":"10px"}}>In Progress</button>


                <button   type="button" class="btn btn-outline-dark  colors" style={{"borderRadius":"20px","marginLeft":"15px","marginTop":"10px"}}>Completed</button>
                <div className='row'>
                    <div className='col-6'>
                        <img src={knowledge} style={{"height":"120px","width":"140px","marginTop":"30px"}}></img>
                        <h6 style={{"display":"inline-flex","marginLeft":"70px","fontSize":"18px",}}>You will find your in-progress courses here.</h6>
                    </div>
                    <div className='col-6'style={{"marginTop":"55px"}}>
                        <div className='row border border-left-0'style={{"boxShadow":"1px 1px 3px #7c7e7a","borderColor":"#d6d6d6"}}  >
                                <div className='col-3' style={{"marginLeft":"-13px"}}>
                                    <img src={profile} style={{"height":"180px","width":"130px"}}></img>
                                </div>
                                <div className='col-9'>
                                        <figure class="text-end">
                                            <blockquote class="blockquote" >
                                                <p style={{"fontSize":"13px","marginTop":"50px"}}>The courses I took on Coursera are directly applicable to my job. They enable me to learn things I can use at work immediately.</p>
                                            </blockquote>
                                            <figcaption class="blockquote-footer">
                                                 <cite title="Source Title"> Kathleen B.</cite>
                                            </figcaption>
                                        </figure>
                                </div>
                        </div>
                    </div>

            </div>
            </div> */}

<div className='container mx-auto sm:px-4' >
                
                <h2>My Learning</h2>
                

                <button type="button" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-600 text-white hover:bg-gray-700 color " style={{"borderRadius":"50px","color":"white","paddingRight":"9px","marginTop":"10px"}}>In Progress</button>


                <button   type="button" class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-gray-900 border-gray-900 hover:bg-gray-900 hover:text-white bg-white hover:bg-gray-900  colors" style={{"borderRadius":"20px","marginLeft":"15px","marginTop":"10px"}}>Completed</button>
                <div className='flex flex-wrap '>
                    <div className='w-1/2'>
                        <img src={knowledge} style={{"height":"120px","width":"140px","marginTop":"30px"}}></img>
                        <h6 style={{"display":"inline-flex","marginLeft":"70px","fontSize":"18px",}}>You will find your in-progress courses here.</h6>
                    </div>
                    <div className='w-1/2'style={{"marginTop":"55px"}}>
                        <div className='flex flex-wrap  border border-l-0'style={{"boxShadow":"1px 1px 3px #7c7e7a","borderColor":"#d6d6d6"}}  >
                                <div className='w-1/4' style={{"marginLeft":"-13px"}}>
                                    <img src={profile} style={{"height":"180px","width":"130px"}}></img>
                                </div>
                                <div className='w-3/4'>
                                        <figure class="text-end">
                                            <blockquote class="mb-6 text-lg" >
                                                <p style={{"fontSize":"13px","marginTop":"50px"}}>The courses I took on Coursera are directly applicable to my job. They enable me to learn things I can use at work immediately.</p>
                                            </blockquote>
                                            <figcaption class="block text-gray-">
                                                 <cite title="Source Title"> Kathleen B.</cite>
                                            </figcaption>
                                        </figure>
                                </div>
                        </div>
                    </div>

            </div>
            </div>
        </>


    )
}
export default My_learning;