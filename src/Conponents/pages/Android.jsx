import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Android.css'; // Import your custom CSS for styling

const AndroidDevelopmentPage = () => {
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
    <div className="android-development-page">
      <h1 className="page-title">
        Why Android Development for Your Business? / आपके व्यवसाय के लिए एंड्रॉइड डेवलपमेंट क्यों?
      </h1>

      <section className="Andsection">
        <img
          src="https://welldoneby.com/blog/wp-content/uploads/2021/05/66.png"
          alt="Android Development"
          className="section-image"
        />
        <div className="section-content">
          <h2>Why Android Development? / एंड्रॉइड डेवलपमेंट क्यों?</h2>
          <p>
            Android development is crucial for businesses looking to reach a broad audience on mobile devices. With Android being the most popular mobile operating system globally, developing an Android app can significantly increase your reach and engage with potential customers more effectively.
          </p>
          <p>
            एंड्रॉइड डेवलपमेंट उन व्यवसायों के लिए महत्वपूर्ण है जो मोबाइल डिवाइस पर एक व्यापक दर्शकों तक पहुंचना चाहते हैं। एंड्रॉइड विश्व स्तर पर सबसे लोकप्रिय मोबाइल ऑपरेटिंग सिस्टम होने के कारण, एक एंड्रॉइड ऐप विकसित करने से आपकी पहुंच में काफी वृद्धि हो सकती है और संभावित ग्राहकों के साथ अधिक प्रभावी ढंग से जुड़ सकते हैं।
          </p>
        </div>
      </section>

      <section className="Andsection">
        <img
          src="https://images.prismic.io//intuzwebsite/2caf3e7f-1704-42e2-908f-3d089da3e3ac_The+Ultimate+Guide+to+Android+App+Development.png?w=1200&q=75&auto=format,compress&fm=png8"
          alt="Business Growth"
          className="section-image"
        />
        <div className="section-content">
          <h2>How Android Development Can Grow Your Business / एंड्रॉइड डेवलपमेंट आपके व्यवसाय को कैसे बढ़ा सकता है</h2>
          <p>
            Developing an Android app can drive business growth by providing an additional channel to interact with customers. It can enhance customer engagement, streamline processes, and offer new features or services that attract more users and boost your business performance.
          </p>
          <p>
            एंड्रॉइड ऐप विकसित करने से एक अतिरिक्त चैनल प्रदान करके व्यवसाय की वृद्धि को बढ़ावा मिल सकता है जिससे ग्राहकों के साथ बातचीत की जा सके। यह ग्राहक जुड़ाव को बढ़ा सकता है, प्रक्रियाओं को सुगम बना सकता है और नई सुविधाएँ या सेवाएँ प्रदान कर सकता है जो अधिक उपयोगकर्ताओं को आकर्षित करती हैं और आपके व्यवसाय की प्रदर्शन को बढ़ाती हैं।
          </p>
        </div>
      </section>

      <section className="Andsection">
        <img
          src="https://www.sigmasoftwares.org/images/icons/52.jpg"
          alt="Development Process"
          className="section-image"
        />
        <div className="section-content">
          <h2>How I Develop Android Apps for You / मैं आपके लिए एंड्रॉइड ऐप कैसे विकसित करता हूँ</h2>
          <p>
            My Android development process includes gathering requirements, designing user-friendly interfaces, coding the app, and rigorous testing to ensure it performs seamlessly across all devices. I focus on delivering a high-quality app that meets your business needs and enhances user experience.
          </p>
          <p>
            मेरा एंड्रॉइड डेवलपमेंट प्रक्रिया में आवश्यकताओं को एकत्रित करना, उपयोगकर्ता-मित्र इंटरफेस डिज़ाइन करना, ऐप को कोड करना और यह सुनिश्चित करने के लिए कठोर परीक्षण करना शामिल है कि यह सभी डिवाइसों पर सुचारू रूप से प्रदर्शन करता है। मैं एक उच्च गुणवत्ता वाले ऐप को प्रदान करने पर ध्यान केंद्रित करता हूँ जो आपके व्यवसाय की ज़रूरतों को पूरा करता है और उपयोगकर्ता अनुभव को बढ़ाता है।
          </p>
        </div>
      </section>
    </div>
  );
};

export default AndroidDevelopmentPage;
