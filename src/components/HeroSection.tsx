import profileImg from "@/assets/profilegilbert.png";
import { Github, MapPin, Clock, Briefcase } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative hero-gradient min-h-[60vh] flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-white/3 rounded-full blur-2xl" />
      </div>

      {/* GitHub icon */}
      <a
        href="https://github.com/gilbert-cpu24"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-5 right-5 flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs"
        aria-label="GitHub Profile"
      >
        <Github className="w-4 h-4" />
        <span className="hidden sm:inline">GitHub</span>
      </a>

      <div className="relative z-[1] container max-w-4xl flex flex-col md:flex-row items-center gap-10">
        {/* Profile image */}
        <div className="flex-shrink-0 relative">
          <div className="absolute -inset-2 bg-white/10 rounded-full blur-md" />
          <img
            src={profileImg}
            alt="Gilbert M. Deguit"
            className="relative rounded-full border-4 border-white/20 shadow-2xl object-cover object-[center_30%] w-[200px] h-[200px]"
          />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left text-primary-foreground space-y-3">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 text-xs uppercase tracking-[0.2em] font-medium text-primary-foreground/90 mb-1">
            E-Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Gilbert M. Deguit
          </h1>
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-2 sm:gap-4 text-primary-foreground/80">
            <span className="flex items-center gap-1.5 text-lg">
              <Briefcase className="w-4 h-4" />
              OJT Intern — MIS Office
            </span>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm text-primary-foreground/60">
            <span className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
              <Clock className="w-3.5 h-3.5" />
              486 Hours
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1">
              <MapPin className="w-3.5 h-3.5" />
              On-the-Job Training
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
