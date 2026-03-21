# build stage
FROM node:current-alpine3.22 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci && npm cache clean --force

# copy rest of application code
COPY . .

RUN npm run build

# production stage
FROM node:current-alpine3.22 AS production

WORKDIR /app

# create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S reactapp -u 1001

# install the serve library
RUN npm install -g serve

# copy built application from the builder
COPY --from=builder --chown=reactapp:nodejs /app/build ./build

# switch to non root user
USER reactapp

EXPOSE 8080

# Health Check
# I'll implement this later

# Start Application
CMD ["serve", "-s", "build", "-l", "8080"]