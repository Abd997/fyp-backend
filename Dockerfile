FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm ci --only=production

EXPOSE 8080

CMD ["npm", "run", "start:prod"]