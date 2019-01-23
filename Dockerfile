FROM nginx:latest

RUN rm -r /etc/nginx/conf.d/default.conf
COPY ./services/movies/conf/movies.conf /etc/nginx/conf.d/.
