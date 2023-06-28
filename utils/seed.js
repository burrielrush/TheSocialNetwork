const connection = require('../config/connection');
const { User, Post, Comment, Like } = require('../models');
const { getRandomUsername, getRandomPost, getRandomComment, getRandomLike } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('Connected to the database.');

  await Post.deleteMany({});
  await User.deleteMany({});
  await Comment.deleteMany({});
  await Like.deleteMany({});

  const users = [];
  const posts = [];
  const comments = [];
  const likes = [];

  // Generate and insert random users
  for (let i = 0; i < 20; i++) {
    const username = getRandomUsername();
    const email = `${username.toLowerCase()}@example.com`;
    const password = 'password123';
    const profilePicture = `https://example.com/profiles/${username}.jpg`;

    users.push({
      username,
      email,
      password,
      profilePicture,
    });
  }

  await User.collection.insertMany(users);

  // Generate and insert random posts
  for (let i = 0; i < 50; i++) {
    const content = getRandomPost();
    const image = `https://example.com/images/post${i}.jpg`;
    const date = new Date();

    const user = users[Math.floor(Math.random() * users.length)];

    posts.push({
      user: user._id,
      content,
      image,
      date,
    });
  }

  await Post.collection.insertMany(posts);

  // Generate and insert random comments
  for (let i = 0; i < 100; i++) {
    const content = getRandomComment();
    const date = new Date();

    const user = users[Math.floor(Math.random() * users.length)];
    const post = posts[Math.floor(Math.random() * posts.length)];

    comments.push({
      user: user._id,
      post: post._id,
      content,
      date,
    });
  }

  await Comment.collection.insertMany(comments);

  // Generate and insert random likes
  for (let i = 0; i < 200; i++) {
    const user = users[Math.floor(Math.random() * users.length)];
    const post = posts[Math.floor(Math.random() * posts.length)];

    likes.push({
      user: user._id,
      post: post._id,
    });
  }

  await Like.collection.insertMany(likes);

  console.log(`Seeded ${users.length} users.`);
  console.log(`Seeded ${posts.length} posts.`);
  console.log(`Seeded ${comments.length} comments.`);
  console.log(`Seeded ${likes.length} likes.`);
  console.log('Seeds planted!');

  process.exit(0);
});
