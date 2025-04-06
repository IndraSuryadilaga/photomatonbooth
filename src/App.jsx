// src/App.jsx
import Navbar from "./components/Navbar";
import StripSelection from "./components/StripSelection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center px-4">
      <Navbar />
      <main className="text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          PhotomatonBooth <br /> Free Online Photo Booth
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Create your own photo strip with iconic frames & cool filters. Turn
          every moment into memories. Anywhere. Anytime.
        </p>
        <h2 className="text-xl font-semibold mb-4">Choose Your Strip</h2>
        <StripSelection />
      </main>
      <Footer />
    </div>
  );
}
