import { BookPlus, Book, PlusCircle, List, Search, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="p-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">
          DSAForge Management
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Create and manage your educational content and interview questions in one centralized platform.
        </p>

        {/* Quick Search Bar */}
        <div className="mt-8 max-w-xl mx-auto">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search tutorials or questions..."
              className="flex-1 bg-transparent border-0 focus:outline-none text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <BookPlus className="h-8 w-8 text-blue-500 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 px-2 py-1 rounded">
              Create
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 flex items-center gap-2">
            Add Tutorials
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Create and publish new educational tutorials with rich content formatting and media support
          </p>
        </div>

        <div className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <Book className="h-8 w-8 text-green-500 dark:text-green-400" />
            <span className="text-sm font-medium text-green-500 dark:text-green-400 bg-green-50 dark:bg-green-900/50 px-2 py-1 rounded">
              Browse
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 flex items-center gap-2">
            View Tutorials
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Browse, search, and manage your existing collection of tutorials
          </p>
        </div>

        <div className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <PlusCircle className="h-8 w-8 text-purple-500 dark:text-purple-400" />
            <span className="text-sm font-medium text-purple-500 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/50 px-2 py-1 rounded">
              Create
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 flex items-center gap-2">
            Add Interview Questions
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Create new interview questions with detailed solutions and difficulty levels
          </p>
        </div>

        <div className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all cursor-pointer">
          <div className="flex items-center justify-between mb-4">
            <List className="h-8 w-8 text-orange-500 dark:text-orange-400" />
            <span className="text-sm font-medium text-orange-500 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/50 px-2 py-1 rounded">
              Browse
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-50 mb-2 flex items-center gap-2">
            View Interview Questions
            <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Access and manage your repository of interview questions and their solutions
          </p>
        </div>
      </div>
    </section>
  );
}
