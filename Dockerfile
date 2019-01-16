FROM nginx:latest

COPY services/movies/conf/movies.conf /ect/nginx/conf.d/
