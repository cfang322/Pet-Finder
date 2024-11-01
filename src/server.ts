// Start by importing required modules
// Imports the Express framework so you can set up a server and define routes.
// Imports dotenv so you can configure environment variables (e.g., server port, database URL) for different environments securely.
import express from 'express'; 
import dotenv from 'dotenv'; 

// Initialize dotenv configuration - Loads environment variables from the .env file into process.env, allowing you to access them throughout your codebase.
dotenv.config();

// Create an Express application - app: Creates an instance of an Express application, which will handle incoming requests and responses
const app = express();

// Define the server port - PORT: Sets the port to listen on. process.env.PORT allows you to use an environment variable if it's set(useful for deployment), but defaults to 3000 locally if no variable is specified
const PORT = process.env.PORT || 3000;

// Define a simple test route 
// app.get('/', (req, res) => { ... }): Creates a route that listens for GET requests to the root URL (/)
// (req, res): These are the request and response objects. req holds incoming data, while res is used to send data back.
// res.send('Pet Finder API'): Sends a text response ("Pet Finder API") to the browser when this route is accessed.
app.get('/', (req, res) => {        
    res.send('Pet Finder API');
});  

// Make the server listen on the specified port
// app.listen(PORT, () => { ... }): Starts the server, making it listen for incoming requests on the specified PORT.
// console.log(...): Outputs a message to the console indicating the server is up and running, with the active port number.
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

 