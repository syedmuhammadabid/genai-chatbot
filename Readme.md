# GenAI Chatbot

A full-stack AI chatbot powered by OpenAI's ChatGPT API with a React frontend and Express.js backend.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js / Express.js
- **AI**: OpenAI ChatGPT API (gpt-3.5-turbo)
- **Containerization**: Docker & Docker Compose
- **Process Manager**: PM2

## Features

- Interactive chatbot powered by OpenAI's ChatGPT API
- Seamless integration between frontend and backend
- Fully containerized setup for easy deployment
- Security hardened with Helmet, CORS restrictions, rate limiting, and input validation

## Project Structure

```
genai-chatbot/
├── backend/
│   ├── index.js          # Express server with security middleware
│   ├── routes/
│   │   └── chat.js       # Chat endpoint with input validation
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js        # Chat UI component
│   │   └── index.js
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
├── ecosystem.config.js    # PM2 configuration
└── package.json           # Root orchestration scripts
```

## Prerequisites

- Node.js 18+ (for local development)
- Docker & Docker Compose (for containerized deployment)
- OpenAI API key

## Getting Started

### Local Development

1. Clone the repository:
    ```bash
    git clone https://github.com/<your-username>/genai-chatbot.git
    cd genai-chatbot
    ```

2. Install dependencies:
    ```bash
    npm run install
    ```

3. Create a `.env` file in the `backend/` directory:
    ```env
    OPENAI_API_KEY=your_openai_api_key
    ALLOWED_ORIGINS=http://localhost:5001
    PORT=5000
    ```

4. Start the app with PM2:
    ```bash
    npm start
    ```

5. Access the application:
    - Frontend: http://localhost:5001
    - Backend: http://localhost:5000

### Docker Deployment

1. Set your OpenAI API key as an environment variable:
    ```bash
    export OPENAI_API_KEY=your_openai_api_key
    ```

2. Build and run the containers:
    ```bash
    docker-compose up --build
    ```

## Environment Variables

| Variable | Location | Description | Default |
|----------|----------|-------------|---------|
| `OPENAI_API_KEY` | Backend | Your OpenAI API key | — |
| `PORT` | Backend | Server port | `5000` |
| `ALLOWED_ORIGINS` | Backend | Comma-separated list of allowed CORS origins | `http://localhost:5001` |
| `REACT_APP_API_URL` | Frontend (build-time) | Backend API base URL | `http://localhost:5000` |

## Security

This project implements the following security measures:

- **Helmet** — Sets secure HTTP headers (CSP, X-Content-Type-Options, etc.)
- **CORS Restriction** — Only whitelisted origins can access the API
- **Rate Limiting** — 20 requests per minute per IP to prevent abuse
- **Input Validation** — Messages are validated for type and length (max 2000 chars)
- **Body Size Limit** — JSON payloads capped at 1MB

## License

This project is licensed under the MIT License.