# Practice-Authentication-and-Authorization-JWT-MongoDB-
## Project Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/qaisersofficial/Practice-Authentication-and-Authorization-JWT-MongoDB-.git
    cd Practice-Authentication-and-Authorization-JWT-MongoDB
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

## Project Structure

- `models/user.js`: Contains the user schema and model.
- `views/`: Contains the EJS templates for rendering the frontend.
- `public/`: Contains static files like CSS and JavaScript.

## API Endpoints

- `GET /`: Renders the index page.
- `POST /create`: Creates a new user and stores the hashed password.
- `GET /login`: Renders the login page.
- `POST /login`: Authenticates the user and sets a JWT cookie.
- `GET /logout`: Clears the JWT cookie and logs out the user.

## Dependencies

- `express`: Web framework for Node.js.
- `bcrypt`: Library to hash passwords.
- `jsonwebtoken`: Library to work with JSON Web Tokens.
- `cookie-parser`: Middleware to parse cookies.
- `ejs`: Template engine for rendering views.

## Usage

- To create a new user, send a POST request to `/create` with `username`, `password`, `email`, and `age`.
- To log in, send a POST request to `/login` with `email` and `password`.
- To log out, send a GET request to `/logout`.

## Learnings

- Setting up a basic Express server.
- Using bcrypt to hash passwords.
- Implementing JWT for authentication.
- Using EJS for server-side rendering.
- Managing cookies with `cookie-parser`.