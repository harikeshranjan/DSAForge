import { FileSpreadsheet, Home, Pencil, SquarePen } from "lucide-react";

export const header = [
  {
    id: "aae0b858-1b0b-4d5c-b984-30bbbd9139f8",
    title: "Home",
    path: "/",
    slug: "home",
    icon: Home
  },
  {
    id: "c36e8ce3-0f14-4868-b2e1-4f87980e5085",
    title: "Tutorial",
    path: "/tutorial",
    slug: "tutorial",
    icon: Pencil
  },
  {
    id: "dc3f88a5-10b3-43ae-a466-de995f66904a",
    title: "Interview Questions",
    path: "/interview-questions",
    slug: "interview-questions",
    icon: FileSpreadsheet
  },
  {
    id: "9381431c-b257-4a98-a526-12feb2493ca8",
    title: "Practice Questions",
    path: "/practice-questions",
    slug: "practice-questions",
    icon: SquarePen
  }
] as const;

export const features = [
  {
    id: 1,
    title: "Tutorial",
    desc: "Dive deep into DSA with comprehensive tutorials tailored for every level of learner.",
    icon: Pencil,
  },
  {
    id: 2,
    title: "Interview Questions",
    desc: "Prepare for your next coding interview with real-world problem sets and solutions.",
    icon: FileSpreadsheet,
  },
  {
    id: 3,
    title: "Practice Questions",
    desc: "Sharpen your skills with a variety of practice questions across different topics.",
    icon: SquarePen,
  }
] as const;

export const tutorialSidebarDS = [
  {
    id: 1,
    heading: 'Array',
    slug: 'array',
    subtopics: [
      { id: 11, heading: 'Introduction', slug: 'array-introduction' },
      { id: 12, heading: 'Operations', slug: 'array-operations' },
      { id: 13, heading: 'Applications', slug: 'array-applications' },
    ],
  },
  {
    id: 2,
    heading: 'Matrix',
    slug: 'matrix',
    subtopics: [
      { id: 21, heading: 'Introduction', slug: 'matrix-introduction' },
      { id: 22, heading: 'Operations', slug: 'matrix-operations' },
      { id: 23, heading: 'Applications', slug: 'matrix-applications' },
    ],
  },
  {
    id: 3,
    heading: 'String',
    slug: 'string',
    subtopics: [
      { id: 31, heading: 'Introduction', slug: 'string-introduction' },
      { id: 32, heading: 'Operations', slug: 'string-operations' },
      { id: 33, heading: 'Applications', slug: 'string-applications' },
    ],
  },
  {
    id: 4,
    heading: 'Linked List',
    slug: 'linked-list',
    subtopics: [
      { id: 41, heading: 'Singly Linked List', slug: 'singly-linked-list' },
      { id: 42, heading: 'Doubly Linked List', slug: 'doubly-linked-list' },
      { id: 43, heading: 'Circular Linked List', slug: 'circular-linked-list' },
    ],
  },
  {
    id: 5,
    heading: 'Stack',
    slug: 'stack',
    subtopics: [
      { id: 51, heading: 'Introduction', slug: 'stack-introduction' },
      { id: 52, heading: 'Operations', slug: 'stack-operations' },
      { id: 53, heading: 'Applications', slug: 'stack-applications' },
    ],
  },
  {
    id: 6,
    heading: 'Queue',
    slug: 'queue',
    subtopics: [
      { id: 61, heading: 'Introduction', slug: 'queue-introduction' },
      { id: 62, heading: 'Operations', slug: 'queue-operations' },
      { id: 63, heading: 'Applications', slug: 'queue-applications' },
      { id: 64, heading: 'Priority Queue', slug: 'priority-queue' },
      { id: 65, heading: 'Deque', slug: 'deque' },
    ],
  },
  {
    id: 7,
    heading: 'Tree',
    slug: 'tree',
    subtopics: [
      { id: 71, heading: 'Binary Tree', slug: 'binary-tree' },
      { id: 72, heading: 'Binary Search Tree', slug: 'binary-search-tree' },
      { id: 73, heading: 'AVL Tree', slug: 'avl-tree' },
      { id: 74, heading: 'Red-Black Tree', slug: 'red-black-tree' },
      { id: 75, heading: 'Segment Tree', slug: 'segment-tree' },
    ],
  },
  {
    id: 8,
    heading: 'Graph',
    slug: 'graph',
    subtopics: [
      { id: 81, heading: 'Introduction', slug: 'graph-introduction' },
      { id: 82, heading: 'Graph Representations', slug: 'graph-representations' },
      { id: 83, heading: 'Graph Traversal', slug: 'graph-traversal' },
      { id: 84, heading: 'Shortest Path Algorithms', slug: 'shortest-path-algorithms' },
    ],
  },
  {
    id: 9,
    heading: 'Heap',
    slug: 'heap',
    subtopics: [
      { id: 91, heading: 'Min Heap', slug: 'min-heap' },
      { id: 92, heading: 'Max Heap', slug: 'max-heap' },
      { id: 93, heading: 'Heap Operations', slug: 'heap-operations' },
    ],
  },
  {
    id: 10,
    heading: 'Hashing',
    slug: 'hashing',
    subtopics: [
      { id: 101, heading: 'Hash Functions', slug: 'hash-functions' },
      { id: 102, heading: 'Collision Resolution', slug: 'collision-resolution' },
      { id: 103, heading: 'Applications', slug: 'hashing-applications' },
    ],
  },
] as const;

