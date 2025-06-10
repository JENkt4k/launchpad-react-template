FROM node:18-alpine

WORKDIR /app

# Add node_modules/.bin to PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./

RUN npm install

# Set correct permissions
RUN chown -R node:node /app
USER node

COPY --chown=node:node . .

EXPOSE 3300

CMD ["npm", "run", "dev", "--", "--host"]