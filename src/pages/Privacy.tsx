import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
  const effective = new Date("2025-10-21").toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground">Effective Date: {effective} • Last Updated: {effective}</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="space-y-8 text-muted-foreground">
            <section>
              <p>
                This Privacy Policy explains how <strong>KATA Consulting Firm Pte. Ltd.</strong> ("KATA", "we", "our", "us") collects, uses, and protects personal data when you use the KATABOOST website, applications, and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p>
                We collect personal and company details, marketing data, device information, and cookies to deliver and improve our AI-driven marketing analytics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p>
                To operate and improve KATABOOST, communicate updates, deliver insights, maintain security, and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. AI and Data Handling</h2>
              <p>
                Your data may be processed by AI models to generate insights. Aggregated, anonymized data may be used for model improvements, never for external profiling.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Sharing</h2>
              <p>
                We share data only with authorized service providers, affiliates, or regulators when legally required. We never sell your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cross-Border Data Transfers</h2>
              <p>
                Data may be processed outside Singapore with PDPA-compliant safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Data Retention</h2>
              <p>
                Data is kept as long as necessary for service delivery and legal requirements, then securely deleted or anonymized.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Security</h2>
              <p>
                We employ technical and organizational measures to protect data but cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Your Rights</h2>
              <p>
                You may access, correct, withdraw consent, or request deletion of your data by contacting our DPO.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cookies</h2>
              <p>
                Cookies are used for authentication, analytics, and personalization. You can disable cookies in your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Third-Party Services</h2>
              <p>
                Our Website may link to external platforms (e.g., Google Ads, Meta). We are not responsible for their privacy practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. Continued use constitutes acceptance of changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact DPO</h2>
              <div className="space-y-1">
                <p><strong>Data Protection Officer (DPO)</strong></p>
                <p><strong>KATA Consulting Firm Pte. Ltd.</strong></p>
                <p>Email: <a href="mailto:info@kataconsulting.co">info@kataconsulting.co</a></p>
                <p>Address: 160 ROBINSON ROAD Singapore, 068914</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;