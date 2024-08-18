import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Services.css';


const servicesData = [
  {
    title: 'SEO for Software in Bihar',
    description: {
      en: 'Our SEO experts tailor strategies to boost your software\'s visibility online. By focusing on targeted keywords, local SEO practices, and high-quality content, we ensure your software stands out in Bihar’s competitive market.',
      hi: 'हमारे SEO विशेषज्ञ आपकी सॉफ़्टवेयर की ऑनलाइन दृश्यता बढ़ाने के लिए रणनीतियाँ तैयार करते हैं। लक्षित कीवर्ड, स्थानीय SEO प्रथाओं और उच्च गुणवत्ता वाली सामग्री पर ध्यान केंद्रित करके, हम सुनिश्चित करते हैं कि आपकी सॉफ़्टवेयर बिहार के प्रतिस्पर्धी बाजार में खड़ा हो।'
    },
    image: 'seoImage'
  },
  {
    title: 'Web Development in Patna',
    description: {
      en: 'From sleek, modern websites to complex web applications, our web development team in Patna delivers custom solutions that are not only visually appealing but also highly functional. We use the latest technologies to ensure your website meets the highest standards.',
      hi: 'चिकना, आधुनिक वेबसाइटों से लेकर जटिल वेब एप्लिकेशन तक, पटना में हमारी वेब विकास टीम कस्टम समाधान प्रदान करती है जो न केवल दृश्यात्मक रूप से आकर्षक हैं बल्कि अत्यधिक कार्यात्मक भी हैं। हम नवीनतम तकनीकों का उपयोग करते हैं यह सुनिश्चित करने के लिए कि आपकी वेबसाइट उच्चतम मानकों को पूरा करे।'
    },
    image: 'webDevImage'
  },
  {
    title: 'Software Solutions in Arrah',
    description: {
      en: 'Our software development services in Arrah are designed to address your unique business needs. Whether you require custom software, integration with existing systems, or mobile applications, our team delivers solutions that drive efficiency and growth.',
      hi: 'अरrah में हमारे सॉफ़्टवेयर विकास सेवाएँ आपकी अद्वितीय व्यावसायिक आवश्यकताओं को पूरा करने के लिए डिज़ाइन की गई हैं। चाहे आपको कस्टम सॉफ़्टवेयर की आवश्यकता हो, मौजूदा सिस्टम के साथ एकीकरण, या मोबाइल एप्लिकेशन, हमारी टीम ऐसे समाधान प्रदान करती है जो दक्षता और विकास को प्रेरित करते हैं।'
    },
    image: "softwareImage"
  }
];

const Services = () => {


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


  return (
    <div className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>At Erabyte Digital Marketing Agency, we are dedicated to growing your business with our specialized services. Here’s how we can help:</p>
      </header>
      
      {servicesData.map((service, index) => (
        <section key={index} className="service">
          <img src={service.image} alt="" className="service-image" />
          <div className="service-content">
            <h2>{service.title}</h2>
            <div className="service-description">
              <p>{service.description.en}</p>
              <p>{service.description.hi}</p>
            </div>
          </div>
        </section>
      ))}
      
      <footer className="services-footer">
        <p>Contact us today to find out how we can help your business thrive!</p>
      </footer>
    </div>
  );
};

export default Services;
