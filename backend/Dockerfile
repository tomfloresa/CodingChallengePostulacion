FROM node:latest
WORKDIR /usr/src/app/backend

RUN npm install -g typescript
RUN npm install -g tslint

COPY ["package.json", "./"]
# No recuerdo cual es la forma correcta de esto :(
COPY [".env", "./"]

RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD npm start