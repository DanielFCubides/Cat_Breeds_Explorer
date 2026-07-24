# syntax=docker/dockerfile:1

FROM node:22-slim AS build
WORKDIR /app

# Needed only behind corporate TLS-inspection proxies (e.g. Netskope). If this
# build fails to fetch dependencies, export your CA and place it here:
#   security find-certificate -a -p -c "ca.telesign.goskope.com" /Library/Keychains/System.keychain > frontend/certs/netskope-ca.pem
COPY certs/netskope-ca.pem /usr/local/share/ca-certificates/netskope-ca.crt
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/netskope-ca.crt

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
