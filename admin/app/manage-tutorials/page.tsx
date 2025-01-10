"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2, FileText } from 'lucide-react';

export default function ManageTutorials() {
  const router = useRouter();

  // Sample data - replace with your actual data
  const tutorials = [
    { id: "1", slug: "getting-started-with-react", date: "2024-01-10" },
    { id: "2", slug: "mastering-typescript-basics", date: "2024-01-09" },
    { id: "3", slug: "tailwind-css-for-beginners", date: "2024-01-08" },
    { id: "4", slug: "advanced-react-patterns", date: "2024-01-07" }
  ];

  const handleDelete = (id: string) => {
    // Implement delete functionality here
    console.log('Deleting tutorial with id:', id);
  };

  const formatSlug = (slug: string) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="w-full min-h-screen transition-colors duration-200">
      <div className="container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Manage Tutorials
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400">
              {tutorials.length} {tutorials.length === 1 ? 'Tutorial' : 'Tutorials'} Available
            </p>
            <Button variant="outline" size="sm" className="text-sm" onClick={() => router.push('/add-tutorial')}>
              + New Tutorial
            </Button>
          </div>
        </div>

        {/* Tutorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card
              key={tutorial.id}
              className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                       hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 break-words">
                      {formatSlug(tutorial.slug)}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Added on {new Date(tutorial.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-4 pb-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(tutorial.id)}
                  className="flex items-center gap-2 opacity-80 hover:opacity-100"
                >
                  <Trash2 className="h-4 w-4" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {tutorials.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
            <FileText className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">No tutorials yet</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">Get started by creating your first tutorial</p>
            <Button className="mt-6" size="sm">
              Create Tutorial
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
