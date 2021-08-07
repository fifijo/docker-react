FROM node:16.6-alpine3.11
RUN mkdir -p /app
WORKDIR /app
COPY package.json yarn.* ./
RUN yarn install --frozen-lockfile
COPY . ./

EXPOSE 3000
CMD ["yarn", "start"]
