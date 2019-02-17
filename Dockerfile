FROM nginx:1.14.0-alpine

COPY cakebuild/artifacts/build /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf