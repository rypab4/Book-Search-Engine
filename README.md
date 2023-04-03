# Book-Search-Engine

## Description
Using a fully functioning Google Books API search engine built with a RESTful API, was refractored with GraphQL API built with Apollow Server.  The application is built using the MERN stack with a React front end, MongoDB database, Node.js, Express.js and API and was already set up to allow the users to save book searches to the back end.


## Table of Contents
* [Links](#links)

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Code](#code)

* [Tests](#tests)

* [Questions](#questions)

## Links

GitHub URL:  https://github.com/rypab4/Book-Search-Engine
Deployed URL: https://booksearchengine040123.herokuapp.com/

## Installations 

To install necessary dependencies, run the following command if running from github and on local:

```
npm install
    "apollo-server-express": "^3.12.0",
    "dotenv": "^16.0.3",
    "if-env": "^1.0.4",
    "jsonwebtoken": "^9.0.0",
    "bcrypt": "^5.0.0",
    "express": "^4.17.1",
    "graphql": "^16.6.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.9.2",
    "@apollo/client": "^3.7.11",
    "@apollo/react-hooks": "^4.0.0",
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "apollo-boost": "^0.4.9",
    "bootstrap": "^4.4.1",
    "dotenv": "^16.0.3",
    "graphql": "^15.8.0",
    "graphql-tag": "^2.12.6",
    "jwt-decode": "^3.1.2",
    "react": "^17.0.1",
    "react-bootstrap": "^1.0.1",
    "react-dom": "^17.0.1",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.1",
    "web-vitals": "^0.2.4"


```


## Usage

1.  If running using local server with the github repo, npm run develop on the root of the project.  Otherwise go to https://booksearchengine040123.herokuapp.com/

2.  You can search a book without logging in but you can not save the book.  
![alt text](/assets/Google-Book-Search_home.png)
 
3.  If you don't have an account, click sign up and fill out your username, email and password.
![alt text](/assets/sign-up.png)

4. Once logged in, search a book and you have the option of saving books.  The login/ signup link will change to logout.
![alt text](/assets/logged-in.png)

5.  After clicking on the Save the Book button, you can see your saved book when you click on "See Your Books".  On the bottom of the information, you can delete the book.  
![alt text](/assets/Saved_Book.png).  

## License
    
none


## Questions
If you have any questions about the repo, open an issue or contact me directly at rypab4@gmail.com.  You can find my work at https://www.github.com/rypab4.