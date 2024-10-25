# Trading Application

 This repository is the starting template for the course project. Project Title: Trading Application
 You can refer to the PDF of screenshots to view the website details.

..........Project Description........... This project is a Trading Application using the Model-View-Controller (MVC) architecture with Express.js. The application allows users to trade items, view trade details, manage their profiles, and more. Key features include user authentication, authorization, session management, and dynamic rendering of views using EJS templates. The backend is powered by MongoDB for efficient data storage and management.

............Table of Contents............. Project Description Features Technologies Used Installation Usage File Structure Model Layer View Layer Routes and Controllers Database Exports Contributions Reflections Features User Authentication and Authorization:

Sign up, log in, view profile, and log out functionalities. Passwords hashed using Bcrypt and stored securely. Email uniqueness validation. Trade Item Management:

Users can create, view, update, and delete trade items. Trade offer functionality with status updates (e.g., pending, offer made). Watchlist feature to save items for future reference. Session Management:

Persistent session storage to enhance user experience. Dynamic features based on user roles (e.g., different navigation menus). Input Validation and Error Handling:

Front-end input validation for sign-up and log-in forms. Server-side validation for data integrity. Enhanced error handling for various scenarios (e.g., sign-up errors, unauthorized requests). Dynamic Rendering with EJS:

Conversion of static HTML pages to EJS templates. Partial view templates for shared design elements. Additional view templates for about, contact, and error pages. Technologies Used Frontend: HTML5, CSS, JavaScript, EJS Backend: Node.js, Express.js Database: MongoDB Authentication: Bcrypt Validation: Mongoose, custom validation functions

..........Installation............. Clone the repository: bash Copy code git clone <repository_url> Navigate to the project directory: bash Copy code cd project-directory Install dependencies: bash Copy code npm install Start the application: bash Copy code npm start

.........Usage............. Sign Up: Create a new user account. Log In: Access your user account. View Profile: See your account details and trades. Log Out: Securely log out of your account. Create Trade: Add a new trade item. Update/Delete Trade: Modify or remove your trade items. Trade Offers: Make, accept, or reject trade offers. Watchlist: Save items to your watchlist for later. File Structure

project-directory/ |-- app.js |-- package.json |-- models/ | |-- user.js | |-- trade.js |-- views/ | |-- partials/ | |-- about.ejs | |-- contact.ejs | |-- error.ejs |-- routes/ | |-- tradeRoutes.js | |-- mainRoutes.js |-- controllers/ | |-- tradeController.js | |-- mainController.js |-- public/ | |-- css/ | |-- js/ Model Layer The Model layer handles data storage, fetching, modification, and validation. Data objects are defined in item.js using JavaScript arrays. The model provides functions to manage trade items, including CRUD operations.

View Layer The View layer renders data to users using EJS templates. Static HTML pages are converted to EJS, with partials for common elements. Additional templates include about.ejs, contact.ejs, and error.ejs.

Routes and Controllers Routes: Direct requests to appropriate controller functions. tradeRoutes.js: Handles item trading requests. mainRoutes.js: Manages general site navigation. Controllers: Implement logic for each route. tradeController.js: Manages trade-related actions. mainController.js: Oversees general site functionalities. Database Exports Two user accounts were created, with each account generating at least three trades. The users and trades collections are exported as JSON files using MongoDB Compass for future reference.

Contributions I was responsible for defining project requirements, designing the application architecture, implementing key features, and conducting testing and debugging. Specific contributions included modeling database schemas, developing backend APIs, integrating authentication mechanisms, and ensuring project coherence.

Reflections Knowledge and Skills Utilized: I applied web development technologies (HTML5, CSS, JavaScript, Node.js, Express.js, MongoDB) and security concepts (authentication, authorization, input validation) to achieve project objectives. Related Courses: Courses like Web Development Technologies, Database Systems, and Information Security and Privacy provided a solid foundation. Challenges: I faced technical complexities, time constraints, and communication issues, but overcame them through problem-solving and effective communication. Learning Objectives: I aimed to deepen my understanding of web development, enhance skills in building secure applications, and improve teamwork. Implementing advanced features significantly enriched my skill set.
