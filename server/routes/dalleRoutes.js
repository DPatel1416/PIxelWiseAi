import express from 'express'; // Importing Express framework for creating APIs
import * as dotenv from 'dotenv'; // Importing dotenv for environment variable management
import { Configuration, OpenAIApi } from 'openai'; // Importing OpenAI SDK for interacting with the OpenAI API

dotenv.config(); // Loading environment variables from .env file

const router = express.Router(); // Creating a router instance for defining API routes

// Creating a configuration object for OpenAI API using the API key from environment variables
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Creating an instance of OpenAI API using the configuration object
const openai = new OpenAIApi(configuration);

// Handling GET request to the root endpoint
router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from PixelWise AI!' }); // Sending a JSON response with a greeting message
});

// Handling POST request to the root endpoint
router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body; // Extracting 'prompt' data from the request body

    // Calling the OpenAI API to create an image based on the provided prompt
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json; // Extracting the base64 encoded image data from the response
    res.status(200).json({ photo: image }); // Sending a JSON response with the generated image data
  } catch (error) {
    console.error(error); // Logging any errors that occur
    // Sending an error response with the error message, or a generic message if no specific error message is available
    res.status(500).send(error?.response?.data?.error?.message || 'Something went wrong');
  }
});

export default router; // Exporting the router to be used by the Express application
