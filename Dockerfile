FROM node
MAINTAINER Jarle Aase
WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .
ENV SERVICE_NAME unset
EXPOSE 8080
USER nobody
CMD [ "npm", "start" ]
