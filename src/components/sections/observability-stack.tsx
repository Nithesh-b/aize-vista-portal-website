import Image from 'next/image';

const observabilityLayers = [
  {
    title: 'Infrastructure',
    features: [
      'Blade & Rack Servers',
      'SAN & NAS Storage',
      'Network Equipment',
      'Security Devices & Firewalls',
    ],
  },
  {
    title: 'Virtualization',
    features: ['VMware vSphere', 'Citrix Zen', 'Openstack', 'Containerization'],
  },
  {
    title: 'Cloud',
    features: ['AWS', 'Azure', 'Google Cloud', 'Oracle Cloud'],
  },
  {
    title: 'Application & AI',
    features: [
      'Distributed Tracing',
      'Application Performance',
      'AI-assisted Monitoring',
      'Predictive Analytics',
    ],
  },
];

const ObservabilityStack = () => {
  return (
    <section id="observability" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Complete Observability Stack
          </h2>
          <p className="text-lg text-gray-600">
            Monitor and optimize your entire technology ecosystem from infrastructure to applications
          </p>
          <div role="none" className="shrink-0 mt-8 bg-blue-200 w-24 h-1 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a5c49d08-675b-4dc9-b857-a83573844347-preview--aize-vista-portal-lovable-app/assets/images/images_2.png"
              alt="Observability Dashboard"
              width={800}
              height={533}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Multi-layer Monitoring</h3>
            <p className="text-lg text-gray-700">
              Our comprehensive observability solutions cover every layer of your technology stack, providing real-time insights and proactive alerts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {observabilityLayers.map((layer) => (
                <div
                  key={layer.title}
                  className="rounded-lg border bg-white text-card-foreground shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="p-4">
                    <h4 className="font-semibold mb-2 text-gray-900">{layer.title}</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {layer.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObservabilityStack;