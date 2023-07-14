const User = require('../models/User');
const Thought = require('../models/Thought');

async function getAllUsers(req, res) {
  try {
    const users = await User.find().select('-__v');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
}

async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id)
      .populate('thoughts')
      .populate('friends');
      
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
}

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create a new user' });
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update the user' });
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    await Thought.deleteMany({ username: user.username });
    
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete the user' });
  }
}

async function addFriend(req, res) {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findById(userId);
    const friend = await User.findById(friendId);
    
    if (!user || !friend) {
      return res.status(404).json({ error: 'User or friend not found' });
    }
    
    user.friends.push(friendId);
    await user.save();
    
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add friend' });
  }
}

async function removeFriend(req, res) {
  try {
    const { userId, friendId } = req.params;
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    const friendIndex = user.friends.indexOf(friendId);
    if (friendIndex === -1) {
      return res.status(404).json({ error: 'Friend not found in the user\'s friend list' });
    }
    
    user.friends.splice(friendIndex, 1);
    await user.save();
    
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: 'Failed to remove friend' });
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
};