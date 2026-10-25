ARG NODE_IMAGE=node:24.22.1-alpine3.24

# build stage
FROM ${NODE_IMAGE} AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci && npm cache clean --force

# copy rest of application code
COPY . .

RUN npm run build

# production stage
FROM ${NODE_IMAGE} AS production

WORKDIR /app

# create non-root user
RUN addgroup -g 1001 -S nodejs && adduser -S reactapp -u 1001

# install the serve library
RUN npm install -g serve

# copy built application from the builder
COPY --from=builder --chown=reactapp:nodejs /app/dist ./dist

# switch to non root user
USER reactapp

EXPOSE 9821

# Health Check
# I'll implement this later

# Start Application
CMD ["serve", "-s", "dist", "-l", "9821"]
