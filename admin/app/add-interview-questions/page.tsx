"use client";

import React, { useState } from "react";
import { Save, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function AddInterviewQuestions() {
  const [formData, setFormData] = useState({
    slug: "",
    content: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.slug || !formData.content) {
      setError("Both slug and content are required fields");
      return;
    }
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 mb-2">
          Create New Interview Question
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Add a new interview question with a unique slug and detailed content
        </p>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Slug Input */}
        <div className="space-y-2">
          <label
            htmlFor="slug"
            className="text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Question Slug
          </label>
          <input
            id="slug"
            type="text"
            value={formData.slug}
            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            placeholder="enter-question-slug"
            className="w-full p-3 rounded-md border border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                     placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The slug should be unique and URL-friendly (e.g., "two-sum-problem")
          </p>
        </div>

        {/* Content Input */}
        <div className="space-y-2">
          <label
            htmlFor="content"
            className="text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Question Content
          </label>
          <textarea
            id="content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Enter your question content, approach, and solution here..."
            rows={12}
            className="w-full p-3 rounded-md border border-gray-200 dark:border-gray-700 
                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400
                     placeholder:text-gray-400 dark:placeholder:text-gray-500
                     resize-y min-h-[200px]"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Include the problem statement, approach explanation, and solution code. You can use markdown for formatting.
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 
                     text-white rounded-md transition-colors duration-200
                     dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            <Save className="h-4 w-4" />
            Save Question
          </button>
        </div>
      </form>
    </div>
  );
}
