import React, { useState, useEffect, useRef, useId, useTransition } from 'react';

const About = () => {
  const id = useId();
  const [stats, setStats] = useState({ customers: 0, products: 0, awards: 0 });
  const [isPending, startTransition] = useTransition();
  const scrollRef = useRef(null);

  useEffect(() => {
    startTransition(() => {
      setTimeout(() => {
        setStats({
          customers: 5000,
          products: 1500,
          awards: 12,
        });
      }, 1500);
    });
  }, []);

  const handleScroll = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="p-6 md:p-12">
      <h1 id={id} className="text-4xl font-bold mb-4 text-center text-gray-800">
        About <span className="text-pink-500">StyleHub</span>
      </h1>

      <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl mx-auto">
        Welcome to <b>StyleHub</b>, your premier destination for premium <span className="text-pink-600">clothing</span> and
        <span className="text-pink-600"> jewelry</span>. We deliver fashion with a focus on <b>quality, elegance, and affordability</b>.
      </p>

      <div className="flex justify-center mb-8">
        <button
          onClick={handleScroll}
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded shadow-md transition"
        >
          🎯 View Achievements
        </button>
      </div>

      {/* Mission */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-2 text-gray-700">Our Mission</h2>
        <p className="text-gray-600">
          To redefine fashion by offering trendy clothing and exquisite jewelry with a perfect blend of quality and affordability.
          We aim to empower individuals to express themselves through style.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-2 text-gray-700">Our Vision</h2>
        <p className="text-gray-600">
          To become the most trusted and loved online fashion destination worldwide by focusing on <b>customer happiness</b>,
          <b> sustainable practices</b>, and <b>innovative designs</b>.
        </p>
      </section>

      {/* Company Values */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>✔️ Customer Satisfaction First</li>
          <li>✔️ Ethical and Sustainable Fashion</li>
          <li>✔️ High-Quality Craftsmanship</li>
          <li>✔️ Innovation in Designs</li>
        </ul>
      </section>

      {/* Achievements */}
      <section ref={scrollRef} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">🏆 Our Achievements</h2>
        {isPending ? (
          <p className="text-center text-pink-600">Loading achievements...</p>
        ) : (
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-500">{stats.products}+</h3>
              <p className="text-gray-600">Products Available</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-500">{stats.customers}+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold text-pink-500">{stats.awards}</h3>
              <p className="text-gray-600">Industry Awards</p>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        © 2025 <span className="text-pink-500 font-semibold">StyleHub</span>. Crafted with 💖 for fashion lovers.
      </footer>
    </div>
  );
};

export default About;
