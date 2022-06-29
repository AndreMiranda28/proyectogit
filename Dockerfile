# Declare the base image
FROM node:lts-alpine3.14
# Build step
# 1. copy package.json and package-lock.json to /app dir
RUN mkdir /app
COPY package*.json ./
# 2. Change working directory to newly created app dir
WORKDIR /app
# 3 . Install dependencies o you could use npm ci (clean install)
RUN npm  install 
# 4. Copy the source code to /app dir
COPY . .
# 5. Expose port 3000 on the container
EXPOSE 80
# 6. Run the app
CMD ["npm", "run", "dev"]