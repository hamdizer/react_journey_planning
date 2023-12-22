# React TypeScript Stop Locations App

This React TypeScript web application allows users to search start/stop locations and view them in a list dropdown. The list dynamically updates based on the user's search input.

## Features

- **Search Input**: Users can type in the search input field to filter and find specific stop locations.
- **List Dropdown**: The application displays a dynamic list dropdown that updates in real-time as the user types.
- **TypeScript**: The project is built using TypeScript for enhanced type checking and developer experience.
- **Responsive Design**: The app is designed to work well on various screen sizes and devices.

## Technologies Used

- React
- TypeScript
- HTML
- Tailwindcss
- npm

# DECISION:
1. For environement variables, package dotenv-webpack 
2. For handling cors policy in frontend and not in backend ,proxy is needed meaning that the proxy server is the intermidiete between the React app and the api
3. For the map cart ,a static url is used because google map api keys need billing,this url is integrated inside an iframe

## Getting Started

1. Clone the repository:

   git clone https://github.com/hamdizer/test_react_journey_planning.git

2. Install dependencies:

   npm install

3. Start the development server:

   npm start

4. Open browser on http://localhost:3000



      