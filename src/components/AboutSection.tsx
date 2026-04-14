import { Briefcase, Clock, MapPin, GraduationCap } from "lucide-react";

const stats = [
  { icon: Clock, label: "Total Hours", value: "486" },
  { icon: Briefcase, label: "Department", value: "BSIT" },
  { icon: MapPin, label: "Company", value: "Management Information System" },
  { icon: GraduationCap, label: "School", value: "Occidental Mindoro State College" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2">About Me</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am an OJT intern assigned to the Management Information Systems (MIS) office. 
              During my 486 hours of training, I gained hands-on experience in various IT support tasks 
              including printer repair and maintenance, network wiring and cable management, 
              data encoding, and hardware troubleshooting.
            </p>
            <p>
              This internship has helped me develop practical skills and a strong work ethic, 
              preparing me for a career in information technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-xl p-5 text-center shadow-sm"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
