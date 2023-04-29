const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://ethanjevvell.github.io/ai-showcase",
  title: "Ai50.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Ethan Jewell",
  role: "Freelance Developer",
  description: "",
  resume: "https://example.com",
  social: {
    linkedin: "https://linkedin.com/ethanjevvell",
    github: "https://github.com/ethanjevvell",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Degrees",
    description: "Apply breadth-first search to find the shortest path is large data structures",
    stack: ["Python", "BFS", "Search Trees"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/degrees",
    livePreview: "TO-DO",
  },
  {
    name: "Tic-Tac-Toe",
    description: "Use minimax search to create a Tic-Tac-Toe AI",
    stack: ["Python", "Minimax", "Alpha-Beta Pruning"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/tictactoe",
    livePreview: "TO-DO",
  },
  {
    name: "Knights",
    description: "Solve logical puzzles with knowledge bases",
    stack: ["Python", "Knowledge Bases", "Model Checking"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/knights",
    livePreview: "https://github.com",
  },
  {
    name: "Minesweeper",
    description: "Create Minesweeper AI with knowledge base and inference capabilities",
    stack: ["Python", "Knowledge Bases", "Model Checking"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/minesweeper",
    livePreview: "https://github.com",
  },
  {
    name: "PageRank",
    description: "Use Markov Chains to create Google-like page ranking AI",
    stack: ["Markov Chains", "Python", "Random Surfer"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/pagerank",
    livePreview: "https://github.com",
  },
  {
    name: "Heredity",
    description: "Apply Bayesian Networks to estimate prevelance of target genes in population",
    stack: ["Python", "Bayesian Network", "Probability"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/heredity",
    livePreview: "https://github.com",
  },
  {
    name: "Crossword",
    description: "Use constraint satisfaction logic to generate crossword puzzles",
    stack: ["Constraint Satisfaction", "Arc Consistency", "Python"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/crossword",
    livePreview: "https://github.com",
  },
  {
    name: "Shopping",
    description: "Predict which shopppers will purchase merchandise",
    stack: ["Perceptron Learning", "K-nearest neighbor", "Python"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/shopping",
    livePreview: "https://github.com",
  },
  {
    name: "Nim",
    description: "Train an AI with Q-learning to master Nim",
    stack: ["Q-learning", "Python"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/nim",
    livePreview: "https://github.com",
  },
  {
    name: "Traffic",
    description: "Train a convolutional neural network to recognize German street signs",
    stack: ["Neural Networks", "Convolution", "Pooling"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/traffic",
    livePreview: "https://github.com",
  },
  {
    name: "Parser",
    description: "Develop context-free grammar to parse sentence structure and noun-chunks",
    stack: ["NLP", "Context-free Grammar"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/parser",
    livePreview: "https://github.com",
  },
  {
    name: "Questions",
    description: "Train an AI to perform information retrieval with tf-idf",
    stack: ["Information Retrieval", "TF-IDF", "Tokenization"],
    sourceCode: "https://github.com/ethanjevvell/ai50/tree/master/questions",
    livePreview: "https://github.com",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "SASS",
  "Material UI",
  "Git",
  "CI/CD",
  "Jest",
  "Enzyme",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "johnsmith@mail.com",
};

export { header, about, projects, skills, contact };
