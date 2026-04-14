import printer2 from "@/assets/printer-2.jfif";
import network2 from "@/assets/network-2.jfif";
import encoding2 from "@/assets/encoding-2.jpg";
import hardware1 from "@/assets/hardware-1.jpg";


const activities = [
  {
    title: "Printer Repair & Maintenance",
    description: "Diagnosed and repaired various printer issues including paper jams, toner replacement, and connectivity problems across office departments.",
    image: printer2,
    hours: "~80 hrs",
  },
  {
    title: "Network Wiring & Cable Management",
    description: "Installed and organized network cables, set up LAN connections, and maintained structured cabling systems throughout the building.",
    image: network2,
    hours: "~100 hrs",
  },
  {
    title: "Data Encoding & Documentation",
    description: "Encoded records, inventory data, and documents into the office database and spreadsheets for proper filing and retrieval.",
    image: encoding2,
    hours: "~120 hrs",
  },
  {
    title: "Hardware Troubleshooting",
    description: "Performed diagnostics on desktop computers, replaced components, and resolved hardware-related issues for office staff.",
    image: hardware1,
    hours: "~100 hrs",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 px-6 section-alt">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2">OJT Activities</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-4" />
        <p className="text-muted-foreground mb-10">
          A summary of key tasks and responsibilities throughout my 486-hour training.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((act) => (
            <div
              key={act.title}
              className="relative rounded-xl overflow-hidden shadow-sm h-72 group"
            >
              <img
                src={act.image}
                alt={act.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
              <div className="relative z-10 flex flex-col justify-end h-full p-6">
                <span className="text-xs font-semibold text-blue-300 mb-1">{act.hours}</span>
                <h3 className="text-xl font-bold text-white mb-1">{act.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed line-clamp-3">{act.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
