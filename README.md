# Express.js Banking Application

This is a simple banking application built with Express.js, MongoDB, and EJS templating. The application allows users to register, log in, and perform various banking operations such as deposits, withdrawals, and password recovery.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Routes](#routes)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up your environment variables. Create a `.env` file in the root directory and add the following:
    ```env
    MONGO_URL=your-mongodb-connection-string
    PORT=3000
    ```

4. Start the application:
    ```sh
    npm start
    ```

## Usage

Once the application is running, you can access it at `http://localhost:3000`. The following routes are available:

## Routes

- `GET /` - Renders the home page.
- `POST /registration` - Handles user registration.
- `POST /submit` - Validates and submits registration forms.
- `POST /accountInfo` - Checks user credentials and retrieves account information.
- `POST /depositform` - Handles deposit form submissions.
- `POST /depositvalidation` - Validates deposit forms.
- `POST /withdrawForm` - Handles withdrawal form submissions.
- `POST /withdrawValidation` - Validates withdrawal forms.
- `POST /recoverPassword` - Handles password recovery requests.
- `POST /passwordValidation` - Validates password recovery forms.

## Environment Variables

The application requires the following environment variables:

- `MONGO_URL`: The connection string for your MongoDB database.
- `PORT`: The port on which the application will run (default is 3000).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
