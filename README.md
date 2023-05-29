# Product-Based-Full-Stack
**Product Management System**

The Product Management System is a web application that allows users to manage products, view product details, make purchases, and perform various user-related actions. The system consists of a frontend developed using ReactJS, a backend built with Node.js, and MongoDB as the database for data storage. The following sections provide an overview of the system's functionality and how to use it effectively.

## Features

1. **User Authentication**: Users can sign up, log in, and log out of the system. Authentication ensures secure access to user-specific features and data.

2. **Product Listing**: The system provides a comprehensive list of products available for purchase. Users can view the details and specifications of each product.

3. **Product Management**: Admin users have additional privileges to add new products to the system. They can specify product details such as name, description, price, and availability.

4. **Product Purchase**: Authenticated users can add desired products to their cart and proceed to checkout. The system securely handles the payment process and updates the user's purchase history.

5. **User Profile**: Users can access their profile, view personal information, and manage account settings. They can also add balance to their profile to facilitate smooth transactions.

## Installation and Setup

1. Ensure you have Node.js and MongoDB installed on your machine.

2. Clone the repository from GitHub.

   ```bash
   git clone [https://github.com/your-repo-url.git](https://github.com/Siva-Nandu-S/Product-Based-Full-Stack.git)
   ```

3. Install the frontend dependencies.

   ```bash
   cd frontend
   npm install
   ```

4. Install the backend dependencies.

   ```bash
   cd backend
   npm install
   ```

5. Start the MongoDB server.

   ```bash
   mongod
   ```

6. Configure the MongoDB connection settings in the backend's `.env` file.

   ```bash
   # backend/.env

   MONGODB_URI=<your-mongodb-connection-uri>
   ```

7. Start the backend server.

   ```bash
   cd backend
   npm start
   ```

8. Start the frontend development server.

   ```bash
   cd frontend
   npm start
   ```

9. Access the application in your web browser at `http://localhost:3000`.

## Usage

1. Sign up or log in using your credentials to access the system.

2. Browse the list of available products and view their details.

3. Add desired products to your cart.

4. Proceed to checkout and complete the payment process.

5. Visit your profile to manage your account settings, view purchase history, and add balance to your profile.

6. Admin users can add new products by accessing the admin panel and providing the necessary details.

7. Log out when finished using the system to ensure account security.

## Conclusion

The Product Management System provides a seamless experience for managing products, making purchases, and performing user-related actions. It leverages the power of ReactJS for a responsive and interactive frontend, Node.js for a robust backend, and MongoDB for efficient data storage. Enjoy using the system and feel free to explore and enhance its functionality as per your requirements.
