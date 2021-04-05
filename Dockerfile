# Dockerfile

# base image
FROM node:latest

# copy all the files
COPY . .

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start