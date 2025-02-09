import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Travelers Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"Revolv helped me take my local store online in just a few days! The AI recommendations were spot on."</p>
          <h4>- Aarav S., Boutique Owner</h4>
        </div>
        <div className="testimonial-card">
          <p>"I had no idea where to start, but Revolv guided me with the perfect tools. My business has never been more efficient!"</p>
          <h4>- Sophia M., Café Owner</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
