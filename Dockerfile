# Use the official Node.js 18 image as a base image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the working directory
COPY . .

# Build the application for production
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 3000

# Define the command to run the application.  Use 'serve' for production builds.
CMD ["npm", "run", "start"]
