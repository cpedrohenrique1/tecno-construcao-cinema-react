FROM node:22.15-alpine
WORKDIR /app
COPY . /app
EXPOSE 5173
RUN npm install
CMD ["npm run dev", "-- --host"]