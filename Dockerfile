FROM ngix:1.15
COPY build/ /usr/share/nginx/html
EXPOSE 80
