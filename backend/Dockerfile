FROM node:20-alpine

RUN apk --no-cache add --no-check-certificate ca-certificates
COPY ./ca-bundle.pem /usr/local/share/ca-certificates/my-corporate-ca.crt
RUN update-ca-certificates
RUN npm config set cafile /usr/local/share/ca-certificates/my-corporate-ca.crt
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000


CMD ["npm", "start"]
