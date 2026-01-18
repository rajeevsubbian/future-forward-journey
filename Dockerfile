FROM nginx:1.29.4-alpine-slim
COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf