import React from 'react';
import { CSSProperties } from 'react';

const PurposeBannerStyles: Record<string, CSSProperties> = {
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

const PurposeBanner = () => {
  return (
    <div style={PurposeBannerStyles.container}>
      <h2 style={PurposeBannerStyles.heading}>Exploring the World of Authentication</h2>
      <p style={PurposeBannerStyles.paragraph}>
        Welcome to my journey of learning and discovery! This platform serves as my personal sandbox where 
        I am diving into the fascinating world of web development. The primary goal here is to learn how to 
        build a robust authentication system, using a modern tech stack consisting of <strong style={PurposeBannerStyles.strong}>TypeScript</strong>, 
        <strong style={PurposeBannerStyles.strong}>React</strong>, <strong style={PurposeBannerStyles.strong}>Express</strong>, and 
        <strong style={PurposeBannerStyles.strong}>MongoDB</strong>.
      </p>
      <p style={PurposeBannerStyles.paragraph}>
        As a learner, I am embracing both the challenges and triumphs that come with developing an 
        authentication application. This endeavor is not just about coding; it's about understanding the 
        security and functionality aspects that make for a great user experience. Join me on this exciting 
        path of growth and learning!
      </p>
    </div>
  );
};

export default PurposeBanner;
