import Link from 'next/link';
import React from 'react';
const Home = () => {
  return (
    <div>
      <section className="hero" style={{ backgroundImage: "url('bg image.png')" }}>
        <div>
          <h1 className="fade-in">Timeless Luxury,<br/>
             Crafted to Perfection</h1>
          <p>Discover our exclusive collection of luxury watches,<br/>
             crafted for those who appreciate fine craftsmanship.</p>
          <button><Link href="/watches">Shop Now</Link></button>
        </div>
      </section>
    </div>
  );
};

export default Home;