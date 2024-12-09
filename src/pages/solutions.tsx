import React from 'react';
import { Shield, Lock, Server, Code, Database, Users } from 'lucide-react';
import { Button } from '../components/ui/button';

export function SolutionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="h-8 w-8 text-blue-600" />,
                title: "Penetration Testing",
                description: "Comprehensive security assessment to identify vulnerabilities in your systems",
                features: [
                  "Web Application Testing",
                  "Network Infrastructure Testing",
                  "Mobile Application Testing",
                  "API Security Testing"
                ]
              },
              {
                icon: <Server className="h-8 w-8 text-blue-600" />,
                title: "Infrastructure Security",
                description: "Protect your critical systems and networks from threats",
                features: [
                  "Network Security Assessment",
                  "Cloud Security Review",
                  "Configuration Analysis",
                  "Security Monitoring"
                ]
              },
              {
                icon: <Code className="h-8 w-8 text-blue-600" />,
                title: "Application Security",
                description: "Secure your applications from development to deployment",
                features: [
                  "Source Code Review",
                  "Security Architecture Review",
                  "Secure SDLC Implementation",
                  "DevSecOps Integration"
                ]
              },
              {
                icon: <Database className="h-8 w-8 text-blue-600" />,
                title: "Data Security",
                description: "Protect your sensitive data and ensure compliance",
                features: [
                  "Data Privacy Assessment",
                  "Compliance Auditing",
                  "Data Protection Strategy",
                  "Encryption Implementation"
                ]
              },
              {
                icon: <Users className="h-8 w-8 text-blue-600" />,
                title: "Security Training",
                description: "Empower your team with security knowledge",
                features: [
                  "Security Awareness Training",
                  "Phishing Simulations",
                  "Incident Response Training",
                  "Custom Security Workshops"
                ]
              },
              {
                icon: <Shield className="h-8 w-8 text-blue-600" />,
                title: "Managed Security",
                description: "Continuous security monitoring and protection",
                features: [
                  "24/7 Security Monitoring",
                  "Threat Detection & Response",
                  "Vulnerability Management",
                  "Security Reporting"
                ]
              }
            ].map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}