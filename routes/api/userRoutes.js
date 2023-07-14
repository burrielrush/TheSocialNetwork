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



// route 
//    .route('/')
//     .get()
//     .post();



route
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

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