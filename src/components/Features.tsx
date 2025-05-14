import { FaRobot, FaWater, FaLeaf, FaBrain, FaTools, FaShieldAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaRobot className="w-8 h-8 text-blue-400" />,
    title: "Human-Like Dexterity",
    description: "Advanced robotic arms with precise motor control handle your most delicate dishware with care, just like human hands would."
  },
  {
    icon: <FaBrain className="w-8 h-8 text-purple-400" />,
    title: "AI-Powered Vision",
    description: "Computer vision identifies different dish types, materials, and levels of soiling to apply the perfect cleaning method."
  },
  {
    icon: <FaWater className="w-8 h-8 text-blue-400" />,
    title: "Water Efficient",
    description: "Uses up to 50% less water than traditional dishwashers while delivering superior cleaning results."
  },
  {
    icon: <FaLeaf className="w-8 h-8 text-green-400" />,
    title: "Eco-Friendly",
    description: "Energy-efficient operation and biodegradable detergents make Rekura an environmentally conscious choice."
  },
  {
    icon: <FaTools className="w-8 h-8 text-yellow-400" />,
    title: "Self-Cleaning",
    description: "Automatically cleans and maintains itself, ensuring optimal performance and hygiene."
  },
  {
    icon: <FaShieldAlt className="w-8 h-8 text-red-400" />,
    title: "Child & Pet Safe",
    description: "Built-in safety features and obstacle detection ensure safe operation around children and pets."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-500 tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Smarter Dishwashing, Effortless Living
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Rekura combines cutting-edge robotics with intuitive design to transform your kitchen experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
