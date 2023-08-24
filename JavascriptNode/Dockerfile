# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container
# This ignores files listed in .dockerignore, such as the node_modules folder
COPY . .

# Set our env
ENV NODE_ENV production

# Install the app dependencies
RUN yarn install --production

# Make port 3000 available to the outside
EXPOSE 3000

# Define the command to run the app
CMD yarn start