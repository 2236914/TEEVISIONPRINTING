# nginx/Dockerfile
FROM nginx:1.23.3-alpine

COPY nginx.conf /etc/nginx/nginx.conf

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories && \
    apk update && \
    apk add --no-cache openssl

RUN mkdir -p /scripts
COPY initializeSSL.sh /scripts
WORKDIR /scripts
RUN chmod +x initializeSSL.sh
RUN ./initializeSSL.sh

EXPOSE 80
EXPOSE 443