import { BookOpen, Target, MapPin, PenLine, FolderKanban } from "lucide-react";

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
        <div className="mb-12">
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

        {/* D. Reflections */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <PenLine className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">D. Reflections</h3>
          </div>
          <div className="pl-9">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
                "Written entries that explain my learning process, obstacles overcome, and skills gained."
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Throughout my OJT journey, I kept reflective entries to document my growth as an IT student. 
                  Each task I completed—whether it was repairing a jammed printer, crimping RJ-45 connectors, 
                  or troubleshooting a faulty motherboard—taught me something new about patience, persistence, 
                  and the value of hands-on learning.
                </p>
                <p>
                  Early on, I struggled with unfamiliar equipment and procedures. But over time, I developed 
                  a systematic approach to diagnosing problems: observe, research, test, and verify. These 
                  reflections helped me recognize patterns in my learning and identify areas where I needed 
                  to improve.
                </p>
                <p>
                  Writing about my experiences also helped me process the challenges emotionally. There were 
                  days when nothing seemed to work, but looking back at my journal entries, I can see how far 
                  I've come—from a nervous intern to someone who can confidently handle real IT support tasks.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-3 pt-2">
                {[
                  { label: "Journal Entries", value: "20+" },
                  { label: "Skills Documented", value: "12" },
                  { label: "Challenges Overcome", value: "15+" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-accent/50 rounded-lg p-3 text-center">
                    <p className="text-lg font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* E. Keep it Organized */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <FolderKanban className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">E. Keep it Organized</h3>
          </div>
          <div className="pl-9">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm space-y-4">
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-4">
                "Use navigation menus to categorize work by topic, class, or skill."
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A well-organized e-portfolio is essential for presenting your work professionally. This portfolio 
                uses a structured sidebar navigation that categorizes all content into clear sections—from 
                introduction and company profile to activities, gallery, and assessment.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "📂 Categorized by Topic",
                    desc: "Each section focuses on a specific aspect of the OJT experience, making it easy to find relevant information.",
                  },
                  {
                    title: "🧭 Sidebar Navigation",
                    desc: "The collapsible sidebar provides quick access to any section without endless scrolling.",
                  },
                  {
                    title: "🏷️ Labeled Activities",
                    desc: "OJT tasks are organized with dates, categories, and detailed descriptions for easy reference.",
                  },
                  {
                    title: "📸 Photo Albums",
                    desc: "Gallery images are grouped into albums by activity type, providing visual documentation of work performed.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-accent/30 rounded-lg p-4 border border-border/50">
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
