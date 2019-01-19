FROM python:3.7.2-slim-stretch

EXPOSE 3031
VOLUME /opt/app/src

RUN apt-get update && \
    apt-get install -y build-essential uwsgi-plugin-python3 gcc python3 python-flask
#uwsgi-python3 uwsgi-plugin-python3 linux-headers
#  pip
#
#RUN apk add --no-cache gcc libc-dev linux-headers build-essential python
  
COPY . .
RUN pip3 install flask
RUN pip3 install -r requirements.txt


#CMD ["uwsgi", "-s", "0.0.0.0:3031", "--plugin", "python3", "--manage-script-name", "--mount", "/=app:app"]
#uwsgi --http-socket :9090 --plugin python --wsgi-file app.py --callabe app

#CMD [ "uwsgi", "--socket", "0.0.0.0:3031", \
#               "--uid", "uwsgi", \
#               "--plugins", "python3", \
#               "--protocol", "uwsgi", \
#               "--wsgi", "app" ]
#



#FROM python:3.7.2-alpine
#EXPOSE 8080

# set working dicrectory
#WORKDIR /opt/app

# add and install requirements
#COPY ./requirements.txt /opt/app/requirements.txt

# add app
#COPY ./src /opt/app/
#COPY ./conf/uwsgi.ini /opt/app/src

#RUN apk add --no-cache uwsgi-python3 gcc libc-dev linux-headers && \
#    pip install -r requirements.txt

#CMD python manage.py run -h 0.0.0.0
# ENTRYPOINT ["python"]
# CMD ["app.py"]
#CMD ["uwsgi", "--ini", "/opt/app/"]
