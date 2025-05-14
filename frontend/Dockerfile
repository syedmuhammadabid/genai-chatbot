FROM node:18

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend app
COPY . .

# Expose frontend port
EXPOSE 5001

# Run npm install again (optional redundancy for CI/CD)
RUN npm install

# Start React dev server
CMD ["npm", "start"]
