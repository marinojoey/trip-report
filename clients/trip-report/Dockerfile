# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# First, install any dependencies.
# This layer will be cached, making future builds faster if package.json hasn't changed.
# Copy over package.json first to leverage Docker cache
COPY package*.json ./

RUN if [ -f "package-lock.json" ]; then npm ci; else npm install; fi

# Copy the current directory contents into the container at /app
COPY . .

# Build the application
RUN npm run build

# Run the application
CMD ["npm", "run", "dev"]

# Expose port 3000
EXPOSE 3000
