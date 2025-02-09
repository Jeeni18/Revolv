import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features">
      <h1>Features</h1>
      <div className="feature-cards">
        <div className="feature-card">
          <h3>AI-Powered Recommendations</h3>
          <p>Get personalized business tool suggestions based on your needs.</p>
        </div>
        <div className="feature-card">
          <h3>Digital Transformation Toolkit</h3>
          <p>Access essential tools like QR code generators, webpage builders, and social media managers.</p>
        </div>
        <div className="feature-card">
          <h3> Scalability for Every Stage</h3>
          <p>Whether you're a startup or an expanding business, Revolv grows with you.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
