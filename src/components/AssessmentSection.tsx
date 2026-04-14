import { ClipboardCheck, TrendingUp, Lightbulb, Heart } from "lucide-react";

const AssessmentSection = () => {
  return (
    <section id="assessment" className="py-20 px-6">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2">Assessment & Reflection</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="space-y-8">
          {/* Self Assessment */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Self-Assessment</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Throughout my 486 hours of On-the-Job Training at the MIS Office, I was able to develop 
              my technical skills significantly. I learned how to handle real IT problems that I had only 
              read about in textbooks. The hands-on experience in printer maintenance, network wiring, 
              data encoding, and hardware troubleshooting gave me a solid foundation for my future career 
              in information technology.
            </p>
          </div>

          {/* Skills Gained */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Skills & Growth</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Improved troubleshooting and problem-solving abilities",
                "Developed patience and attention to detail in repairs",
                "Learned proper cable management and network setup",
                "Gained experience in professional documentation",
                "Built confidence in handling office IT equipment",
                "Enhanced communication skills with office staff",
              ].map((skill) => (
                <div key={skill} className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Challenges & Lessons Learned</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              One of the biggest challenges I faced was diagnosing unfamiliar hardware problems. There were 
              times when I had to research and try multiple solutions before finding the right fix. This taught 
              me the importance of patience, resourcefulness, and never giving up. I also learned that asking 
              for guidance from experienced colleagues is not a weakness but a strength.
            </p>
          </div>

          {/* Acknowledgment */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Acknowledgment</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I would like to express my sincere gratitude to the MIS Office staff and my OJT supervisor 
              for their guidance, patience, and support throughout my training. I am also thankful to 
              Occidental Mindoro State College and the BSIT department for providing this opportunity 
              to grow as a future IT professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssessmentSection;
