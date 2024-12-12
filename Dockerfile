# Stage 1: Install dependencies
FROM node:22-alpine as installer
WORKDIR /app

# Copy dependency files and install dependencies
COPY package.json ./
RUN yarn

# Stage 2: Build the application
FROM node:22-alpine as builder
WORKDIR /app

# Copy installed dependencies and app source code
COPY --from=installer /app/node_modules ./node_modules
COPY . .

# Build the Next.js application
RUN yarn build

# Stage 3: Production-ready image
FROM node:22-alpine as production
ENV NODE_ENV=production
WORKDIR /app

# Copy the build output and necessary files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

# Use Next.js's built-in start script for production
CMD ["yarn", "start"]

# For convenience:
# docker build -t norwin/biabovag:local .
# docker run --env-file .env -p 3000:3000 --network="host" norwin/biabovag:local
# docker push norwin/biabovag:local
# kubectl -n divotion set image deployment/biabovag biabovag=norwin/biabovag:local
# kubectl -n divotion rollout restart deployment biabovag
