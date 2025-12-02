import React from 'react';
import { Bot, Monitor, Database, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const servicesData = [
  {
    icon: <Bot className="h-6 w-6" />,
    title: "AI Agents & Automation",
    description: "Intelligent automation using cutting-edge AI technologies",
    features: [
      "ADK (Agent Development Kit) integration",
      "MCP (Model Context Protocol) implementation",
      "A2A (Agent-to-Agent) communication",
      "LangChain and LangGraph workflows",
      "n8n and Make automation platforms",
    ],
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Observability",
    description: "End-to-end monitoring solutions for your entire tech stack",
    features: [
      "Infrastructure monitoring (Servers, Storage, Network)",
      "Virtualization (VMware, Citrix, Openstack)",
      "Cloud providers (AWS, Azure, GCP, Oracle)",
      "Application monitoring and distributed tracing",
      "AI-assisted observability",
    ],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Engineering & BI",
    description: "Transform your raw data into actionable insights",
    features: [
      "Comprehensive data analytics",
      "ETL and ELT pipeline development",
      "Data warehouse optimization",
      "Business intelligence dashboards",
      "Tableau and Power BI integrations",
    ],
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Rapid MVP Development",
    description: "Bring your software ideas to life in record time",
    features: [
      "Full-stack software development",
      "AI agent development",
      "2-week delivery timeline",
      "Iterative development approach",
      "Production-ready deployment",
    ],
  },
];

const CoreServices = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600">
            We provide enterprise-grade solutions tailored to your business needs
          </p>
          <div className="mt-8 bg-blue-200 w-24 h-1 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg bg-white">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;