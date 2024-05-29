import React from 'react'

function Navbar() {
    return (
        <>
            <div className="container mx-auto sm:px-4">
                {/*NAVBAR*/}
                <div className="flex flex-wrap ">
                    <div className="col-">
                        <nav className="relative flex flex-wrap items-center content-between py-3 px-4  bg-body-tertiary">
                            <div className="container mx-auto sm:px-4 max-w-full mx-auto sm:px-4">
                                <a className="inline-block pt-1 pb-1 mr-4 text-lg whitespace-no-wrap" style={{ fontWeight: "bold", fontSize: 30 }} href="#">
                                    coursera
                                </a>
                                <button className="py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                                    <span className="px-5 py-1 border border-gray-600 rounded" />
                                </button>
                                <div className="hidden flex-grow items-center" id="navbarSupportedContent">
                                    <ul className="flex flex-wrap list-reset pl-0 mb-0 me-auto mb-2 lg:mb-0">
                                        <li className=" relative">
                                            <a className="inline-block py-2 px-4 no-underline  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1" style={{ border: "1px solid blue", borderRadius: 5, padding: "5px 15px" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                                Explore
                                            </a>
                                            <ul className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded">
                                                <li>
                                                    <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <hr className="h-0 my-2 overflow-hidden border-t-1 border-gray-300" />
                                                </li>
                                                <li>
                                                    <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <form className="flex" role="search">
                                        <input className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded me-2 " style={{ borderRadius: 50, width: 500, margin: "0 15px" }} type="search" placeholder="What do you want to learn?" aria-label="Search" />
                                        <img src="image/search.png" style={{ height: 25, backgroundColor: "blue", borderRadius: "50%", margin: "6px 0 0 -47px" }} />
                                        {/* <button class="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline text-green-500 border-green-500 hover:bg-green-500 hover:text-white bg-white hover:green-600" type="submit">Search</button> */}
                                    </form>
                                    <img src="image/internet.png" style={{ height: 25, margin: "0 -12px 0 145px" }} alt=""/>
                                    <a className="inline-block py-2 px-4 no-underline  inline-block w-0 h-0 ml-1 align border-b-0 border-t-1 border-r-1 border-l-1" style={{ color: "gray" }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        English
                                    </a>
                                    <ul className=" absolute left-0 z-50 float-left hidden list-reset	 py-2 mt-1 text-base bg-white border border-gray-300 rounded">
                                        <li>
                                            <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="h-0 my-2 overflow-hidden border-t-1 border-gray-300" />
                                        </li>
                                        <li>
                                            <a className="block w-full py-1 px-6 font-normal text-gray-900 whitespace-no-wrap border-0" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                    <img src="image/bell.png" style={{ height: 25 }} alt="" />
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <hr />
                {/*--------------------------------------------------------------------------------------------------------------------*/}
                <h4>Get Started with These Free Courses</h4>
                <div className="flex flex-wrap  " style={{ margin: 15 }}>
                    {/*card-1*/}
                    <div className="w-1/4 c_h" style={{ position: "relative", zIndex: 0 }}>
                        <p style={{ position: "absolute", top: 15, left: "200px z-index: 10", backgroundColor: "#fff", border: "1px solid black"}}>
                            Free
                        </p>
                        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300" style={{ width: "18rem" }}>
                            <img  src="image/card_2.jpeg" className="w-full rounded rounded-t" alt="..." />
                            <div className="flex-auto p-6">
                                <h5 className="mb-3">Card title</h5>
                                <p className="mb-0">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </p>
                                <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                    Go somewhere
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*card-2*/}
                    <div className="w-1/4 ">
                        <div className="w-1/4">
                            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300" style={{ width: "18rem" }}>
                                <img src="image/card_1.jpeg" className="w-full rounded rounded-t" alt="..." />
                                <div className="flex-auto p-6">
                                    <h5 className="mb-3">Card title</h5>
                                    <p className="mb-0">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </p>
                                    <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*card-3*/}
                    <div className="w-1/4">
                        <div className="w-1/4">
                            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300" style={{ width: "18rem" }}>
                                <img src="image/card_2.jpeg" className="w-full rounded rounded-t" alt="..." />
                                <div className="flex-auto p-6">
                                    <h5 className="mb-3">Card title</h5>
                                    <p className="mb-0">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </p>
                                    <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*card-4*/}
                    <div className="w-1/4">
                        <div className="w-1/4">
                            <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300" style={{ width: "18rem" }}>
                                <img src="image/card_1.jpeg" className="w-full rounded rounded-t" alt="..." />
                                <div className="flex-auto p-6">
                                    <h5 className="mb-3">Card title</h5>
                                    <p className="mb-0">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </p>
                                    <a href="#" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600">
                                        Go somewhere
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*--------------------------------------------------------------------------------------------------------------------*/}
                <div className="flex flex-wrap  g-2" style={{ margin: 15 }}>
                    <div className="w-1/3" style={{ backgroundColor: "rgb(7, 7, 87)", borderRadius: 10, color: "white", padding: "20px 0 10px 10px" }} >
                        <p>Art and Humanities</p>
                    </div>
                    <div className="w-1/3" style={{ backgroundColor: "rgb(7, 7, 87)", borderRadius: 10, color: "white", padding: "20px 0 10px 10px" }} >
                        <p>Art and Humanities</p>
                    </div>
                    <div className="w-1/3" style={{backgroundColor: "rgb(7, 7, 87)",borderRadius: 10,color: "white",padding: "20px 0 10px 10px" }}>
                        <p>Art and Humanities</p>
                    </div>
                </div>
                <div className="flex flex-wrap  g-2" style={{ margin: 15 }}>
                    <div className="w-1/3 " style={{ backgroundColor: "rgb(7, 7, 87)", borderRadius: 10, color: "white", padding: "20px 0 10px 10px" }} >
                        <p>Art and Humanities</p>
                    </div>
                    <div className="w-1/3" style={{ backgroundColor: "rgb(7, 7, 87)", borderRadius: 10, color: "white", padding: "20px 0 10px 10px"}} >
                        <p>Art and Humanities</p>
                    </div>
                    <div className="w-1/3" style={{ backgroundColor: "rgb(7, 7, 87)", borderRadius: 10, color: "white", padding: "20px 0 10px 10px" }}>
                        <p>Art and Humanities</p>
                    </div>
                </div>
                <div className="flex flex-wrap  g-2" style={{ margin: 15 }}>
                    <div className="w-1/3 gx-5" style={{ backgroundColor: "rgb(7, 7, 87)", borderRadius: 10, color: "white", padding: "20px 0 10px 10px"}}  >
                        <p>Art and Humanities</p>
                    </div>
                    <div className="w-1/3" style={{backgroundColor: "rgb(7, 7, 87)",borderRadius: 10,color: "white",padding: "20px 0 10px 10px"}}>
                        <p>Art and Humanities</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Navbar