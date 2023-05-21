# OTP Verification System

This project is a simple OTP (One-Time Password) Verification system built with Node.js, Express, and MongoDB. Users can request an OTP, which is then emailed to them. Users can then use the OTP to log in. The system uses JWT tokens for authentication after login.

## Features

- OTP Generation and email delivery
- Login with OTP
- OTPs are valid for 5 minutes
- OTPs cannot be reused
- Users are blocked for 1 hour after 5 consecutive wrong OTPs
- There should be a minimum 1 min gap between two OTP generation requests

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installing

1. Clone the repository:

```bash
git clone https://github.com/yourusername/otp-verification.git
```

2. Install dependencies:

Navigate to the project directory and run:

```bash
npm install
```

3. Setup environment variables:

Create a .env file in your project root and add the following:

```.env
EMAIL_SERVICE_USER=<your-email-address>
EMAIL_SERVICE_PASS=<your-email-password>
SECRET_KEY=<your-secret-key-for-jwt>
DB_CONNECTION_STRING=<your-mongo-db-connection-string>
```

4. Run the server:

```bash
npm start
```

The server will run on port 5000.

## Testing

Postman or CURL can be used for testing the API endpoints.

1. To generate an OTP:

POST request to `http://localhost:5000/generate-otp` with request body:

```json
{
  "email": "<your-email>"
}
```

An OTP will be sent to the provided email.

2. To login:

POST request to `http://localhost:5000/login` with request body:

```json
{
  "email": "<your-email>",
  "OTP": "<your-OTP>"
}
```

If the OTP is correct, a JWT token will be returned.

## Live curl Endpoints

create otp

```bash
curl --location --request POST 'https://nodejs-email-auth.vercel.app/auth/generate-otp' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "<user-email>"
}'
```

login

```bash
curl --location --request POST 'https://nodejs-email-auth.vercel.app/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "<user-email>",
    "OTP": ""<user-otp>""
}'
```

## Contributing

If you want to contribute to this project, you're always welcome! You can create a pull request or issue, and i will take a look at it.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
