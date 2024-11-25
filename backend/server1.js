import axios from 'axios';

// Base URL for Alfa-Leetcode-API
const API_URL = 'https://alfa-leetcode-api.onrender.com';

// Function to fetch daily problem
async function fetchDailyProblem() {
  try {
    const response = await axios.get(`${API_URL}`);
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching daily problem:', error.message);
    return null;
  }
}

// Function to fetch random problems based on topic tags
async function fetchRandomProblems(tags) {
  try {
    const response = await axios.get(`${API_URL}/problems?tags=${tags}`);
    const problems = response.data;
    
    if (!problems || problems.length < 2) {
      throw new Error('Not enough problems found for the given tags.');
    }

    // Select two random problems
    const randomProblems = getRandomProblems(problems, 2);
    return randomProblems;
  } catch (error) {
    console.error('Error fetching problems:', error.message);
    return null;
  }
}

// Helper function to get n random problems from the list
function getRandomProblems(problems, n) {
  const randomProblems = [];
  const usedIndexes = new Set();

  while (randomProblems.length < n) {
    const randomIndex = Math.floor(Math.random() * problems.length);

    // Avoid duplicates
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      randomProblems.push(problems[randomIndex]);
    }
  }

  return randomProblems;
}

// Example usage to fetch daily problem
fetchDailyProblem().then((data) => {
  if (data) {
    console.log('Daily Problem:', data);
  } else {
    console.log('Failed to fetch daily problem.');
  }
});

// Example usage to fetch random problems with tags "array" and "string"
const topicTags = 'array+string';
fetchRandomProblems(topicTags).then((randomProblems) => {
  if (randomProblems) {
    console.log('Random Problems:', randomProblems);
  } else {
    console.log('Failed to fetch random problems.');
  }
});
