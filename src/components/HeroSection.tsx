import profileImg from "@/assets/profilegilbert.png";
import { Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[50vh] flex items-center justify-center px-6 py-14">
      <div className="container max-w-4xl flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Profile photo"
            width={180}
            height={180}
            className="rounded-full border-4 border-primary-foreground/30 shadow-xl object-cover w-[180px] h-[180px]"
          />
        </div>
        <div className="relative text-center md:text-left text-primary-foreground">
          <a
            href="https://github.com/gilbert-cpu24"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-0 right-0 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <p className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-2">
            E-Portfolio
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Gilbert M. Deguit
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-1">
            OJT Intern — MIS Office
          </p>
          <p className="text-primary-foreground/60 text-sm">
            486 Hours of On-the-Job Training
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
