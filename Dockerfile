# Build
FROM node:lts-alpine as build
RUN mkdir /home/node/app
WORKDIR /home/node/app
ENV PATH /home/node/app/node_modules/.bin:$PATH
COPY package*.json /home/node/app/
RUN npm install
COPY . /home/node/app/
RUN npm run generate

# Host
FROM nginx:stable-alpine
COPY --from=build /home/node/app/dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]