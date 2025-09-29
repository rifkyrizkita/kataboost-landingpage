import { AlertTriangle, Clock, Database, Target, TrendingDown } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <Clock className="h-8 w-8 text-red-500" />,
      title: "Time-Consuming",
      description: "Setting up a single campaign can take hours, requiring multiple tools, spreadsheets, and back-and-forth approvals."
    },
    {
      icon: <Database className="h-8 w-8 text-orange-500" />,
      title: "Data Fragmentation",
      description: "Historical campaign data lives across different platforms, accounts, and formats, making it almost impossible to see the full picture or learn what actually works."
    },
    {
      icon: <Target className="h-8 w-8 text-yellow-500" />,
      title: "Creative Guesswork",
      description: "Marketers often rely on gut feeling instead of proven formulas, resulting in low conversion rates and wasted ad spend."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-red-600" />,
      title: "Lack of Insights",
      description: "Teams struggle to identify why certain campaigns perform better than others, leading to repeated mistakes and inconsistent ROI."
    }
  ];

  const results = [
    "Faster campaign launches (minutes instead of hours)",
    "Clear insights from unified data",
    "Higher-performing ads powered by AI-driven recommendations",
    "A repeatable, scalable system that removes uncertainty from digital advertising"
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            The Problem We Solve
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4">
            Digital advertisers waste countless hours building campaigns on Meta and TikTok, with most of that time lost to manual setup, fragmented data, and inconsistent strategies.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="mb-4">{problem.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{problem.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12 border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              KataBoost eliminates these bottlenecks.
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              We centralize campaign creation, management, and performance data into a single AI-powered platform. Instead of spending hours guessing, marketers can build campaigns in minutes using guided workflows, leverage historical data to make smarter decisions, and apply the Ultimate Winning Ad Blueprint methodology for creatives that consistently perform.
            </p>
          </div>

          {/* Results */}
          <div className="mb-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">The result:</h4>
            <div className="grid md:grid-cols-2 gap-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-blue-200">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{result}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              KataBoost transforms campaign building from manual guesswork into a data-driven, AI-supported workflow, giving agencies, businesses, and performance marketers a faster path to measurable results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;