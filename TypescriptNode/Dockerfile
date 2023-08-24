# Stage 1 - Base (resources required by all layers)
FROM node:20-alpine as base

WORKDIR /app
COPY package.json yarn.lock ./

# Stage 2 - Build (dependencies required by the typescript compiler)
FROM base as build

RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Stage 4 - Release (runs the compiled code)
FROM node:20-alpine as runner

WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
RUN yarn install --production --frozen-lockfile

CMD ["node", "dist/main.js"]

