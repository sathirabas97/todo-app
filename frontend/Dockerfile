FROM node:18.12.1-alpine3.17
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV API_URL = http://api.myapp.com/
EXPOSE 3000
CMD ["npm","start"]
