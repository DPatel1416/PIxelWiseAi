import express from 'express'; // Importing Express framework for creating APIs
import * as dotenv from 'dotenv'; // Importing dotenv for environment variable management
import cors from 'cors'; // Importing cors for handling Cross-Origin Resource Sharing
import connectDB from './mongodb/connect.js'; // Importing function to connect to MongoDB
import postRoutes from './routes/postRoutes.js'; // Importing routes for handling posts
import dalleRoutes from './routes/dalleRoutes.js'; // Importing routes for handling DALL-E requests

dotenv.config(); // Loading environment variables from .env file

const app = express(); // Creating an Express application instance
app.use(cors()); // Enabling CORS for all routes
app.use(express.json({ limit: '50mb' })); // Parsing JSON requests with a size limit of 50MB

// Defining routes for handling post-related requests
app.use('/api/v1/post', postRoutes);

// Defining routes for handling DALL-E requests
app.use('/api/v1/dalle', dalleRoutes);

// Handling GET request to the root endpoint
app.get('/', async (req, res) => {
  res.status(200).json({
    message: 'Hello from PixelWise AI!', // Sending a JSON response with a greeting message
  });
});

// Function to start the server
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL); // Connecting to MongoDB using the provided URL
    app.listen(8080, () => console.log('Server is running on http://localhost:8080')); // Starting the server on port 8080
  } catch (error) {
    console.log(error); // Logging any errors that occur during server startup
  }
};

startServer(); // Calling the function to start the server
