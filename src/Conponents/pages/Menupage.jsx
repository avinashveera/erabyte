import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Menulink.css'; 
import {webdevlopment} from './Menulinkdata'
import Menucard from './Menucard';
const Webapp = () => {

  const [loading, setLoading] = useState(true);

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#f5f5f5',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }


  console.log(webdevlopment.data.length)
  return (
    <div className="Linkcontainer">
      <header className="Linkheader">
        <h1>{webdevlopment.heading}</h1>
      </header>
      
      <section className="Linkservices">
      
      {
        webdevlopment.data.map((data)=>{


          return <>
          <Menucard 
          img={data.img}
          h5={data.h5}
          p={data.p}
          price={data.price}
          />
          </> 


        })
      }
        
      </section>
      

    </div>
  );
}

export default Webapp;
