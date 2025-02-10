// import React from 'react';
// import './Testimonials.css';

// const Testimonials = () => {
//   return (
//     <section className="testimonials">
//       <h2>What Travelers Say</h2>
//       <div className="testimonial-cards">
//         <div className="testimonial-card">
//           <p>"Revolv helped me take my local store online in just a few days! The AI recommendations were spot on."</p>
//           <h4>- Aarav S., Boutique Owner</h4>
//         </div>
//         <div className="testimonial-card">
//           <p>"I had no idea where to start, but Revolv guided me with the perfect tools. My business has never been more efficient!"</p>
//           <h4>- Sophia M., Café Owner</h4>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import React from 'react';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Revolv helped me take my local store online in just a few days! The AI recommendations were spot on.",
      author: "Aarav S.",
      role: "Boutique Owner",
      rating: 5,
      // image: "/images.sophia.png"
    },
    {
      quote: "I had no idea where to start, but Revolv guided me with the perfect tools. My business has never been more efficient!",
      author: "Sophia M.",
      role: "Café Owner",
      rating: 5,
      // image: "/images/aarav.jfif"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(rating)].map((_, index) => (
      <Star key={index} size={16} className="star-icon" fill="currentColor" />
    ));
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <Quote className="quote-icon" size={40} />
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
              <p className="quote-text">{testimonial.quote}</p>
              <div className="author-info">
                {/* <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="author-image"
                /> */}
                <div className="author-details">
                  <h4>{testimonial.author}</h4>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;