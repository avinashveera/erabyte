import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './DigitalMarketingPage.css'; // Import your custom CSS for styling

const DigitalMarketingPage = () => {
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
    <div className="digital-marketing-page">
      <h1 className="page-title">
        Why Digital Marketing for Your Business? / आपके व्यवसाय के लिए डिजिटल मार्केटिंग क्यों?
      </h1>

      <section className="marketingsection">
        <img
          src="https://img.freepik.com/premium-vector/modern-3d-illustration-young-man-digital-marketing-concept_145666-1708.jpg"
          alt="Digital Marketing"
          className="section-image"
        />
        <div className="section-content">
          <h2>Why Digital Marketing? / डिजिटल मार्केटिंग क्यों?</h2>
          <p>
            Digital marketing is essential for any business in today’s digital age. It allows you to reach a larger audience, target specific demographics, and measure your marketing efforts in real time. By utilizing various digital channels such as search engines, social media, and email, you can effectively promote your products and services and gain a competitive edge.
          </p>
          <p>
            डिजिटल मार्केटिंग आज के डिजिटल युग में किसी भी व्यवसाय के लिए आवश्यक है। यह आपको बड़े दर्शकों तक पहुंचने, विशिष्ट जनसांख्यिकी को लक्षित करने और अपने मार्केटिंग प्रयासों को वास्तविक समय में मापने की अनुमति देता है। सर्च इंजन, सोशल मीडिया और ईमेल जैसे विभिन्न डिजिटल चैनलों का उपयोग करके, आप प्रभावी ढंग से अपने उत्पादों और सेवाओं को बढ़ावा दे सकते हैं और प्रतिस्पर्धात्मक बढ़त प्राप्त कर सकते हैं।
          </p>
        </div>
      </section>

      <section className="marketingsection">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-working-marketing_23-2150417376.jpg"
          alt="Business Growth"
          className="section-image"
        />
        <div className="section-content">
          <h2>How Digital Marketing Can Grow Your Business / डिजिटल मार्केटिंग आपके व्यवसाय को कैसे बढ़ा सकती है</h2>
          <p>
            Digital marketing can significantly boost your business growth by increasing your online visibility, attracting new customers, and retaining existing ones. Through effective SEO, content marketing, and targeted advertising, you can enhance your brand’s presence and drive more traffic to your website.
          </p>
          <p>
            डिजिटल मार्केटिंग आपके व्यवसाय के विकास को महत्वपूर्ण रूप से बढ़ा सकती है, जिससे आपकी ऑनलाइन दृश्यता बढ़ती है, नए ग्राहकों को आकर्षित करती है और मौजूदा ग्राहकों को बनाए रखती है। प्रभावी SEO, कंटेंट मार्केटिंग और लक्षित विज्ञापन के माध्यम से, आप अपने ब्रांड की उपस्थिति को बढ़ा सकते हैं और अपनी वेबसाइट पर अधिक ट्रैफ़िक चला सकते हैं।
          </p>
        </div>
      </section>

      <section className="marketingsection">
        <img
          src="https://img.freepik.com/free-photo/3d-rendering-cinema_23-2150985253.jpg"
          alt="Growth Process"
          className="section-image"
        />
        <div className="section-content">
          <h2>How I Work to Grow Your Business Digitally / मैं आपके व्यवसाय को डिजिटल रूप से कैसे बढ़ाता हूँ</h2>
          <p>
            My approach to growing your business digitally involves a comprehensive strategy that includes market research, competitor analysis, and the implementation of tailored digital marketing techniques. I focus on understanding your business goals and creating a customized plan to achieve them through effective online channels.
          </p>
          <p>
            आपके व्यवसाय को डिजिटल रूप से बढ़ाने के लिए मेरा दृष्टिकोण एक समग्र रणनीति शामिल करता है जिसमें बाजार अनुसंधान, प्रतिस्पर्धी विश्लेषण और अनुकूलित डिजिटल मार्केटिंग तकनीकों का कार्यान्वयन शामिल है। मैं आपके व्यवसाय के लक्ष्यों को समझने और प्रभावी ऑनलाइन चैनलों के माध्यम से उन्हें प्राप्त करने के लिए एक कस्टम योजना बनाने पर ध्यान केंद्रित करता हूँ।
          </p>
        </div>
      </section>

      <section className="marketingsection">
        <img
          src="https://img.freepik.com/premium-vector/3d-social-media-platform-online-social-communication-applications-concept-emoji-hearts-chat-chart-with-smartphone-background-3d-vector-illustration_145666-1640.jpg?semt=ais_hybrid"
          alt="Social Media Campaign"
          className="section-image"
        />
        <div className="section-content">
          <h2>How I Handle Social Media Campaigns / मैं सोशल मीडिया कैम्पेन कैसे संभालता हूँ</h2>
          <p>
            I manage social media campaigns by creating engaging content, running targeted ads, and analyzing campaign performance. My goal is to build your brand’s online presence, increase engagement with your audience, and drive conversions through strategic social media efforts.
          </p>
          <p>
            मैं सोशल मीडिया कैम्पेन को आकर्षक कंटेंट बनाने, लक्षित विज्ञापन चलाने और कैम्पेन के प्रदर्शन का विश्लेषण करके प्रबंधित करता हूँ। मेरा लक्ष्य आपके ब्रांड की ऑनलाइन उपस्थिति को बनाना, अपने दर्शकों के साथ जुड़ाव बढ़ाना और रणनीतिक सोशल मीडिया प्रयासों के माध्यम से रूपांतरण को बढ़ाना है।
          </p>
        </div>
      </section>

      <section className="marketingsection">
        <img
          src="https://media.licdn.com/dms/image/C4E12AQFjqgctMyvlZA/article-cover_image-shrink_600_2000/0/1537942432653?e=2147483647&v=beta&t=pNlVpNtdIlIBK5wFnq2lWTVR76Dqk_OxlGeZ4bw8Zog"
          alt="Brand Establishment"
          className="section-image"
        />
        <div className="section-content">
          <h2>Establish Your Brand / अपने ब्रांड को स्थापित करें</h2>
          <p>
            Establishing your brand involves creating a strong brand identity and positioning it effectively in the market. I help you build a memorable brand through consistent messaging, high-quality content, and a strategic approach to digital marketing that resonates with your target audience.
          </p>
          <p>
            अपने ब्रांड को स्थापित करना एक मजबूत ब्रांड पहचान बनाने और इसे प्रभावी ढंग से बाजार में स्थित करने में शामिल होता है। मैं आपको एक यादगार ब्रांड बनाने में मदद करता हूँ जो आपके लक्षित दर्शकों के साथ गूंजता है, लगातार संदेश, उच्च गुणवत्ता वाली सामग्री, और डिजिटल मार्केटिंग के रणनीतिक दृष्टिकोण के माध्यम से।
          </p>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
