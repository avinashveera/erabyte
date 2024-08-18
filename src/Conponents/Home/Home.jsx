import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Head from './Head';
import Slider from '../slider/Slider';
import Chooseus from './Chooseus';
import Gettouch from './Gettouch';
import TestimonialSlider from '../Testmonial/Testmonial';
import Howiwork from '../Howiwork';

const Home = () => {
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
          backgroundColor: '#f5f5f5'
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <Slider />
      <Head />
      <Gettouch />
      <Chooseus />
      <Howiwork />
      <TestimonialSlider />
    </>
  );
};

export default Home;
