// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="flex justify-center space-x-4 py-4">
      {["Home", "Privacy Policy", "Feedback", "Donate"].map((item) => (
        <button
          key={item}
          className="bg-black text-white px-4 py-1 rounded-md shadow-md hover:opacity-90"
        >
          {item}
        </button>
      ))}
    </nav>
  );
}
