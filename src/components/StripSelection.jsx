// src/components/StripSelection.jsx
export default function StripSelection() {
  return (
    <div className="flex flex-wrap justify-center gap-6 my-10">
      {[1, 2, 3, 4].map((num) => (
        <div
          key={num}
          className="bg-[#DDE1D6] p-2 rounded-lg shadow-lg w-32 h-48 flex flex-wrap content-start gap-2"
        >
          {Array(num + 3)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="bg-[#0A3B5C] w-[45%] h-[22%] rounded-sm"
              ></div>
            ))}
        </div>
      ))}
    </div>
  );
}
