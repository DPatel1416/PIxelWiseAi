import FileSaver from 'file-saver'; // Importing the FileSaver module for saving files
import { surpriseMePrompts } from '../constants/index.js'; // Importing the surpriseMePrompts array containing predefined prompts

// Function to retrieve a random prompt from the surpriseMePrompts array
export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length); // Generating a random index within the range of surpriseMePrompts array length
  const randomPrompt = surpriseMePrompts[randomIndex]; // Selecting a random prompt from the surpriseMePrompts array based on the random index

  // Check if the selected prompt is the same as the input prompt, if so, recursively call getRandomPrompt until a different prompt is selected
  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt; // Return the selected random prompt
}

// Function to download an image
export async function downloadImage(_id, photo) {
  // Utilizing the FileSaver module's saveAs function to save the specified image with a filename formatted as 'download-{_id}.jpg'
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
