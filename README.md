🟢 **Hosted Application**: https://nasa-api-react-application.netlify.app

🟡 To download and install all the packages required for the application, run '`npm install`' command in the root directory.

🟠 Create a `.env` file in the root directory and add all the neccessary environment variables (*NASA API Key, Google Maps JavaScript API Key, Firebase API Key and IDs*).
- VITE_NASA_API_KEY = 
- VITE_FIREBASE_API_KEY = 
- VITE_FIREBASE_MessagingSenderId = 
- VITE_FIREBASE_APP_ID = 
- VITE_GOOGLE_MAPS_API = 

🟡 Use `npm run dev` command to run the web application. *Usually it will run on localhost's port 5173.*

🟡 All the tests can be run by `npm test` command. 
- For a specific test, use `npm test {component_name}.test.jsx` command by replacing '{component_name}' with relevant component name. [*Home, EPIC, MarsRoverPhotos, NaturalEventsTracker, SignIn, SignUp*]

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
