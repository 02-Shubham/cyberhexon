import React from 'react';
import { Button } from '../components/ui/button';
import { Shield, Lock, Server, AlertCircle } from 'lucide-react';
import { HeroSlideshow } from '../components/hero-slideshow';

export function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSlideshow />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-gray-600">Comprehensive security solutions for your organization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="h-8 w-8 text-blue-600" />,
                title: "Penetration Testing",
                description: "Identify vulnerabilities before attackers do"
              },
              {
                icon: <Server className="h-8 w-8 text-blue-600" />,
                title: "Infrastructure Security",
                description: "Protect your critical systems and networks"
              },
              {
                icon: <AlertCircle className="h-8 w-8 text-blue-600" />,
                title: "Security Audits",
                description: "Comprehensive assessment of your security posture"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to secure your business?</h2>
            <p className="text-blue-100 mb-8">
              Get in touch with our security experts for a free consultation
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}