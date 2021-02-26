FROM node:14.16-alpine

COPY package.json .
RUN yarn install

COPY . .

CMD yarn start-production
