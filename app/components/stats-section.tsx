const stats = [
  { number: "25+", label: "Useful Tools" },
  { number: "5", label: "Categories" },
  { number: "100%", label: "Free" },
  { number: "∞", label: "Calculations" },
];

export default function StatsSection() {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto grid max-w-5xl grid-cols-2 divide-x divide-gray-100 md:grid-cols-4">
        {stats.map(({ number, label }) => (
          <div key={label} className="px-5 py-7 text-center">
            <div className="text-2xl font-black text-[#030164]">{number}</div>
            <div className="mt-1 text-sm text-gray-500">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}