FROM node:18.12.1

WORKDIR /usr/app

COPY package*.json ./
RUN npm install
RUN npm i express
RUN npm install prisma --save-dev
RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm", "start"]