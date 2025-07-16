# Use a lightweight Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install 

# Copy the rest of the service source code
COPY . .

# Build the service (assumes NestJS compiles to /dist)
RUN npm run build

# Expose the service port (adjust if different)
EXPOSE 3001

# Start using the compiled JavaScript entry file directly
CMD ["node", "dist/auth-service/main.js"]
