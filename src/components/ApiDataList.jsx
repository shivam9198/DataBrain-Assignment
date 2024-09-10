import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchDataWithAxios = () => {
  const [data, setData] = useState([]); 

  
  useEffect(() => {
    axios.get("https://dummyjson.com/products")  
      .then((response) => {
        setData(response.data.products);  
      })
      .catch((error) => {
        console.error("Error fetching data:", error); 
      });
  }, []);  

  return (
    <div className='w-full h-full bg-zinc-900'>
      <h1 className='text-3xl font-semibold text-center mt-7 mb-1'>Fetched Data with Axios:</h1>
      
      <ul className=''>
        {data.map((item) => (
          <li key={item.id} className='mb-4'>
            <div className='w-full p-3   rounded-md'>
              <h3 className='text-xs font-semibold'><span className='font-bold text-1xl'>Title:</span> {item.title}</h3>
              <h3 className='text-xs font-semibold'>Price: ${item.price}</h3>
              <hr></hr>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDataWithAxios;
