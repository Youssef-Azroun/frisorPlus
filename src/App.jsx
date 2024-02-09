import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';

function Content() {
  return (
    <div className="content">
      <p>
        Welcome to Frisör Plus, where every visit is a journey to style excellence! Step into the world of premium grooming and discover the artistry of our barbers. Elevate your experience further by downloading our exclusive app from the Play Store and App Store – your key to convenience and personalized perfection. Let's craft the perfect look together!
      </p>
    </div>
  );
}
// test
function App() {
  return (
    <div>
      <Helmet>
        <title>Frisör Plus</title>
        <link rel="icon" href="/images/logo.png" />
      </Helmet>
      <div className="header">
        <h1>Frisör Plus</h1>
      </div>
      <Content />
      <div className="footer-text">
        <p>
          If you would like to delete your account along with all associated data, kindly reach out to our dedicated customer support team at <a href="mailto:youssef.help2@gmail.com">youssef.help2@gmail.com</a>. We're here to assist you in ensuring a seamless process for your account management.
        </p>
      </div>
    </div>
  );
}

export default App;
