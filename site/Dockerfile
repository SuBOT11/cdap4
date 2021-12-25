FROM node:12.16.3
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json","package-lock.json*", "./"]
ENV PATH /usr/src/node_modules/.bin:$PATH
RUN npm install 
COPY . .
CMD ["nodemon","app"]