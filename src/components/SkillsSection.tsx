import { Wrench, Wifi, Monitor } from "lucide-react";

const skills = [
  {
    icon: Wrench,
    title: "Printer Maintenance",
    description:
      "Capable of fixing major printer problems including paper jams, ink system issues, and routine maintenance to keep printers running smoothly.",
  },
  {
    icon: Wifi,
    title: "Network Wiring & Troubleshooting",
    description:
      "Experienced in diagnosing and fixing slow internet and Wi-Fi connectivity issues through proper cable management and network wiring.",
  },
  {
    icon: Monitor,
    title: "Hardware Troubleshooting",
    description:
      "Skilled in diagnosing and resolving hardware issues including cleaning dust from fan coolers, replacing components, and general PC maintenance.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2">My Skills</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <skill.icon className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
