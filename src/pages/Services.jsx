
import React, { useState, useEffect, useTransition } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [isPending, startTransition] = useTransition();

  // Simulate API fetching for services
  useEffect(() => {
    startTransition(() => {
      setTimeout(() => {
        setServices([
          {
            id: 1,
            title: 'Custom Clothing Design',
            description:
              'Get clothing designed exclusively for you. From casual wear to party dresses, we bring your ideas to life.',
            icon: '👗',
          },
          {
            id: 2,
            title: 'Jewelry Personalization',
            description:
              'Engrave initials, names, or special dates on your jewelry. Perfect for gifts and special occasions.',
            icon: '💍',
          },
          {
            id: 3,
            title: 'Express Delivery',
            description:
              'Fast and reliable delivery within 2-5 business days across India and globally.',
            icon: '🚚',
          },
          {
            id: 4,
            title: 'Style Consultation',
            description:
              'Our fashion experts help you choose outfits and accessories that suit your style and personality.',
            icon: '🧑‍💼',
          },
          {
            id: 5,
            title: 'Gift Packaging',
            description:
              'Beautiful eco-friendly packaging options for birthdays, anniversaries, and special occasions.',
            icon: '🎁',
          },
          {
            id: 6,
            title: '24/7 Customer Support',
            description:
              'Have questions? Our team is always available to assist you via chat, email, or call.',
            icon: '📞',
          },
        ]);
      }, 1500);
    });
  }, []);

  return (
    <div className="p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Our <span className="text-pink-500">Services</span>
      </h1>

      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
        At <b>StyleHub</b>, we go beyond just selling products. We offer a range of premium services
        designed to enhance your shopping experience and help you express your unique style.
      </p>

      {/* Loading state */}
      {isPending ? (
        <p className="text-pink-600 text-center text-lg">Loading services...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-gray-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-pink-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        © 2025 <span className="text-pink-500 font-semibold">StyleHub</span>. Where fashion meets passion.
      </footer>
    </div>
  );
};

export default Services;
