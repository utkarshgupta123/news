import React from 'react'
import Db from '../Data/Db';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { positions } from '@mui/system';


const Bnotes = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const { id } = useParams('');
  console.log(id);


  useEffect(() => {
    let arr = Db.find(o => o.id == id);

    setData(arr);
  }, [id])
  // console.log(arr);

  return (
    <div className='container' style={{backgroundImage:`url(${data.url})`, backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <div className='heading'>
        <p>{data.title}</p>
        <p>{data.category}</p>
      </div>
      <p className='details'>{data.details}</p>
      <div className='ldetails'>
      <p>{data.longDetails}</p>
      </div>
    </div>
  )
}

export default Bnotes