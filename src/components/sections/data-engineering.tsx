import Image from 'next/image';
import { ChartBar, ChartLine, ChartPie } from 'lucide-react';

const DataEngineeringSection = () => {
  return (
    <section id="data" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Business Intelligence &amp; Data Engineering
          </h2>
          <p className="text-lg text-gray-600">
            Transform your data into actionable insights with our comprehensive data solutions
          </p>
          <div role="none" className="mx-auto mt-8 h-1 w-24 shrink-0 bg-blue-200"></div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900">Data-Driven Decision Making</h3>
            <p className="text-gray-700">
              Our data engineering team helps you build robust data pipelines, implement advanced analytics, and create insightful dashboards that drive business growth and operational efficiency.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <ChartBar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">Data Analytics</h4>
                  <p className="text-sm text-gray-600">Transform raw data into meaningful insights with advanced analytics tools and methodologies</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <ChartLine className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">Data Engineering</h4>
                  <p className="text-sm text-gray-600">Build robust ETL/ELT pipelines to consolidate and process data from multiple sources</p>s
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <ChartPie className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">BI Dashboards</h4>
                  <p className="text-sm text-gray-600">Create interactive visualizations using industry-leading tools like Tableau and Power BI</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <div className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">Data Lakes</div>
              <div className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">Data Warehousing</div>
              <div className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">Real-time Analytics</div>
              <div className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">Predictive Models</div>
              <div className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">Custom Reporting</div>
              <div className="inline-flex items-center rounded-full border border-transparent bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">KPI Tracking</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative h-full min-h-[400px]">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 blur-2xl"></div>
              <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a5c49d08-675b-4dc9-b857-a83573844347-preview--aize-vista-portal-lovable-app/assets/images/images_3.png"
                  alt="Data Engineering Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataEngineeringSection;