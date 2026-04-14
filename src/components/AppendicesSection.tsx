import { FileText, Image, Shield, ClipboardList } from "lucide-react";

const officialDocs = [
  { label: "A", title: "Evaluation Form", desc: "Official evaluation form used to assess student performance during the internship period." },
  { label: "B", title: "Photocopy Registration Form", desc: "Copy of the official registration form for the internship program." },
  { label: "C", title: "Photocopy Validated ID", desc: "Copy of the validated identification card used during the internship." },
  { label: "D", title: "Parent's Consent", desc: "Official parental consent form for participation in the internship program." },
  { label: "E", title: "Medical Certificate", desc: "Official medical clearance certificate for the internship program." },
  { label: "F", title: "Certificate of Good Moral Character", desc: "Official certificate attesting to the student's good moral character." },
  { label: "G", title: "Application Letter", desc: "Letter of application submitted to DevOps Outsourcing Inc. for the internship position." },
  { label: "H", title: "Endorsement Letter", desc: "Official endorsement letter from the educational institution for the internship." },
  { label: "I", title: "Memorandum of Agreement", desc: "Official agreement between the educational institution and DevOps Outsourcing Inc." },
  { label: "J", title: "Daily Time Record (Time Card)", desc: "Record of attendance and hours worked during the internship period." },
  { label: "K", title: "Certificate of Completion", desc: "Official certificate issued by DevOps Outsourcing Inc. upon successful completion of the internship." },
  { label: "L", title: "Certificate of Clearance", desc: "Official clearance certificate issued by DevOps Outsourcing Inc. at the end of the internship." },
  { label: "Q", title: "Curriculum Vitae", desc: "Comprehensive resume detailing educational background, skills, and experiences." },
];

const preServicePhotos = [
  "Certificate of Participation awarded during the Pre-Service Seminar.",
  "A photo of me and my mom during the Pre-Service Seminar.",
  "Group photo of BSIT 4B on stage during the Pre-Service Seminar.",
  "Group photo with Ma'am Leiza and my fellow OJT Colleagues.",
];

const officePhotos = [
  "Certificate of Appreciation awarded to me during our OJT Graduation with Mobbiz Team.",
  "OJT Introduction Meeting with the CEO (Borja Hernandez) and Director (Monica Villadot).",
  "OJT Onboarding with Miss Chel Cataluna Punsalan.",
  "Wellness Intelliforum Program hosted by Mr. Elric Dimar.",
  "Receiving feedback from Mr. Eldrich Jonelle Guillermo during one of our Activity Checking.",
];

const codeOfEthics = [
  "I will promote public knowledge understanding and appreciation of information technology.",
  "I will consider the general welfare and public good in the performance of my work.",
  "I will advertise goods or professional services in a clear and truthful manner.",
  "I will comply and strictly abide by the intellectual property laws, patent laws and other related laws on respect of information technology.",
  "I will accept full responsibility for the work undertaken and utilize skills with competence and professionalism.",
  "I will make truthful statement on my areas of competence as well as the capabilities and qualities of my products or services.",
  "I will not disclose any confidential information obtained in the course of professional duties without the consent of the parties concerned, except when required by law.",
  "I will try to attain the highest quality in both the products and services that I offer.",
  "I will not knowingly participate in the development of information technology system that promotes the commission of fraud and other unlawful acts.",
  "I will uphold and improve the IT profession standard through continuing professional development in order to enhance the IT professionals.",
];

const evaluationCriteria = [
  { criteria: "1. Quality of Contents", percent: "60%", sub: ["Grammar", "Organization"] },
  { criteria: "2. Quality of Format", percent: "40%", sub: ["Spacing", "Margins", "Heading", "Typeset & Paging", "Tables and Pictures"] },
];

