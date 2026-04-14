import { BookOpen, Target, MapPin } from "lucide-react";

const IntroductionSection = () => {
  return (
    <section id="introduction" className="py-20 px-6">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2">Chapter I: Introduction</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        {/* A. Importance */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">A. Importance of Internship</h3>
          </div>
          <div className="space-y-4 text-muted-foreground leading-relaxed pl-9">
            <p>
              Internship is one of the most important experiences in the life of an IT student. 
              It serves as a bridge between academic learning and real-world application. While 
              school teaches us theories and concepts, the internship gives us the opportunity 
              to apply them in actual work settings and face challenges that textbooks alone cannot prepare us for.
            </p>
            <p>
              Beyond technical skills, this experience shapes our character. We learn teamwork, 
              time management, effective communication, and how to perform under pressure. It also 
              helps us discover which areas of IT we are most passionate about—whether it is hardware 
              support, networking, or system maintenance.
            </p>
            <p>
              Internships prepare us both professionally and personally, giving us a clearer sense of 
              direction and the confidence to face the demands of the IT industry after graduation.
            </p>
          </div>
        </div>

        {/* B. Objectives */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">B. Objectives of Internship</h3>
          </div>
          <div className="pl-9 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              The On-the-Job Training program aims to develop industry-ready IT professionals 
              through practical, hands-on experience. The specific objectives include:
            </p>
            <ul className="space-y-3">
              {[
                {
                  title: "Technical Experience",
                  desc: "Gain hands-on skills in printer maintenance, network wiring, hardware troubleshooting, and data encoding through real office tasks.",
                },
                {
                  title: "Problem-Solving Skills",
                  desc: "Enhance analytical abilities by diagnosing and resolving actual hardware and network issues in the workplace.",
                },
                {
                  title: "Documentation Skills",
                  desc: "Develop the ability to create technical documentation, reports, and maintain accurate records of work performed.",
                },
                {
                  title: "Professional Growth",
                  desc: "Build a strong work ethic, learn workplace communication, and prepare for a career in information technology.",
                },
                {
                  title: "Collaboration Experience",
                  desc: "Work alongside IT professionals, office staff, and supervisors while learning industry-standard workflows.",
                },
              ].map((obj) => (
                <li key={obj.title} className="bg-card border border-border rounded-lg p-4">
                  <p className="font-semibold text-foreground mb-1">{obj.title}</p>
                  <p className="text-sm text-muted-foreground">{obj.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* C. Time & Place */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">C. Time and Place of Internship</h3>
          </div>
          <div className="pl-9">
            <p className="text-muted-foreground leading-relaxed mb-6">
              The On-the-Job Training was conducted on-site at the Management Information Systems (MIS) 
              office of Occidental Mindoro State College.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Role", value: "OJT Intern – IT Support" },
                { label: "Total Hours", value: "486 Hours" },
                { label: "Location", value: "MIS Office, OMSC" },
              ].map((item) => (
                <div key={item.label} className="bg-card border border-border rounded-xl p-4 text-center shadow-sm">
                  <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                  <p className="font-semibold text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
