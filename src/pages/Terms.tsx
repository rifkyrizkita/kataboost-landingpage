import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Terms = () => {
  const today = new Date("2025-10-21").toLocaleDateString(undefined, {
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
          <h1 className="text-4xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {today}</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="space-y-8 text-muted-foreground">
            <section>
              <p>
                Welcome to <strong>KATABOOST</strong>, a performance marketing AI platform provided by
                <strong> KATA Consulting Firm Pte. Ltd.</strong> ("KATA", "we", "our", "us"), a company registered in Singapore
                (UEN: <strong>202338099W</strong>), with its registered address at <strong>160 ROBINSON ROAD Singapore, 068914</strong>.
              </p>
              <p>
                By accessing or using our website (<a href="https://www.kataboost.com" target="_blank" rel="noreferrer">www.kataboost.com</a>) and related products or services (collectively, the "Service"), you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy. If you do not agree, please discontinue use immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Overview of the Service</h2>
              <p>
                KATABOOST is an AI-powered performance marketing platform that helps businesses optimize digital advertising, analyze marketing data, and improve campaign outcomes through intelligent automation and analytics tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Acceptance of Terms</h2>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>By using KATABOOST, you confirm that you have read, understood, and agree to these Terms;</li>
                <li>You are at least 18 years old or have the legal capacity to contract; and</li>
                <li>You will comply with all applicable laws, including data protection and marketing laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Account Registration and Access</h2>
              <p>
                Certain features require registration for a KATABOOST account. You agree to provide accurate, current, and complete information; keep your login credentials confidential; and notify us immediately of any unauthorized access to your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Permitted Use</h2>
              <p>You may use KATABOOST only for lawful business purposes. You must not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Attempt to copy, reverse-engineer, or decompile the Service;</li>
                <li>Use it for unlawful, deceptive, or unethical marketing; or</li>
                <li>Upload content that infringes intellectual property or privacy rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Fees and Payments</h2>
              <p>
                If you subscribe to a paid plan, all prices are stated in SGD unless otherwise specified. Payments are processed securely through authorized providers. Fees are non-refundable except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. AI and Data Usage</h2>
              <p>
                KATABOOST uses AI models to analyze marketing data. Recommendations are informational only. We may use aggregated, anonymized data to improve AI systems, but not your proprietary data for external purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property</h2>
              <p>
                All rights in KATABOOST belong to KATA Consulting Firm Pte. Ltd. or its licensors. You receive a limited, non-exclusive license to use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Data Privacy</h2>
              <p>
                Your use of KATABOOST is subject to our Privacy Policy, compliant with Singapore’s PDPA and international standards.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disclaimers</h2>
              <p>
                The Service is provided "as is". We do not warrant accuracy, completeness, or uninterrupted service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitation of Liability</h2>
              <p>
                KATA is not liable for indirect or consequential damages. Our total liability shall not exceed the amount paid by you in the past 12 months.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Suspension or Termination</h2>
              <p>
                We may suspend or terminate your access for breach or security reasons. Upon termination, rights to use the Service cease immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to These Terms</h2>
              <p>
                We may revise these Terms periodically. Continued use constitutes acceptance of updates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Governing Law</h2>
              <p>
                These Terms are governed by Singapore law. Any disputes fall under the exclusive jurisdiction of Singapore courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">14. Contact Us</h2>
              <div className="space-y-1">
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

export default Terms;