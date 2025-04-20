export default function Skills() {
  return (
    <div className="min-h-screen bg-white py-16">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Skills</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Customer Service & Soft Skills */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customer Service & Soft Skills</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Customer Service
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Commercial Driving
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Safety Standards And Protocols
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Time Management
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Accuracy & Attention To Detail
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Performance Management
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Multitasking
              </li>
            </ul>
          </div>

          {/* Technical & Software Skills */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technical & Software Skills</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#7C9CC6] rounded-full mr-3"></span>
                R Programming
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#7C9CC6] rounded-full mr-3"></span>
                Microsoft Office
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#7C9CC6] rounded-full mr-3"></span>
                Excel
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#7C9CC6] rounded-full mr-3"></span>
                Microsoft Word
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#7C9CC6] rounded-full mr-3"></span>
                Microsoft PowerPoint
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
} 