import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="pt-28 pb-20 lg:pt-36 lg:pb-32 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Unlock The Value of Your <span className="text-blue-600">Data</span> Through Intelligent AI Solutions
            </h1>
            <p className="text-xl text-gray-700">
              Antriva AI Labs helps businesses transform through AI agents, advanced observability, data engineering, and rapid MVP development.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-lg opacity-75"></div>
              <div className="relative bg-white rounded-lg shadow-xl p-6">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a5c49d08-675b-4dc9-b857-a83573844347-preview--aize-vista-portal-lovable-app/assets/images/images_1.png"
                  alt="Advanced Technology Dashboard"
                  width={612}
                  height={408}
                  className="w-full h-auto rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;