export const tutorialSidebarA = [
  {
    id: 1,
    heading: 'Sorting Algorithms',
    slug: 'sorting-algorithms',
    subtopics: [
      { id: 11, heading: 'Bubble Sort', slug: 'bubble-sort' },
      { id: 12, heading: 'Selection Sort', slug: 'selection-sort' },
      { id: 13, heading: 'Insertion Sort', slug: 'insertion-sort' },
      { id: 14, heading: 'Merge Sort', slug: 'merge-sort' },
      { id: 15, heading: 'Quick Sort', slug: 'quick-sort' },
      { id: 16, heading: 'Heap Sort', slug: 'heap-sort' },
      { id: 17, heading: 'Radix Sort', slug: 'radix-sort' },
      { id: 18, heading: 'Bucket Sort', slug: 'bucket-sort' },
    ],
  },
  {
    id: 2,
    heading: 'Searching Algorithms',
    slug: 'searching-algorithms',
    subtopics: [
      { id: 21, heading: 'Linear Search', slug: 'linear-search' },
      { id: 22, heading: 'Binary Search', slug: 'binary-search' },
      { id: 23, heading: 'Jump Search', slug: 'jump-search' },
      { id: 24, heading: 'Interpolation Search', slug: 'interpolation-search' },
      { id: 25, heading: 'Exponential Search', slug: 'exponential-search' },
      { id: 26, heading: 'Fibonacci Search', slug: 'fibonacci-search' },
    ],
  },
  {
    id: 3,
    heading: 'Graph Algorithms',
    slug: 'graph-algorithms',
    subtopics: [
      { id: 31, heading: 'Depth First Search', slug: 'dfs' },
      { id: 32, heading: 'Breadth First Search', slug: 'bfs' },
      { id: 33, heading: 'Dijkstra\'s Algorithm', slug: 'dijkstra-algorithm' },
      { id: 34, heading: 'A* Search Algorithm', slug: 'a-star-search' },
      { id: 35, heading: 'Floyd-Warshall Algorithm', slug: 'floyd-warshall-algorithm' },
      { id: 36, heading: 'Bellman-Ford Algorithm', slug: 'bellman-ford-algorithm' },
      { id: 37, heading: 'Topological Sort', slug: 'topological-sort' },
      { id: 38, heading: 'Prim\'s Algorithm', slug: 'prims-algorithm' },
      { id: 39, heading: 'Kruskal\'s Algorithm', slug: 'kruskals-algorithm' },
    ],
  },
  {
    id: 4,
    heading: 'Dynamic Programming',
    slug: 'dynamic-programming',
    subtopics: [
      { id: 41, heading: 'Introduction', slug: 'dp-introduction' },
      { id: 42, heading: 'Fibonacci Series', slug: 'fibonacci-series' },
      { id: 43, heading: 'Longest Common Subsequence', slug: 'lcs' },
      { id: 44, heading: 'Knapsack Problem', slug: 'knapsack-problem' },
      { id: 45, heading: 'Shortest Path', slug: 'shortest-path' },
      { id: 46, heading: 'Matrix Chain Multiplication', slug: 'matrix-chain-multiplication' },
    ],
  },
  {
    id: 5,
    heading: 'Greedy Algorithms',
    slug: 'greedy-algorithms',
    subtopics: [
      { id: 51, heading: 'Introduction', slug: 'greedy-introduction' },
      { id: 52, heading: 'Activity Selection', slug: 'activity-selection' },
      { id: 53, heading: 'Huffman Coding', slug: 'huffman-coding' },
      { id: 54, heading: 'Kruskal\'s Algorithm', slug: 'kruskals-algorithm' },
      { id: 55, heading: 'Prim\'s Algorithm', slug: 'prims-algorithm' },
      { id: 56, heading: 'Job Sequencing', slug: 'job-sequencing' },
    ],
  },
  {
    id: 6,
    heading: 'Backtracking',
    slug: 'backtracking',
    subtopics: [
      { id: 61, heading: 'Introduction', slug: 'backtracking-introduction' },
      { id: 62, heading: 'N-Queen Problem', slug: 'n-queen-problem' },
      { id: 63, heading: 'Sudoku Solver', slug: 'sudoku-solver' },
      { id: 64, heading: 'Graph Coloring', slug: 'graph-coloring' },
      { id: 65, heading: 'Hamiltonian Cycle', slug: 'hamiltonian-cycle' },
      { id: 66, heading: 'Rat in a Maze', slug: 'rat-in-a-maze' },
    ],
  },
] as const;

