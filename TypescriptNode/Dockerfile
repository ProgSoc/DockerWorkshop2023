# Stage 1 - Base (resources required by all layers)
FROM node:20-alpine as base

WORKDIR /app
COPY package.json yarn.lock ./

# Stage 2 - Build (dependencies required by the typescript compiler)
FROM base as build

RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
RUN yarn install --production --frozen-lockfile

# Stage 4 - Release (runs the compiled code)
FROM base as runner

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

CMD ["node", "dist/main.js"]

