import profileImg from "@/assets/profilegilbert.png";
import { Mail, Phone, MapPin, Github, Calendar, GraduationCap, Briefcase } from "lucide-react";

const ProfileSection = () => {
  return (
    <section id="profile" className="py-20 px-6 bg-section-alt">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2">Profile</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />

        <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
          {/* Cover banner */}
          <div className="h-32 hero-gradient relative">
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Profile content */}
          <div className="px-8 pb-8 -mt-16 relative">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-primary/40 rounded-full blur-md opacity-70" />
                <img
                  src={profileImg}
                  alt="Gilbert M. Deguit"
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-card shadow-xl"
                  style={{ objectPosition: "center 25%" }}
                />
              </div>
              <div className="text-center md:text-left flex-1 md:pb-2">
                <h3 className="text-2xl font-bold text-foreground">Gilbert M. Deguit</h3>
                <p className="text-primary font-medium">OJT Intern — MIS Office</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Bachelor of Science in Information Technology
                </p>
              </div>
            </div>

            {/* Personal Info Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground truncate">gilbertdeguit@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Phone</p>
                  <p className="text-sm text-foreground">+63 9XX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="text-sm text-foreground">Occidental Mindoro, Philippines</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background rounded-lg border border-border">
                <Github className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">GitHub</p>
                  <p className="text-sm text-foreground">gilbert-cpu24</p>
                </div>
              </div>
            </div>

            {/* Education & Internship */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Education</h4>
                </div>
                <p className="text-sm font-medium text-foreground">
                  Occidental Mindoro State College
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Bachelor of Science in Information Technology
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>4th Year</span>
                </div>
              </div>

              <div className="p-5 bg-background rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Internship</h4>
                </div>
                <p className="text-sm font-medium text-foreground">MIS Office</p>
                <p className="text-xs text-muted-foreground mt-1">
                  On-the-Job Training Intern · 486 Hours
                </p>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>Completed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
