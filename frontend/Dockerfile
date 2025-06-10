FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./

RUN npm install

COPY . .

EXPOSE 3300

CMD ["npm", "run", "dev"]