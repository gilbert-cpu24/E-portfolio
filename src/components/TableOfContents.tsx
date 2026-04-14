import { List } from "lucide-react";

const tocItems = [
  { label: "Introduction", target: "introduction" },
  { label: "Company Profile", target: "company" },
  { label: "About Me", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "OJT Activities", target: "activities" },
  { label: "Photo Gallery", target: "gallery" },
  { label: "Assessment", target: "assessment" },
  { label: "Appendices", target: "appendices" },
  { label: "Contact", target: "contact" },
];

const TableOfContents = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="toc" className="py-20 px-6 section-alt">
      <div className="container max-w-3xl">
        <div className="flex items-center gap-3 mb-2">
          <List className="w-7 h-7 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">E-Portfolio Contents</h2>
        </div>
        <div className="w-16 h-1 bg-primary rounded-full mb-8" />

        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <ol className="space-y-3">
            {tocItems.map((item, i) => (
              <li key={item.target}>
                <button
                  onClick={() => scrollTo(item.target)}
                  className="flex items-center gap-3 w-full text-left group hover:bg-accent rounded-lg px-4 py-2.5 transition-colors"
                >
                  <span className="text-sm font-bold text-primary w-6">{i + 1}.</span>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {item.label}
                  </span>
                  <span className="flex-1 border-b border-dashed border-border mx-2" />
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
