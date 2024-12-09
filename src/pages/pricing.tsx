import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components/ui/button';

export function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Choose the perfect plan for your security needs
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$2,999",
                description: "Essential security testing for small businesses",
                features: [
                  "Basic Vulnerability Assessment",
                  "Web Application Testing",
                  "Network Security Scan",
                  "Basic Security Report",
                  "30 Days Support"
                ]
              },
              {
                name: "Professional",
                price: "$5,999",
                description: "Comprehensive security for growing organizations",
                features: [
                  "Advanced Penetration Testing",
                  "Infrastructure Security Assessment",
                  "Application Security Testing",
                  "Detailed Security Report",
                  "Priority Support",
                  "Compliance Check",
                  "90 Days Support"
                ],
                highlighted: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Full-scale security for large enterprises",
                features: [
                  "Full-Scale Penetration Testing",
                  "Advanced Infrastructure Testing",
                  "Custom Security Solutions",
                  "24/7 Priority Support",
                  "Compliance Management",
                  "Security Training",
                  "Dedicated Security Team",
                  "365 Days Support"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-lg p-8 ${
                  plan.highlighted
                    ? 'bg-blue-900 text-white transform scale-105 shadow-xl'
                    : 'bg-white border'
                }`}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold mb-2">{plan.price}</div>
                  <p className={`mb-6 ${plan.highlighted ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className={`h-5 w-5 mr-2 ${plan.highlighted ? 'text-blue-300' : 'text-blue-600'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-white text-blue-900 hover:bg-blue-50'
                      : ''
                  }`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does a security assessment take?",
                answer: "The duration varies depending on the scope and complexity of your systems. Typically, a basic assessment takes 1-2 weeks, while comprehensive testing may take 3-4 weeks."
              },
              {
                question: "Do you provide emergency response services?",
                answer: "Yes, we offer 24/7 emergency response services for critical security incidents. Our team can be deployed quickly to address urgent security concerns."
              },
              {
                question: "What industries do you serve?",
                answer: "We serve clients across various industries including healthcare, finance, technology, retail, and manufacturing. Our solutions are tailored to meet industry-specific requirements."
              },
              {
                question: "Do you offer custom solutions?",
                answer: "Yes, we can create custom security solutions based on your specific needs and requirements. Contact us to discuss your unique situation."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}