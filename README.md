
# Overview:
This repository contains the source code for a Real Estate Web Application developed using the MERN stack. The application features user authentication, CRUD operations, and is deployed for public access.

## Tools & Technologies Used
- **Backend:** Node.js, Express.js, MongoDB
- **Frontend:** React, Tailwind CSS
- **Authentication:** JWT Authentication, Google OAuth (Firebase)
- **State Management:** Redux Toolkit, Redux Persist
- **Deployment:** Render Platform

## Features
- **User Authentication:** Secure sign-up and sign-in using JWT and Google OAuth.
- **Property Listings:** Users can browse, list, and manage properties.
- **CRUD Operations:** Create, Read, Update, and Delete functionality for property listings.
- **User-Friendly Interface:** Intuitive and responsive design for seamless user experience.
- **Data Management:** Efficient handling and management of user and property data.

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB instance running

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/coderashu31/mern-estate.git
    ```
2. Navigate to the project directory:
    ```bash
    cd mern-estate
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add the necessary environment variables (example):
      ```
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      GOOGLE_CLIENT_ID=your_google_client_id
      GOOGLE_CLIENT_SECRET=your_google_client_secret
      ```

### Running the Application
1. Start the backend server:
    ```bash
    npm run server
    ```
2. Start the frontend development server:
    ```bash
    npm start
    ```

### Deployment
- The application is deployed on the Render Platform. For deployment instructions, refer to the Render documentation.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact
For any inquiries or issues, please contact [coderashu31](https://github.com/coderashu31).
