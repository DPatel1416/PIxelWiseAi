import express from 'express'; // Importing Express framework for creating APIs
import * as dotenv from 'dotenv'; // Importing dotenv for environment variable management
import { v2 as cloudinary } from 'cloudinary'; // Importing cloudinary library for working with cloud storage
import Post from '../mongodb/models/post.js'; // Importing the Post model from MongoDB

dotenv.config(); // Loading environment variables from .env file

const router = express.Router(); // Creating a router instance for defining API routes

// Configuring cloudinary with API credentials from environment variables
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Handling GET request to the root endpoint
router.route('/').get(async (req, res) => {
  try {
    const posts = await Post.find({}); // Retrieving all posts from MongoDB
    res.status(200).json({ success: true, data: posts }); // Sending a JSON response with the retrieved posts
  } catch (err) {
    res.status(500).json({ success: false, message: 'error' }); // Sending an error response if an error occurs
  }
});

// Handling POST request to the root endpoint
router.route('/').post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body; // Extracting data from the request body
    const photoUrl = await cloudinary.uploader.upload(photo); // Uploading the photo to cloudinary and getting its URL

    // Creating a new post document in MongoDB using the provided data
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url, // Storing the photo URL in the post document
    });

    res.status(200).json({ success: true, data: newPost }); // Sending a JSON response with the newly created post
  } catch (err) {
    res.status(500).json({ success: false, message: 'error' }); // Sending an error response if an error occurs
  }
});

export default router; // Exporting the router to be used by the Express application
