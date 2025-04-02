# Use official Node.js image as base
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy everything to container
COPY . .

# Install dependencies and build app
RUN npm install
RUN npm run build

# Use a lightweight web server for the build
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
