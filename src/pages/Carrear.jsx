
import React, { useState, useRef, useEffect, useTransition } from 'react';

const Career = () => {
  const [form, setForm] = useState({ name: '', email: '', resume: '', position: '' });
  const [submitted, setSubmitted] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [isPending, startTransition] = useTransition();
  const formRef = useRef(null);

  // Simulate fetching open positions
  useEffect(() => {
    startTransition(() => {
      setTimeout(() => {
        setJobs([
          { id: 1, title: 'Frontend Developer', location: 'Remote', type: 'Full-Time' },
          { id: 2, title: 'UI/UX Designer', location: 'Remote', type: 'Contract' },
          { id: 3, title: 'Marketing Manager', location: 'Delhi', type: 'Full-Time' },
          { id: 4, title: 'Product Manager', location: 'Bangalore', type: 'Full-Time' },
        ]);
      }, 1500);
    });
  }, []);

  // Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', resume: '', position: '' });
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
  };

  return (
    <div className="p-6 md:p-12">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        Join <span className="text-pink-500">StyleHub</span> Team
      </h1>

      <p className="text-lg text-gray-600 mb-10 text-center max-w-2xl mx-auto">
        We're on the lookout for passionate, creative, and dedicated individuals to join our growing family.
        At <b>StyleHub</b>, we value innovation, customer happiness, and personal growth.
      </p>

      {/* Open Positions */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">🚀 Open Positions</h2>
        {isPending ? (
          <p className="text-pink-600">Loading job openings...</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold text-pink-600">{job.title}</h3>
                <p className="text-gray-600">📍 {job.location}</p>
                <p className="text-gray-500">🕒 {job.type}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Application Form */}
      <section ref={formRef} className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">Apply Now</h2>
        {submitted ? (
          <div className="text-center">
            <p className="text-green-600 text-lg font-medium">
              ✅ Thank you {form.name}! Your application for {form.position} has been submitted.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Position</label>
              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="">Select Position</option>
                {jobs.map((job) => (
                  <option key={job.id} value={job.title}>
                    {job.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Resume Link (Google Drive, etc.)</label>
              <input
                type="url"
                name="resume"
                placeholder="https://your-resume-link.com"
                value={form.resume}
                onChange={handleChange}
                required
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded shadow-md transition"
            >
              Submit Application
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500">
        © 2025 <span className="text-pink-500 font-semibold">StyleHub</span>. Crafting Careers with ❤️.
      </footer>
    </div>
  );
};

export default Career;
