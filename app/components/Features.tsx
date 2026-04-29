import { Zap, Lock, BarChart3, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Lightning Fast",
      description: "Optimized algorithms that process millions of data points in milliseconds."
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-400" />,
      title: "Bank-Grade Security",
      description: "End-to-end encryption ensuring your proprietary data remains yours."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
      title: "Real-Time Insights",
      description: "Live dashboards updating instantly with the latest predictive analytics."
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-500" />,
      title: "Global Scale",
      description: "Cloud-native architecture designed to scale globally without friction."
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient">NovaAI</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We don&apos;t just build AI; we build competitive advantages. Discover the features that set us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-6 rounded-2xl flex flex-col items-start hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
