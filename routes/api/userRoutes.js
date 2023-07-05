const route = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/userController');

// /api/users

route 
    .route('/')
    .get()
    .post();

// /api/users/:id

route
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
route
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);

    // /api/users
route
    .route('/')
    .get(getAllUsers)
    .post(createUser);

module.exports = route;