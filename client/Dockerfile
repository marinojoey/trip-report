FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN if [ -f "package-lock.json" ]; then npm ci; else npm install; fi
COPY . .
RUN npm run build
CMD ["npm", "run", "dev"]
EXPOSE 3000
