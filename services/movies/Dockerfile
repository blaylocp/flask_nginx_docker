FROM python:3.7.2-slim-stretch

EXPOSE 3031
VOLUME /opt/app/src

RUN apt-get update && \
    apt-get install -y build-essential libssl-dev gcc g++ make curl

RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash 

#RUN curl -sL https://deb.nodesource.com/setup_10.x
#> setup_10.x \
#    chmod +x setup_10.x && sh setup_10.x


#RUN apt-get install -y htop


COPY . .

RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt


CMD ["uwsgi", "-s", "0.0.0.0:3031", "--manage-script-name", "--mount", "/api/v1/movies=app:app"]
