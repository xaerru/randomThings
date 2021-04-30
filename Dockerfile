FROM node:latest

COPY . .

RUN npm install -g yarn

RUN yarn

RUN yarn build

EXPOSE 3000

CMD yarn start
