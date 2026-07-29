export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold leading-tight">
          Speak English with Confidence.
        </h1>

        <p className="mt-6 text-xl max-w-2xl">
          Transform your communication skills with practical Spoken English,
          Interview Preparation, Personality Development, and Corporate
          Communication training.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
            Book Free Demo
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-900">
            Explore Courses
          </button>
        </div>

      </div>
    </section>
  );
}