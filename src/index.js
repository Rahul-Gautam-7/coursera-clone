import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import My_learning from './My_learning';
import Online_learning from './Online_learning';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  
  
    <BrowserRouter >
    <a href='/login' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> login </a>
    <a href='/app'className='mx-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'> App </a>
    <a href='/learning' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> My_learning </a>
    <a href='/onlinelearning'className='mx-4 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'> online learning </a>


    <Routes>

    <Route  path='/login' element={<Login />}  />
      <Route  path='/app' element={<App />}  />
      <Route path='/learning' element={<My_learning />} />
      <Route path='/onlinelearning' element={<Online_learning />} />

    </Routes>
    
    </BrowserRouter>
 
    
  
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

