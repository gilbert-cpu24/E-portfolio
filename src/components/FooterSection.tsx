import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer id="contact" className="hero-gradient py-10 px-6 text-center text-primary-foreground">
      <div className="container max-w-5xl">
        <p className="font-semibold text-lg mb-1">Gilbert M. Deguit</p>
        <p className="text-primary-foreground/70 text-sm">
          OJT Intern — MIS Office • 486 Hours
        </p>

        <div className="flex flex-wrap justify-center gap-5 mt-6">
          <a
            href="https://www.facebook.com/kiko.ydoubleO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span className="text-sm">Facebook</span>
          </a>

          <a
            href="https://www.instagram.com/_kiksmwa/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">Instagram</span>
          </a>

          <span className="flex items-center gap-2 text-primary-foreground/80">
            <Phone className="w-5 h-5" />
            <span className="text-sm">09938553423</span>
          </span>

          <span className="flex items-center gap-2 text-primary-foreground/80">
            <Mail className="w-5 h-5" />
            <span className="text-sm">gilbertdeguit@gmail.com</span>
          </span>
        </div>

        <p className="text-primary-foreground/50 text-xs mt-6">
          © 2025 E-Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
