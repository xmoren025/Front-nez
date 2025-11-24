# Dockerfile for Next.js app
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --legacy-peer-deps

# Copy all source code
COPY . .

# Build Next.js app
RUN npm run build

# Expose port 3000 (interno)
EXPOSE 3000

# Start Next.js app
CMD ["npm", "start"]
