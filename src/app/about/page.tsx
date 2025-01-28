import React from 'react';

const About = () => {
  return (
    <div>
      <section className="about" style={{ backgroundImage: `url('/about-bg.png')` }}>
        <div className="about-content">
          <h2 className="fade-in">About Us</h2>
          <p>
            At Timeless Luxe, we are passionate about creating exceptional timepieces that blend traditional craftsmanship with modern sophistication. 
            Our journey began with a singular vision: to design watches that not only stand the test of time in style but also reflect the values of precision, quality, and elegance. 
            Every watch in our collection is meticulously crafted using the finest materials, embodying our commitment to luxury, durability, and unparalleled attention to detail. 
            Whether for a special occasion or everyday wear, Timeless Luxe watches are designed to make a statement and become an integral part of your life&apos;s moments.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
