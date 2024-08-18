import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import "./WebDevelopment.css"
const WebDevelopment = () => {

  
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
    <div className="web-development">
      <h1>Why Web Development is Crucial for Your Business / वेब विकास आपके व्यवसाय के लिए क्यों महत्वपूर्ण है</h1>

      <section className="service-section">
        <img 
          src="https://img.freepik.com/premium-vector/mobile-application-software-web-development-with-3d-shapes-bar-chart-infographic-pink-background-3d-vector-illustration_145666-1505.jpg" 
          alt="Web Development Overview" 
          className="service-image" 
        />
        <div>
        <h2>What is Web Development? / वेब विकास क्या है?</h2>
        <p>Web development involves creating and maintaining websites and web applications. It encompasses various aspects including web design, web content development, client-side/server-side scripting, and network security configuration. Effective web development ensures your online presence is strong, accessible, and user-friendly.</p>
        <p>वेब विकास में वेबसाइटों और वेब अनुप्रयोगों को बनाना और बनाए रखना शामिल है। इसमें वेब डिज़ाइन, वेब सामग्री विकास, क्लाइंट-साइड/सर्वर-साइड स्क्रिप्टिंग, और नेटवर्क सुरक्षा कॉन्फ़िगरेशन जैसी कई चीज़ें शामिल हैं। प्रभावी वेब विकास सुनिश्चित करता है कि आपकी ऑनलाइन उपस्थिति मजबूत, सुलभ, और उपयोगकर्ता के अनुकूल हो। </p>
     
        </div>
        </section>

      <section className="service-section">
        <img 
          src="https://media.istockphoto.com/id/1362508194/vector/modern-3d-illustration-of-web-development.jpg?s=612x612&w=0&k=20&c=FzoSgPjIPiPV7wFtCHCFDOehKVgOkDWVdgtZb8N797s=" 
          alt="Benefits of Web Development" 
          className="service-image" 
        />
       <div>
       <h2>Benefits of Professional Web Development / प्रोफेशनल वेब विकास के लाभ</h2>
        <ul>
          <li><strong>Enhanced User Experience:</strong> A well-designed website improves user experience and engagement. This leads to increased visitor retention and conversion rates.</li>
          <li><strong>Brand Credibility:</strong> A professionally developed website enhances your brand's credibility and trustworthiness, making it easier to attract and retain customers.</li>
          <li><strong>Search Engine Optimization (SEO):</strong> Proper web development includes SEO practices that help your website rank higher in search engine results, driving more organic traffic to your site.</li>
          <li><strong>Mobile Responsiveness:</strong> With mobile internet usage on the rise, ensuring your website is responsive and accessible on various devices is crucial for reaching a wider audience.</li>
          <li><strong>Scalability:</strong> A well-developed website is scalable, allowing you to add new features and functionalities as your business grows.</li>
          <li><strong>बेहतर उपयोगकर्ता अनुभव:</strong> एक अच्छी तरह से डिज़ाइन की गई वेबसाइट उपयोगकर्ता अनुभव और संलग्नता को सुधारती है। इससे आगंतुकों की प्रतिधारण और रूपांतरण दरें बढ़ जाती हैं।</li>
          <li><strong>ब्रांड विश्वसनीयता:</strong> एक पेशेवर रूप से विकसित वेबसाइट आपके ब्रांड की विश्वसनीयता और विश्वास को बढ़ाती है, जिससे ग्राहकों को आकर्षित और बनाए रखना आसान हो जाता है।</li>
          <li><strong>सर्च इंजन ऑप्टिमाइजेशन (SEO):</strong> उचित वेब विकास में SEO प्रथाओं को शामिल किया जाता है जो आपकी वेबसाइट को सर्च इंजन परिणामों में उच्च रैंक करने में मदद करती हैं, जिससे आपकी साइट पर अधिक ऑर्गेनिक ट्रैफिक प्राप्त होती है।</li>
          <li><strong>मोबाइल प्रतिक्रिया:</strong> मोबाइल इंटरनेट उपयोग में वृद्धि के साथ, यह सुनिश्चित करना कि आपकी वेबसाइट विभिन्न उपकरणों पर उत्तरदायी और सुलभ हो, एक व्यापक दर्शक वर्ग तक पहुंचने के लिए महत्वपूर्ण है।</li>
          <li><strong>स्केलेबिलिटी:</strong> एक अच्छी तरह से विकसित वेबसाइट स्केलेबल होती है, जिससे आप अपने व्यवसाय के बढ़ने के साथ नई सुविधाओं और कार्यक्षमताओं को जोड़ सकते हैं।</li>
        </ul>
       </div>
      </section>

      <section className="service-section">
        <img 
          src="https://img.freepik.com/premium-vector/3d-illustration-web-page-design-development-mobile-app-websites-deploy-working-creating-website_808510-1458.jpg" 
          alt="Web Development Trends" 
          className="service-image" 
        />
        <div>
        <h2>Current Trends in Web Development / वेब विकास में वर्तमान रुझान</h2>
        <p>Staying up-to-date with the latest web development trends ensures that your website remains relevant and competitive. Key trends include:</p>
        <p>अद्यतन वेब विकास रुझानों के साथ बने रहना यह सुनिश्चित करता है कि आपकी वेबसाइट प्रासंगिक और प्रतिस्पर्धात्मक बनी रहे। प्रमुख रुझान में शामिल हैं:</p>
        <ul>
          <li><strong>Progressive Web Apps (PWAs):</strong> These provide a native app-like experience on the web, improving user engagement.</li>
          <li><strong>AI and Chatbots:</strong> Integrating AI and chatbots for customer service can enhance user interaction and support.</li>
          <li><strong>Voice Search Optimization:</strong> Optimizing for voice search is becoming increasingly important as voice-activated devices become more common.</li>
          <li><strong>Dark Mode:</strong> Offering a dark mode option improves user comfort and can make your website more visually appealing.</li>
          <li><strong>प्रोग्रेसिव वेब ऐप्स (PWAs):</strong> ये वेब पर एक मूल ऐप जैसी अनुभव प्रदान करते हैं, जिससे उपयोगकर्ता संलग्नता में सुधार होता है।</li>
          <li><strong>AI और चैटबॉट्स:</strong> ग्राहक सेवा के लिए AI और चैटबॉट्स को एकीकृत करना उपयोगकर्ता इंटरैक्शन और समर्थन को बेहतर बना सकता है।</li>
          <li><strong>वॉयस सर्च ऑप्टिमाइजेशन:</strong> वॉयस-सक्रिय उपकरणों के सामान्य होने के साथ, वॉयस सर्च के लिए ऑप्टिमाइजेशन करना महत्वपूर्ण होता जा रहा है।</li>
          <li><strong>डार्क मोड:</strong> डार्क मोड का विकल्प प्रदान करना उपयोगकर्ता की सुविधा को बेहतर बनाता है और आपकी वेबसाइट को अधिक दृश्यात्मक रूप से आकर्षक बना सकता है।</li>
        </ul>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;
