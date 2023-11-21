FROM node:21-bookworm-slim

# Path: /app
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

ENV TOKEN=
ENV DATABASE_URL=

CMD ["npm", "run", "start"]