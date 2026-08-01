const phoneNumber = "919392209162";
const initialMessage = encodeURIComponent(
  "Hello Unmute Pro 👋\n\nI would like to know more about your spoken English and communication programs. Please share the available demo timings."
);

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${initialMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-5 right-4 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:bg-[#20BD5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
      aria-label="Chat with Unmute Pro on WhatsApp"
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl"
        aria-hidden="true"
      >
        💬
      </span>

      <span className="pr-1 text-left leading-tight">
        <span className="block text-xs font-medium text-white/85">
          Need help?
        </span>
        <span className="block text-sm font-bold">Chat on WhatsApp</span>
      </span>
    </a>
  );
}

