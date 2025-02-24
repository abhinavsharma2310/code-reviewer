# AI-Powered Code Reviewer

## Overview

AI-Powered Code Reviewer is a web service that leverages Google's Gemini AI to analyze and review code, providing feedback on quality, best practices, efficiency, error detection, scalability, readability, and maintainability. It serves as a virtual senior code reviewer, offering insights and improvements for developers.

## Features

- **Code Quality Analysis**: Ensures clean, maintainable, and well-structured code.
- **Best Practices Suggestions**: Recommends industry-standard coding techniques.
- **Performance Optimization**: Identifies areas to enhance execution time and resource utilization.
- **Bug & Security Detection**: Highlights potential security risks and logical flaws.
- **Scalability & Readability Improvements**: Ensures code is adaptable and easy to understand.
- **Constructive Feedback**: Provides explanations, alternative approaches, and best practices.

## Tech Stack

- **Backend**: Node.js, Express.js
- **AI Model**: Google Gemini AI (via `@google/generative-ai` package)
- **Middleware**: CORS, Express JSON parser
- **API Communication**: RESTful architecture

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps to Run the Project

1. **Clone the repository**

   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:

   ```sh
   GOOGLE_GEMINI_KEY=your_google_api_key
   ```

4. **Start the server**

   ```sh
   npm start
   ```

   The server will be running at `http://localhost:3000`

## API Endpoints

### 1. **Get Code Review**

- **Endpoint**: `POST /ai/get-review`
- **Request Body**:
  ```json
  {
    "code": "// Your code snippet here"
  }
  ```
- **Response Example**:
  ```json
  {
    "success": true,
    "response": "Detailed AI-generated review and suggestions"
  }
  ```

## Project Structure

```
📂 project-root
├── 📂 controllers
│   ├── ai.controller.js    # Handles AI code review requests
├── 📂 routes
│   ├── ai.routes.js        # Defines API routes
├── 📂 services
│   ├── ai.service.js       # AI communication logic
├── app.js                  # Express app setup
├── package.json            # Project dependencies
├── .env                    # Environment variables
```

## Contribution

Feel free to contribute by submitting pull requests or reporting issues. Ensure your code follows best practices and includes necessary documentation.

## License

This project is licensed under the MIT License.

## Contact

For any queries or suggestions, reach out to the project maintainers.

abhinavsharma23102003@gmail.com