const AppendicesSection = () => {
  return (
    <section id="appendices" className="py-20 px-6 section-alt">
      <div className="container max-w-4xl">
        <h2 className="text-3xl font-bold text-foreground mb-1">Appendices</h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-2" />
        <p className="text-lg text-primary font-semibold mb-1">Supporting Documents and References</p>
        <p className="text-muted-foreground mb-10">
          This page contains all supporting documents relevant to the On-the-Job Training experience, including official forms, certifications, and visual documentation of the internship.
        </p>

        {/* Official Documents */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Official Documents</h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {officialDocs.map((doc) => (
              <div
                key={doc.label}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-colors"
              >
                <p className="text-xs font-bold text-primary mb-1">Appendix {doc.label}</p>
                <h4 className="text-base font-semibold text-foreground mb-1">{doc.title}</h4>
                <p className="text-sm text-muted-foreground">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Documentation */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Image className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Visual Documentation</h3>
          </div>

          {/* Pre-service Seminar */}
          <div className="mb-8">
            <p className="text-xs font-bold text-primary mb-1">Appendix N</p>
            <h4 className="text-lg font-semibold text-foreground mb-1">Pictures during Pre-service Seminar</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Photo documentation of participation in the pre-service orientation and training sessions.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {preServicePhotos.map((caption, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-4">
                  <div className="w-full h-32 bg-muted rounded-md flex items-center justify-center mb-3">
                    <Image className="w-8 h-8 text-muted-foreground/40" />
                  </div>
                  <p className="text-sm text-muted-foreground">{caption}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Office Works */}
          <div>
            <p className="text-xs font-bold text-primary mb-1">Appendix O</p>
            <h4 className="text-lg font-semibold text-foreground mb-1">Pictures during Office Works</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Photo documentation of various activities and tasks performed during the internship at DevOps Outsourcing Inc.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {officePhotos.map((caption, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-4">
                  <div className="w-full h-32 bg-muted rounded-md flex items-center justify-center mb-3">
                    <Image className="w-8 h-8 text-muted-foreground/40" />
                  </div>
                  <p className="text-sm text-muted-foreground">{caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code of Ethics */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Code of Ethics</h3>
          </div>
          <p className="text-xs font-bold text-primary mb-1">Appendix P</p>
          <h4 className="text-lg font-semibold text-foreground mb-1">Code of Ethics for CAST Student Internship</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Official code of ethics that governed student conduct during the internship.
          </p>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-center text-sm font-bold text-foreground mb-1">College of Arts, Sciences, and Technology</p>
            <p className="text-center text-sm font-semibold text-primary mb-4">Student Internship Code of Ethics</p>
            <p className="text-sm text-muted-foreground italic mb-4">
              <span className="font-semibold text-foreground not-italic">Preamble: </span>
              I will use my special knowledge for the benefit of the public. I will serve employees and clients with integrity, subject to an overriding responsibility to the public interest, and I will strive to enhance the competence and prestige of the profession. By these means:
            </p>
            <ol className="space-y-2">
              {codeOfEthics.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold shrink-0">{i + 1}.</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Portfolio Evaluation */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <ClipboardList className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Portfolio Evaluation</h3>
          </div>
          <p className="text-xs font-bold text-primary mb-1">Appendix R</p>
          <h4 className="text-lg font-semibold text-foreground mb-1">On-the-Job Training Portfolio Evaluation Form</h4>
          <p className="text-sm text-muted-foreground mb-4">
            Official form used to evaluate this OJT portfolio submission.
          </p>
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Criteria</th>
                  <th className="text-center px-4 py-3 font-semibold text-foreground">Percent</th>
                  <th className="text-center px-4 py-3 font-semibold text-foreground">Rating</th>
                </tr>
              </thead>
              <tbody>
                {evaluationCriteria.map((row) => (
                  <>
                    <tr key={row.criteria} className="border-b border-border">
                      <td className="px-4 py-2.5 font-semibold text-foreground">{row.criteria}</td>
                      <td className="px-4 py-2.5 text-center text-primary font-bold">{row.percent}</td>
                      <td className="px-4 py-2.5"></td>
                    </tr>
                    {row.sub.map((s) => (
                      <tr key={s} className="border-b border-border/50">
                        <td className="px-4 py-2 pl-8 text-muted-foreground">{s}</td>
                        <td></td>
                        <td></td>
                      </tr>
                    ))}
                  </>
                ))}
                <tr className="bg-muted/50">
                  <td className="px-4 py-3 font-bold text-foreground">General Average:</td>
                  <td className="px-4 py-3 text-center font-bold text-primary">100%</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppendicesSection;
