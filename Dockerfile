# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --only=production

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN npm run build

# Expose port 3000 (Next.js default)
EXPOSE 8000

# Start the Next.js app
CMD ["npm", "run", "start"]
