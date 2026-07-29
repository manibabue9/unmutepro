export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900">
          About Unmute Pro
        </h2>

        <p className="mt-8 text-lg text-gray-700 leading-8 text-center max-w-4xl mx-auto">
          At <span className="font-semibold">Unmute Pro</span>, we believe
          English is not just a language—it's a life skill.
          Our mission is to help students, professionals, and job seekers
          communicate confidently through practical learning and real-world
          speaking practice.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-900">
              Corporate Experience
            </h3>

            <p className="mt-4 text-gray-600">
              Learn from a mentor with years of corporate experience and
              practical communication expertise.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-900">
              Practical Learning
            </h3>

            <p className="mt-4 text-gray-600">
              Daily speaking practice, real-life conversations, and
              confidence-building activities.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold text-blue-900">
              Career Growth
            </h3>

            <p className="mt-4 text-gray-600">
              Improve interview skills, public speaking, and professional
              communication to grow your career.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
