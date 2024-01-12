# File Management Application with ReactJS

## Objective:

Develop a file management application using ReactJS that addresses the specified requirements. The application aims to provide an intuitive and responsive user interface for viewing, uploading, and managing files, incorporating features such as a horizontal scrollbar, scrollable cards, attachment modal, and file upload with database integration.

Live URL: https://task-management59.netlify.app/

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Credits](#credits)

## Features:

### Part 1

1. **Single Page View with Horizontal Scrollbar:**

   - The application presents a single-page view with a horizontal scrollbar, ensuring a seamless browsing experience.

2. **Scrollable Cards:**
   - Cards within the page are scrollable according to their parent cards, allowing users to navigate through content efficiently.

### Part 2

3. **Attachment Modal with JavaScript:**

   - Implement a modal system triggered by selecting an attachment. JavaScript is used to create a modal for a detailed view of the selected attachment.

4. **Multiple Attachments Upload:**
   - Users can upload multiple attachments, and a list view displays the original filenames along with their extension names.

### Part 3

5. **API for File Upload and Counting:**
   - Develop an API using NodeJS(express) to handle file uploads and store them in the database(mongoDB).
   - Implement functionality to count and display the number of attachments, as shown in the provided example.

## Technologies Used

- **ReactJS**: JavaScript library for building user interfaces.
- **JavaScript**: Programming language for client-side scripting and interaction.
- **TailwindCss**: Design ui Using TailwindCSS
- **NodeJS(express)**: Backend technologies for API development and database integration.
- **MongoDB**: Using mongoDB database for storing files

## File Structure

```plaintext
Task-Management-App/
│
├── public/
│ ├── ... # Public assets and files
│
├── src/
│ ├── components/
│ │ ├── Files/
│ │ │ ├── FilesModal.jsx # Component for handling files modal
│ │ │
│ │ ├── Tasks/
│ │ │ ├── TaskCard.jsx # Component for task cards
│ │ │
│ ├── pages/
│ │ ├── Tasks/
│ │ │ ├── Tasks.jsx # Page for managing tasks
│ │ │
│ ├── App.jsx # Main application component
│ ├── index.css # Styles for the app
│ ├── main.jsx # Entry point
│
├── index.html # Main HTML file
├── package-lock.json # Dependency lock file
├── package.json # Project configuration and dependencies
├── README.md # Project documentation
└── ... # Other directories and files
```

## Usage:

- Clone or download this repository.
- Navigate to the project directory.
- Run `npm install` to install necessary dependencies.
- Run `npm run dev` to start the development server.
- Access the application via your web browser.

## API Integration:

For backend API integration,NodeJS. Refer to the backend documentation for setting up the API server, handling file uploads, and counting attachments.

- Server side GitHub: https://github.com/aothymoon59/task-management-backend
- Live api link: https://task-management-server-27qj.onrender.com/
- Postman documentation: https://documenter.getpostman.com/view/29000250/2s9YsMBC4h

## Credits

Special thanks to the creators and maintainers of the technologies used in this project:

- ReactJS: A fundamental library for building user interfaces.
- JavaScript: Programming language for client-side scripting.
- TailwindCss: Design ui Using TailwindCSS
- NodeJS(express): Backend technologies for API development.
- MongoDB: Using mongoDB database for storing files
