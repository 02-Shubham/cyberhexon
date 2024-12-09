import React from 'react';
import { Shield, Users, Award, Target } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About CyberShield
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're a team of dedicated cybersecurity experts committed to protecting businesses from evolving digital threats.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At CyberShield, we believe that every organization deserves enterprise-grade security. Our mission is to make advanced cybersecurity solutions accessible to businesses of all sizes.
              </p>
              <p className="text-gray-600">
                We combine cutting-edge technology with expert knowledge to deliver comprehensive security assessments and solutions that protect your digital assets.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Shield className="h-8 w-8 text-blue-600" />, label: "Security First" },
                { icon: <Users className="h-8 w-8 text-blue-600" />, label: "Expert Team" },
                { icon: <Award className="h-8 w-8 text-blue-600" />, label: "Certified" },
                { icon: <Target className="h-8 w-8 text-blue-600" />, label: "Results Driven" }
              ].map((item, index) => (
                <div key={index} className="p-6 border rounded-lg text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <p className="font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">Meet the experts behind CyberShield</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Security Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              },
              {
                name: "Emma Thompson",
                role: "Head of Operations",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}