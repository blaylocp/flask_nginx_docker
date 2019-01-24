FROM python:3.7.2-slim-stretch

EXPOSE 3031
WORKDIR /opt/app

# Is this needed? I do not this so
VOLUME /opt/app/src

RUN apt-get update && \
    apt-get install -y build-essential gcc

RUN apt-get install -y htop vim

COPY . .

RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt


CMD ["uwsgi", "-s", "0.0.0.0:3031", "--manage-script-name", "--mount", "/api/v1/movies=app:app"]
