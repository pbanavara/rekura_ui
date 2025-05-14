import { FaArrowRight } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    title: 'Load & Scan',
    description: 'Simply place your dishes in the sink. Rekura will scan and identify each item to determine the optimal cleaning approach.',
    icon: '🔍'
  },
  {
    number: '02',
    title: 'Smart Sorting',
    description: 'The robot organizes dishes by material and cleaning requirements, ensuring delicate items get special treatment.',
    icon: '🧺'
  },
  {
    number: '03',
    title: 'Precise Washing',
    description: 'Advanced water jets and specialized brushes clean each dish with the perfect amount of pressure and detergent.',
    icon: '🚿'
  },
  {
    number: '04',
    title: 'Drying & Storage',
    description: 'Dishes are gently dried and organized in your cabinets or drying rack, ready for their next use.',
    icon: '✨'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-blue-500 tracking-wide uppercase">Process</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            How Rekura Works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            Experience the future of dishwashing with our simple, four-step process
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-1/2"></div>
          
          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                    <span className="text-4xl mb-4 inline-block">{step.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Number and line connector */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl font-bold z-10 mx-4">
                  {step.number}
                </div>

                {/* Spacer for right side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            See Rekura in Action
            <FaArrowRight className="ml-3 -mr-1 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
