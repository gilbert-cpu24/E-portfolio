import { Building2, Eye, History, Users } from "lucide-react";

const CompanyProfileSection = () => {
  return (
    <section id="company" className="py-20 px-6 section-alt">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2">Chapter II: Company Profile</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        {/* Nature of Agency */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">1. Nature of Agency</h3>
          </div>
          <div className="pl-9 text-muted-foreground leading-relaxed space-y-4">
            <p>
              Occidental Mindoro State College (OMSC) is a state-funded higher education institution located 
              in Occidental Mindoro, Philippines. It offers various degree programs in education, technology, 
              agriculture, and other disciplines.
            </p>
            <p>
              The Management Information Systems (MIS) office is the department responsible for managing and 
              maintaining the college's information technology infrastructure. This includes computer systems, 
              network connectivity, printers, and data management across all offices and departments.
            </p>
          </div>
        </div>

        {/* Mission / Vision */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">2. Mission / Vision / Goal</h3>
          </div>
          <div className="pl-9 grid gap-4 sm:grid-cols-2">
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-primary mb-2">Vision</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A premier state college in the MIMAROPA region, committed to producing globally competitive 
                graduates through quality education, research, and community service.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-primary mb-2">Mission</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                To provide accessible, quality, and relevant educational programs that develop competent and 
                socially responsible professionals who contribute to national development.
              </p>
            </div>
          </div>
        </div>

        {/* History */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <History className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">3. History / Background</h3>
          </div>
          <div className="pl-9 text-muted-foreground leading-relaxed space-y-4">
            <p>
              Occidental Mindoro State College has a long history of providing quality education to the 
              people of Occidental Mindoro. Over the years, it has expanded its programs and facilities to 
              meet the growing educational needs of the province.
            </p>
            <p>
              The MIS office was established to centralize IT management across the institution, ensuring 
              that all departments have access to reliable technology infrastructure and technical support.
            </p>
          </div>
        </div>

        {/* Organizational Structure */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">4. Organizational Structure</h3>
          </div>
          <div className="pl-9">
            <p className="text-muted-foreground leading-relaxed mb-6">
              The MIS office operates under the college administration and is responsible for all 
              IT-related functions within the institution.
            </p>
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-primary text-primary-foreground rounded-lg px-5 py-3 text-sm font-semibold shadow">
                  College President
                </div>
                <div className="w-px h-6 bg-border" />
                <div className="bg-primary/90 text-primary-foreground rounded-lg px-5 py-3 text-sm font-semibold shadow">
                  Vice President for Administration
                </div>
                <div className="w-px h-6 bg-border" />
                <div className="bg-primary/80 text-primary-foreground rounded-lg px-5 py-3 text-sm font-semibold shadow">
                  MIS Office Head
                </div>
                <div className="w-px h-6 bg-border" />
                <div className="flex gap-4 flex-wrap justify-center">
                  <div className="bg-accent text-accent-foreground rounded-lg px-4 py-2.5 text-sm font-medium">
                    IT Staff
                  </div>
                  <div className="bg-accent text-accent-foreground rounded-lg px-4 py-2.5 text-sm font-medium">
                    OJT Interns
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileSection;
