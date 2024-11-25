import axios from 'axios';

async function fetchLeetCodeProblemOfTheDay() {
  try {
    const query = `
      query {
        activeDailyCodingChallengeQuestion {
          date
          link
          question {
            title
            difficulty
            topicTags {
              name
            }
          }
        }
      }
    `;

    const response = await axios.post('https://leetcode.com/graphql', { query });

    const data = response.data.data.activeDailyCodingChallengeQuestion;

    // Structure the result
    return {
      date: data.date,
      title: data.question.title,
      difficulty: data.question.difficulty,
      tags: data.question.topicTags.map((tag) => tag.name),
      link: `https://leetcode.com${data.link}`,
    };
  } catch (error) {
    console.error('Error fetching LeetCode Problem of the Day:', error.message);
    return null;
  }
}

// Example usage
fetchLeetCodeProblemOfTheDay().then((problem) => {
  if (problem) {
    console.log(
      `LeetCode Problem of the Day: ${problem.title} (${problem.difficulty}) - ${problem.link}`
    );
  } else {
    console.log('Failed to fetch the Problem of the Day.');
  }
});

