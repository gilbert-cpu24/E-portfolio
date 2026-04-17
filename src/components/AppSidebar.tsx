import {
  BookOpen,
  Building2,
  User,
  Wrench,
  ClipboardList,
  Images,
  ClipboardCheck,
  Phone,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const tocItems = [
  { label: "Introduction", target: "introduction", icon: BookOpen },
  { label: "Company Profile", target: "company", icon: Building2 },
  { label: "About Me", target: "about", icon: User },
  { label: "Skills", target: "skills", icon: Wrench },
  { label: "OJT Activities", target: "activities", icon: ClipboardList },
  { label: "Photo Gallery", target: "gallery", icon: Images },
  { label: "Assessment", target: "assessment", icon: ClipboardCheck },
  { label: "Contact", target: "contact", icon: Phone },
];

const AppSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full z-40 bg-card border-r border-border shadow-lg transition-all duration-300 flex flex-col ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className={`border-b border-border ${collapsed ? "p-3" : "p-4"}`}>
        {collapsed ? (
          <div className="flex justify-center">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">EP</span>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-sm font-bold text-foreground tracking-wide">Sidebar</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mt-0.5">
              E-Portfolio Menu
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="space-y-1 px-2">
          {tocItems.map((item, i) => {
            const isActive = activeSection === item.target;
            return (
              <button
                key={item.target}
                onClick={() => scrollTo(item.target)}
                className={`flex items-center gap-3 w-full rounded-lg px-3 py-2.5 transition-all duration-200 group ${
                  isActive
                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
                title={collapsed ? item.label : undefined}
              >
                <item.icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-primary" : ""}`} />
                {!collapsed && (
                  <>
                    <span className="text-xs font-medium text-muted-foreground w-5">{i + 1}.</span>
                    <span className={`text-sm font-medium truncate ${isActive ? "text-primary" : ""}`}>
                      {item.label}
                    </span>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Collapse toggle */}
      <div className="p-3 border-t border-border">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg py-2 hover:bg-accent"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          {!collapsed && <span className="text-xs">Collapse</span>}
        </button>
      </div>
    </aside>
  );
};

export default AppSidebar;
