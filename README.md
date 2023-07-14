# TheSocialNetwork

This is a RESTful API for a social network web application where users can share their thoughts, react to friends' thoughts, and manage their friend list. It is built using Express.js for routing, a MongoDB database, and the Mongoose ODM. The API provides various endpoints for performing CRUD (Create, Read, Update, Delete) operations on users, thoughts, reactions, and friend lists.

To use this API, please follow the instructions below.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:
   
npm install


## Configuration

1. Create a MongoDB database for the social network application.
2. In the project directory, create a `.env` file and provide the following environment variables:
   
MONGODB_URI=<mongodb://127.0.0.1:27017/socialmedia>


## Usage

1. Start the server and sync the Mongoose models with the MongoDB database by running the following command:
   
npm start
The server will start, and the Mongoose models will be synced with the database.

3. Use a tool like Insomnia to interact with the API endpoints.

## API Endpoints

### User Routes

- `GET /api/users`: Fetch all users.
- `GET /api/users/:id`: Fetch a user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

### Thought Routes

- `GET /api/thoughts`: Fetch all thoughts.
- `GET /api/thoughts/:id`: Fetch a thought by ID.
- `POST /api/thoughts`: Create a new thought.
- `PUT /api/thoughts/:id`: Update a thought by ID.
- `DELETE /api/thoughts/:id`: Delete a thought by ID.

### Reaction Routes

- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought.

### Friend List Routes

- `POST /api/users/:userId/friends/:friendId`: Add a friend to a user's friend list.
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend from a user's friend list.

## Walkthrough Video

Please watch the [walkthrough video](file:///Users/rushburriel/Downloads/Untitled_%20Jul%2013,%202023%2011_00%20PM.webm) that demonstrates the functionality of the social network API and showcases the fulfillment of the acceptance criteria.

## Technologies Used

- Express.js
- MongoDB
- Mongoose
- JavaScript Date Library (optional, if used)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for using the Social Network API! If you have any further questions or need assistance, please feel free to reach out.


Rush Burriel
https://github.com/burrielrush
burrielrush@gmail.com
