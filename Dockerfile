#Primera Etapa
FROM node:16-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

#Segunda Etapa
##FROM nginx:1.17.1-alpine AS prod-stage
FROM nginx:1.17.1-alpine
	#se pone la ruta del app construida
COPY --from=build-step /app/dist/connectService /usr/share/nginx/html
##EXPOSE 80
##CMD ["nginx","-g", "daemon off;"]