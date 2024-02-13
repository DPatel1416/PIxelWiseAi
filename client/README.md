# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


- Welcome to PixelWise AI
    PixelWise AI is a web application that leverages the power of DALL-E AI to generate imaginative and visually stunning images. 
    Users can create posts with prompts, and the application generates images based on those prompts using DALL-E.

- Features
    Generate images based on user prompts.
    Share created images with the community.
    Browse through a collection of generated images.

- Technologies Used
    Frontend: React.js, Tailwind CSS
    Backend: Node.js, Express.js
    Database: MongoDB
    Image Processing: OpenAI DALL-E
    Cloud Storage: Cloudinary

- Installation
    Clone the repository:

bash
Copy code
git clone https://github.com/DPatel1416/pixelwise-ai.git
Navigate to the project directory:

-- For Frontend Environment --

1. npm create vite@latest ./      
2. npm install -D tailwindcss postcss autoprefixer                    
3. npx tailwindcss init -p   
4. npm install file-saver 
5. npm install react-router-dom    
6. npm run dev


-- For backend Environment --
create server folder in main project folder and {cd server}
Install dependencies for the backend:
1. npm init -y   
2. npm install cloudinary cors dotenv express mongoose nodemon openai
3. npm run dev

Create a .env file in the backend directory and add the following environment variables:

1. MONGODB_URL = "API KEY"
2. OPENAI_API_KEY = "API KEY"
3. CLOUDINARY_CLOUD_NAME = "Cloudinary_Name"
4. CLOUDINARY_API_KEY = "API KEY"
5. CLOUDINARY_API_SECRET = "Cloudinary_Secret"


Open your browser and navigate to http://localhost:3000 to access the application.