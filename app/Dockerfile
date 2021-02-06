FROM node:15.8.0-alpine3.10
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
EXPOSE 3000
CMD ["npm", "run", "start"]
