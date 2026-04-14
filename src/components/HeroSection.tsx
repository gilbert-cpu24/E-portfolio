import profileImg from "@/assets/profilegilbert.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-[70vh] flex items-center justify-center px-6 py-20">
      <div className="container max-w-5xl flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img
            src={profileImg}
            alt="Profile photo"
            width={220}
            height={220}
            className="rounded-full border-4 border-primary-foreground/30 shadow-xl object-cover w-[220px] h-[220px]"
          />
        </div>
        <div className="text-center md:text-left text-primary-foreground">
          <p className="text-sm uppercase tracking-widest text-primary-foreground/70 mb-2">
            E-Portfolio
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Gilbert M. Deguit
          </h1>
          <p className="text-xl text-primary-foreground/80 mb-1">
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
