import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="container flex flex-col-reverse justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">
          Master
          <span className="text-violet-400 dark:text-violet-600"> DSA </span>
          with Ease
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">
          Unlock the secrets of Data Structures and Algorithms with comprehensive tutorials,
          <br className="hidden md:inline lg:hidden" />
          real-world interview prep, and practice questions.
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <Link
            rel="noopener noreferrer"
            href="/tutorial"
            className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50"
          >
            Get Started
          </Link>
          <Link
            rel="noopener noreferrer"
            href="https://github.com/harikeshranjan"
            className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img src="/hero-section-dsa.jpg" alt="DSA Learning" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
      </div>
    </div>
  )
}
