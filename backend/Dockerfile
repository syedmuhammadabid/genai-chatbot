FROM node:18

WORKDIR /app

# Copy only package files first (helps with caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Now copy the rest of the app
COPY . .

# Expose port
EXPOSE 5000

# Start server
CMD ["npm", "start"]
