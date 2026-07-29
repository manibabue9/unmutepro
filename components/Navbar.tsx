import Image from "next/image";
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Image
  src="/images/logo.png"
  alt="Unmute Pro Logo"
  width={170}
  height={55}
  priority
/>

        {/* Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-blue-700">Home</a>
          <a href="#" className="hover:text-blue-700">About</a>
          <a href="#" className="hover:text-blue-700">Courses</a>
          <a href="#" className="hover:text-blue-700">Contact</a>
        </div>

        {/* Button */}
        <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-5 py-2 rounded-lg font-semibold">
          Book Demo
        </button>

      </div>
    </nav>
  );
}