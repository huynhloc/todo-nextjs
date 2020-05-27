# version of node to use
FROM node:12.16.1

#set default API_ENDPOINT
ARG API_ENDPOINT=http://localhost:8000/graphql

ENV API_ENDPOINT=$API_ENDPOINT
# define working directory for docker
WORKDIR /usr/src/app
# copy all our source code into the working directory
COPY . .
# install npm dependencies and pm2
RUN yarn install
# build project
RUN yarn build
# install pm2
RUN yarn global add pm2
# expose port 3000 for our server to run on
EXPOSE 3000
# command to start our server
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]