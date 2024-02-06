import mongoose from 'mongoose'; // Importing mongoose for MongoDB interactions

// Function to connect to MongoDB
const connectDB = (url) => {
  mongoose.set('strictQuery', true); // Setting strictQuery option to true for MongoDB queries
  mongoose.connect(url) // Connecting to MongoDB using the provided URL
    .then(() => console.log('connected to mongo')) // Log message if connection is successful
    .catch((err) => { // Catching errors if connection fails
      console.error('failed to connect with mongo'); // Logging failure message
      console.error(err); // Logging the error details
    });
};

export default connectDB; // Exporting the connectDB function as default
