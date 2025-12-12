import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-6 border-primary/30 text-primary hover:bg-primary/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-gray-400">Last updated: [Date]</p>
        </div>

        <div className="prose prose-slate max-w-none">
          <div className="space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Cookies</h2>
              <p>
                KataBoost uses cookies to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Remember your preferences and settings</li>
                <li>Keep you signed in to your account</li>
                <li>Analyze how you use our website to improve performance</li>
                <li>Provide personalized content and advertisements</li>
                <li>Measure the effectiveness of our marketing campaigns</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Analytics Cookies</h3>
                  <p>We use Google Analytics to understand how visitors interact with our website. These cookies collect information about how you use our site, including which pages you visit most often.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p>These cookies are used by Meta (Facebook) and TikTok pixels to track conversions and retarget visitors with relevant advertisements on their platforms.</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                  <p>These cookies remember your preferences and settings to provide a more personalized experience, such as your preferred language or region.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Third-Party Cookies</h2>
              <p>
                We may allow certain third-party companies to set cookies on our website to provide services to us. These include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Google Analytics:</strong> For website analytics and performance measurement</li>
                <li><strong>Meta Pixel:</strong> For Facebook and Instagram advertising and conversion tracking</li>
                <li><strong>TikTok Pixel:</strong> For TikTok advertising and conversion tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Managing Cookies</h2>
              <p>
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Use our cookie consent banner to accept or reject non-essential cookies</li>
                <li>Modify your browser settings to block or delete cookies</li>
                <li>Use browser extensions that block tracking cookies</li>
                <li>Opt out of interest-based advertising through industry choice pages</li>
              </ul>
              <p className="mt-4">
                Please note that blocking or deleting cookies may impact your user experience and some features of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Cookie Retention</h2>
              <p>
                Cookies are retained for different periods depending on their purpose:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain on your device for a set period (up to 2 years) or until you delete them</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about our use of cookies, please contact us at privacy@kataboost.com.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
