import { Link } from "react-router-dom";
import { ArrowLeft, Mail, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg">
            Have questions about KataBoost? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 card-gradient border-0 shadow-custom">
            <h2 className="text-2xl font-semibold text-white mb-6">Send us a message</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input 
                    id="firstName" 
                    type="text" 
                    className="mt-1" 
                    placeholder="John"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input 
                    id="lastName" 
                    type="text" 
                    className="mt-1" 
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  className="mt-1" 
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-white">Company (Optional)</Label>
                <Input 
                  id="company" 
                  type="text" 
                  className="mt-1" 
                  placeholder="Your Company"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input 
                  id="subject" 
                  type="text" 
                  className="mt-1" 
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea 
                  id="message" 
                  className="mt-1 min-h-[120px]" 
                  placeholder="Tell us more about your needs..."
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground hover-lift"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-6">Get in touch</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you're interested in our beta program, have questions about our AI-powered 
                media planning tools, or need technical support, our team is here to help.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 card-gradient border-0 shadow-custom">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Support</h3>
                    <p className="text-gray-300 mb-2">
                      For general inquiries and support
                    </p>
                    <a href="mailto:support@kataboost.com" className="text-primary hover:underline">
                      support@kataboost.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-gradient border-0 shadow-custom">
                <div className="flex items-start">
                  <MessageCircle className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Beta Program</h3>
                    <p className="text-gray-300 mb-2">
                      Questions about early access
                    </p>
                    <a href="mailto:beta@kataboost.com" className="text-primary hover:underline">
                      beta@kataboost.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 card-gradient border-0 shadow-custom">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-1">Response Time</h3>
                    <p className="text-gray-300">
                      We typically respond within 24 hours during business days. 
                      Beta participants receive priority support.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold text-white mb-2">Ready to get started?</h3>
              <p className="text-gray-300 mb-4">
                Join our beta program and transform your ad campaigns with AI-powered optimization.
              </p>
              <a href="https://wa.link/44vmy3" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary-hover text-primary-foreground hover-lift">
                  Request Early Access
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
