# syntax=docker/dockerfile:1

FROM node:latest
ENV NODE_ENV=production

WORKDIR /src

RUN git clone https://github.com/CodeByMini/codebymini

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --omit=dev

COPY . .

CMD [ "npm", "start" ]
