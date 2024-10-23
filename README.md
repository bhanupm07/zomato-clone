# 🍽️ Zomato Clone

A full-stack Zomato clone built using the MERN stack that allows users to explore a curated list of restaurants and manage their profiles. This project focuses on a responsive user interface and seamless functionality across both mobile and desktop views.

## 🌐 Live Demo

Explore the live demo here: [Zomato Clone](https://zomato-clone-ruby-eight.vercel.app/)

## 📂 Project Overview

The Zomato Clone provides users with the ability to explore various restaurants dynamically pulled from a data source, manage their profile information, and view restaurant details. This project emphasizes **full-stack development**, integrating a responsive frontend with a robust backend.

### Key Features

- **Explore Page**: Displays a list of restaurants.
- **Profile Page**: Users can log in and update their profile details.
- **Responsive Design**: Fully optimized for mobile and desktop views.
- **Secure Backend**: With robust handling of data using MongoDB and Mongoose.

## 🛠️ Tech Stack

### Frontend:
- **React**: For building the UI components.
- **Redux**: For state management.
- **TailwindCSS & ChakraUI**: For creating a responsive and sleek UI.

### Backend:
- **Node.js**: Backend framework.
- **Express.js**: Web framework for Node.js.
- **MongoDB & Mongoose**: NoSQL database for storing restaurant and user data.

### Extras:
- **Cloudinary**: For hosting images efficiently.

## 🚀 How to Run Locally

1. **Clone the repository**:
    ```bash
    git clone https://github.com/bhanupm07/zomato-clone.git
    cd zomato-clone
    ```

2. **Install dependencies**:
    - For the backend (in the root directory):
      ```bash
      npm install
      ```
    - For the frontend (navigate to `client` folder):
      ```bash
      cd client
      npm install
      ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the project and add the following:
   ```bash
   MONGO_URI=<your_mongo_db_connection_string>
   CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUDINARY_API_KEY=<your_cloudinary_api_key>
   CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>

4. Run the project:
   - For the backend (in the root directory):
     ```bash 
     npm run server
     ```
   - For the frontend (in the client folder):
     ```bash
     npm start
     ```

## 🤝 Contributions

Contributions, issues, and feature requests are welcome!
