# Fullstack-MERN-Social-Network
Fullstack-MERN-Social-Network is a social network web application built using the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to sign up, create profiles, post updates, comment on posts, like posts, and interact with other users.

## Features
* User registration and login
* User profile creation and editing
* Posting and deleting updates
* Commenting on updates
* Liking updates
* Pagination of updates and comments
* User search functionality
* Responsive design for mobile and desktop

## Installation
To run the Fullstack-MERN-Social-Network project locally, follow these steps:

1. Clone the repository to your local machine using the following command:
bash

`git clone https://github.com/2ntenapph/Fullstack-MERN-Social-Network.git`
	
2. Install the dependencies to server and client directories:

`npm install`
	
3. Create a .env file in the server directory and add the following environment variables:
```
MONGO_URI=<your_mongoDB_URI>
JWT_SECRET=<your_jwt_secret>
PORT=3001
```	
Replace <your_mongoDB_URI> with your MongoDB connection string and <your_jwt_secret> with a secret string for JSON Web Tokens.

4. Start the development server:

`npm run dev`
	
5. Open the application in your web browser at http://localhost:3000

## Technologies Used
* MongoDB
* Express.js
* React
* Node.js
* Material UI
* JSON Web Tokens

## Contributing
Contributions to the project are welcome. If you find a bug or have an idea for a new feature, 
please create a new issue on the GitHub repository. If you would like to contribute code, please 
fork the repository and create a pull request with your changes.

## Acknowledgments
This project was inspired by tutorial series on [EdRoh's](https://www.youtube.com/@EdRohDev) channel.
