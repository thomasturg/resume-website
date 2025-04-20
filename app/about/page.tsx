import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function About() {
  return (
    <div className="min-h-screen bg-white py-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
        
        {/* Contact Information */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="h-5 w-5 mr-2" />
            Arlington, TX
          </div>
          <div className="flex items-center text-gray-600">
            <PhoneIcon className="h-5 w-5 mr-2" />
            +1-817-666-2424
          </div>
          <div className="flex items-center text-gray-600">
            <EnvelopeIcon className="h-5 w-5 mr-2" />
            thomasmsturgeon@gmail.com
          </div>
          <a 
            href="https://www.linkedin.com/in/thomas-sturgeon-341a911a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600"
          >
            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Summary</h2>
          <p className="text-gray-700 leading-relaxed">
            Analytical and adaptable Finance & Economics student with proven success in customer-facing and operational roles. Known for blending sharp business acumen with hands-on logistics experience, I bring a proactive mindset, strong communication skills, and a detail-oriented approach to solving real-world problems. Passionate about translating data into insights and supporting high-impact implementations in fast-moving industrial and technology environments.
          </p>
        </div>
      </main>
    </div>
  )
} 