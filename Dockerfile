FROM node:12-alpine

# Set a working directory
WORKDIR /app

COPY package.json /app 
COPY yarn.lock /app
RUN yarn install 

USER node

CMD [ "yarn", "start" ]
