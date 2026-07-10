
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const chatRoute = require('./routes/chat');

dotenv.config();
const app = express();

// Security headers
app.use(helmet());

// Restrict CORS to allowed origins
const allowedOrigins = (process.env.ALLOWED_ORIGINS || 'http://localhost:5001').split(',');
app.use(cors({ origin: allowedOrigins }));

// Rate limiting: max 20 requests per minute per IP
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: { error: 'Too many requests, please try again later.' },
});
app.use('/chat', limiter);

app.use(express.json({ limit: '1mb' }));

app.use('/chat', chatRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
