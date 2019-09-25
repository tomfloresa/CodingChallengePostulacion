FROM node:latest

WORKDIR /usr/src/app/frontend

COPY . .

ENV NODE_ENV=production
ENV PORT_WEB=4200
ENV API_MARVEL=http://localhost:3000

RUN npm install
RUN npm run config
RUN npm run build

EXPOSE 4200
CMD npm start

