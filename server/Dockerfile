FROM node:14-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9090

CMD [ "npm", "start" ]
