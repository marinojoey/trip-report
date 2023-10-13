# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json before other files
# Utilizes Docker cache to save re-installing dependencies if unchanged
COPY package*.json ./

# Install any needed packages
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run next.js dev command to start your app in development mode
CMD [ "npm", "run", "dev" ]
