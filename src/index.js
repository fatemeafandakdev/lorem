import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import data from './Data';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div className='background'>
 <App  data={data}/>
 </div>
   
  
);

