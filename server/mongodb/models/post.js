import mongoose from 'mongoose'; // Importing mongoose for MongoDB interactions

// Defining the schema for the 'Post' collection in MongoDB
const Post = new mongoose.Schema({
  name: { type: String, required: true }, // Field for the name of the post creator
  prompt: { type: String, required: true }, // Field for the prompt associated with the post
  photo: { type: String, required: true }, // Field for the URL of the photo associated with the post
});

// Creating a model based on the schema defined above
const PostSchema = mongoose.model('Post', Post);

export default PostSchema; // Exporting the PostSchema model
