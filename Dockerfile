FROM node:17.8.0-slim

WORKDIR /app

COPY ./package.json ./

RUN npm install

COPY . ./

RUN npm run build

ENV NODE_ENV=production

ENV PORT 3000
EXPOSE 3000

ENTRYPOINT npm run start
