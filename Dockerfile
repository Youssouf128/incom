# Dockerfile pour la Solution 2

# Étape 1 : build + export (ne change pas)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Étape 2 : Nginx pour fichiers statiques (avec notre configuration)
FROM nginx:alpine

# Copier notre configuration Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers du site exportés
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]