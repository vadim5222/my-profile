FROM node:24

WORKDIR /app

COPY package*.json ./
RUN npm install 
RUN npm ci

COPY . . 

RUN npm run build

EXPOSE 3000

CMD [ "sh", "-c", "npx prisma generate && npx prisma migrate deploy && npx prisma db seed && node dist/src/main.js" ]