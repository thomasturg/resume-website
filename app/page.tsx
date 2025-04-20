import { FC } from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12">            
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Thomas Sturgeon
            </h1>
            
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl">
                <span className="text-red-500">Finance</span> and{' '}
                <span className="text-[#7C9CC6]">Economics</span> Student
              </h2>
            </div>

            <a 
              href="https://www.linkedin.com/in/thomas-sturgeon-341a911a1/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#0A66C2] hover:bg-[#004182] transition-colors duration-200"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Connect on LinkedIn
            </a>
          </div>

          {/* Right Content - Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 px-4 sm:px-6 lg:px-0">
            <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-[#7C9CC6] rounded-bl-[100px] transform translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6"></div>
              <div className="relative bg-gray-200 rounded-bl-[100px] overflow-hidden w-full aspect-[4/5] sm:aspect-square">
                <Image
                  src="/images/headshot.jpg"
                  alt="Thomas Sturgeon"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  priority
                  className="rounded-bl-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home; 