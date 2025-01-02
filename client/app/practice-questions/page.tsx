import React from 'react';
import { Card } from '@/components/ui/card';
import { practiceQuestionsA, practiceQuestionsDS } from '@/lib/practiceQuestionsData';
import HashTags from '@/components/hash-tags';

export default function PracticeQuestions() {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/30';
      case 'medium': return 'text-yellow-600 bg-yellow-50 dark:text-yellow-400 dark:bg-yellow-900/30';
      case 'hard': return 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/30';
      default: return 'text-gray-600 bg-gray-50 dark:text-gray-400 dark:bg-gray-900/30';
    }
  };

  function capitalizeFirstLetter(str: string): string {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <section className="w-full max-w-screen-xl mx-auto mt-24 mb-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          Practice Questions
        </h1>
        <p className="text-lg">
          Master data structures and algorithms through our carefully curated collection of practice problems.
          Perfect for technical interviews and competitive programming preparation.
        </p>
      </div>

      <HashTags />

      <h2 className='mt-10 mb-5 text-center font-bold text-xl md:text-2xl'>Data Structures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {practiceQuestionsDS.map((section) => (
          <Card key={section.id} className="p-6 dark:bg-gray-900/50 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b dark:border-gray-800 dark:text-gray-200">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.questions.map((question, index) => (
                <div
                  key={question.id}
                  className="group flex items-center justify-between py-2 px-4 rounded transition-all duration-200 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-8 h-8 flex items-center justify-center border rounded-full font-medium dark:border-gray-700 dark:text-gray-300">
                      {index + 1}
                    </span>
                    <span className="dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                      {question.title}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(question.difficulty)}`}
                  >
                    {capitalizeFirstLetter(question.difficulty)}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <h2 className='mt-10 mb-5 text-center font-bold text-xl md:text-2xl'>Algorithms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {practiceQuestionsA.map((section) => (
          <Card key={section.id} className="p-6 dark:bg-gray-900/50 dark:border-gray-800">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b dark:border-gray-800 dark:text-gray-200">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.questions.map((question, index) => (
                <div
                  key={question.id}
                  className="group flex items-center justify-between py-2 px-4 rounded transition-all duration-200 cursor-pointer hover:bg-gray-50/50 dark:hover:bg-gray-800/50"
                >
                  <div className="flex items-center space-x-4">
                    <span className="w-8 h-8 flex items-center justify-center border rounded-full font-medium dark:border-gray-700 dark:text-gray-300">
                      {index + 1}
                    </span>
                    <span className="dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100">
                      {question.title}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(question.difficulty)}`}
                  >
                    {question.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
