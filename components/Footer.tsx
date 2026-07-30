export default function Footer() {
  return (
    <footer className="bg-[#062B5C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <img
              src="/images/logo.png"
              alt="Unmute Pro"
              className="h-16 w-auto"
            />

            <p className="mt-6 text-blue-100 leading-7">
              We help students, job seekers and professionals become confident
              English speakers through practical communication training.
            </p>

            <p className="mt-6 font-semibold text-[#00D97E]">
              Your Silence Ends Here
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>

            <ul className="mt-6 space-y-3 text-blue-100">

              <li><a href="#home" className="hover:text-[#00D97E]">Home</a></li>

              <li><a href="#about" className="hover:text-[#00D97E]">About</a></li>

              <li><a href="#courses" className="hover:text-[#00D97E]">Courses</a></li>

              <li><a href="#testimonials" className="hover:text-[#00D97E]">Testimonials</a></li>

              <li><a href="#contact" className="hover:text-[#00D97E]">Contact</a></li>

            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold">Programs</h3>

            <ul className="mt-6 space-y-3 text-blue-100">

              <li>Spoken English</li>

              <li>Interview Preparation</li>

              <li>Corporate Communication</li>

              <li>Personality Development</li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-blue-100">

              <div>

                <p className="font-semibold text-white">
                  Phone
                </p>

                <a
                  href="tel:+919392209162"
                  className="hover:text-[#00D97E]"
                >
                  +91 93922 09162
                </a>

              </div>

              <div>

                <p className="font-semibold text-white">
                  WhatsApp
                </p>

                <a
                  href="https://wa.me/919392209162"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#00D97E]"
                >
                  Chat Now
                </a>

              </div>

              <div>

                <p className="font-semibold text-white">
                  Training
                </p>

                <p>
                  Online & Offline
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-blue-900 pt-8 text-center text-sm text-blue-200">

          © {new Date().getFullYear()} Unmute Pro.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}