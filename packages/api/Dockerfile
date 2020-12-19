FROM alpine:latest

RUN apk --no-cache add nodejs

WORKDIR /home/backend
COPY package.json .
RUN apk add npm
RUN npm install
COPY . .

CMD ["npm", "run", "start:dev"]
