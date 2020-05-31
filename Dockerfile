FROM node:current-slim

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

EXPOSE 3000

ENV PORT 3000

COPY . .

CMD [ "yarn", "start" ]