export const interviewQuestionsSidebar = [
  {
    id: 'basics',
    title: 'Basics',
    slug: '/basics',
  },
  {
    id: 'arrays',
    title: 'Arrays',
    slug: '/arrays',
  },
  {
    id: 'strings',
    title: 'Strings',
    slug: '/strings',
  },
  {
    id: 'linked-lists',
    title: 'Linked Lists',
    slug: '/linked-lists',
  },
  {
    id: 'stacks',
    title: 'Stacks',
    slug: '/stacks',
  },
  {
    id: 'queues',
    title: 'Queues',
    slug: '/queues',
  },
  {
    id: 'trees',
    title: 'Trees',
    slug: '/trees',
  },
  {
    id: 'graphs',
    title: 'Graphs',
    slug: '/graphs',
  },
  {
    id: 'sorting',
    title: 'Sorting',
    slug: '/sorting',
  },
  {
    id: 'searching',
    title: 'Searching',
    slug: '/searching',
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    slug: '/dynamic-programming',
  },
  {
    id: 'greedy-algorithms',
    title: 'Greedy Algorithms',
    slug: '/greedy-algorithms',
  },
  {
    id: 'bit-manipulation',
    title: 'Bit Manipulation',
    slug: '/bit-manipulation',
  },
  {
    id: 'recursion',
    title: 'Recursion',
    slug: '/recursion',
  },
  {
    id: 'backtracking',
    title: 'Backtracking',
    slug: '/backtracking',
  },
  {
    id: 'object-oriented-programming',
    title: 'Object Oriented Programming',
    slug: '/object-oriented-programming',
  }
] as const;
