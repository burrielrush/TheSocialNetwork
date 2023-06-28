// Function to generate a random username
const getRandomUsername = () => {
  const usernames = [
    'user1',
    'user2',
    'user3',
    // Add more usernames as needed
  ];
  return usernames[Math.floor(Math.random() * usernames.length)];
};

// Function to generate random post content
const getRandomPost = () => {
  const posts = [
    'This is my first post!',
    'Just hanging out with friends.',
    'Feeling excited about the weekend!',
    // Add more post content as needed
  ];
  return posts[Math.floor(Math.random() * posts.length)];
};

// Function to generate random comment content
const getRandomComment = () => {
  const comments = [
    'Nice post!',
    'I totally agree.',
    'Great job!',
    // Add more comment content as needed
  ];
  return comments[Math.floor(Math.random() * comments.length)];
};

// Function to generate a random like
const getRandomLike = () => {
  return true; // Return a random value, true or false
};

module.exports = {getRandomUsername, getRandomPost, getRandomComment, getRandomLike};

const {getRandomUsername, getRandomPost, getRandomComment, getRandomLike } = require('./data');

