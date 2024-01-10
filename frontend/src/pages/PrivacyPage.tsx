import React from 'react';
import { CSSProperties } from 'react';

const PrivacyPageStyles: Record<string, CSSProperties> = {
  container: {
    backgroundColor: '#eceff1',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px',
    textAlign: 'center' as const,
  },
  heading: {
    color: '#37474f',
    marginBottom: '10px'
  },
  paragraph: {
    color: '#62727b',
    fontSize: '18px',
    lineHeight: '1.6'
  },
  strong: {
    color: '#102027'
  }
};

const PrivacyPage = () => {
    return (
      <div style={PrivacyPageStyles.container}>
        <h2 style={PrivacyPageStyles.heading}>The "Privacy" Policy of a Learner's Sandbox</h2>
        <p style={PrivacyPageStyles.paragraph}>
          Welcome to the safest place on the internet – my learning sandbox! Here in this cozy corner of the 
          digital world, we're all about learning, breaking, fixing, and occasionally pulling our hair out.
        </p>
        <p style={PrivacyPageStyles.paragraph}>
          In this sandbox, the only cookies you'll find are the virtual ones (and sadly, they're not edible). 
          We don't track, we don't snoop, and we certainly don't sell your data to shady third-party vendors 
          because, frankly, we don't have any. Our data collection policy is simple: what data? 
        </p>
        <p style={PrivacyPageStyles.paragraph}>
          So, worry not about privacy concerns – the only thing we're mining here is knowledge (and occasionally 
          some Stack Overflow answers). Sit back, relax, and enjoy this journey through the realms of 
          <strong style={PrivacyPageStyles.strong}> TypeScript</strong>, <strong style={PrivacyPageStyles.strong}>React</strong>, 
          <strong style={PrivacyPageStyles.strong}>Express</strong>, and <strong style={PrivacyPageStyles.strong}>MongoDB</strong>.
          Let's crack the code to creating a fabulous authentication system, minus the privacy headaches!
        </p>
      </div>
    );
  };
  

export default PrivacyPage;
