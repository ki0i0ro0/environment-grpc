FROM node:14-alpine
RUN npm install -g http-server
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD [ "http-server", "dist" ]
