import { Printer, Network, Database, Cpu } from "lucide-react";
import printer2 from "@/assets/printer-2.jfif";
import network2 from "@/assets/network-2.jfif";
import encoding2 from "@/assets/encoding-2.jpg";
import hardware1 from "@/assets/hardware-1.jpg";

const activities = [
  {
    title: "Printer Repair & Maintenance",
    description:
      "Diagnosed and repaired various printer issues including paper jams, toner replacement, driver installation, and connectivity problems across multiple office departments.",
    highlights: ["15 printers serviced", "Paper jam fixes", "Toner & ink refills", "Driver installations"],
    image: printer2,
    icon: Printer,
    color: "from-blue-600/80 to-blue-900/90",
  },
  {
    title: "Network Wiring & Cable Management",
    description:
      "Installed and organized network cables, crimped Ethernet connectors, set up LAN connections, and maintained structured cabling systems across multiple buildings.",
    highlights: ["20+ cable runs", "RJ-45 crimping", "Cabinet repairs", "Multi-building coverage"],
    image: network2,
    icon: Network,
    color: "from-emerald-600/80 to-emerald-900/90",
  },
  {
    title: "Data Encoding & Documentation",
    description:
      "Encoded records, inventory data, and official documents into the office database and spreadsheets, ensuring proper filing, retrieval, and data integrity.",
    highlights: ["Database entry", "Spreadsheet management", "Record digitization", "Data verification"],
    image: encoding2,
    icon: Database,
    color: "from-amber-600/80 to-amber-900/90",
  },
  {
    title: "Hardware Troubleshooting",
    description:
      "Performed diagnostics on desktop computers, replaced faulty components like RAM and hard drives, cleaned internals, and resolved hardware-related issues for office staff.",
    highlights: ["Component replacement", "Thermal paste reapply", "HDD to SSD upgrades", "Stress testing"],
    image: hardware1,
    icon: Cpu,
    color: "from-rose-600/80 to-rose-900/90",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 px-6 section-alt">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-primary mb-2">
            Hands-On Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">OJT Activities</h2>
          <div className="w-16 h-1 bg-primary rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground max-w-xl mx-auto">
            A summary of key tasks and responsibilities throughout my 486-hour on-the-job training at the MIS department.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <div
                key={act.title}
                className="relative rounded-2xl overflow-hidden shadow-md group h-auto"
              >
                <img
                  src={act.image}
                  alt={act.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${act.color}`} />

                <div className="relative z-10 flex flex-col justify-end h-full p-6 min-h-[320px]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{act.title}</h3>
                  </div>

                  <p className="text-white/85 text-sm leading-relaxed mb-4">{act.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {act.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[11px] font-medium text-white bg-white/15 backdrop-blur-sm rounded-full px-3 py-1"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
