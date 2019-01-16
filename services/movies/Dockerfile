FROM python:3.7.2-alpine as BASE
EXPOSE 8080

# set working dicrectory
WORKDIR /opt/app

# add and install requirements
COPY ./requirements.txt /opt/app/requirements.txt

# add app
COPY ./src /opt/app/
COPY ./conf/uwsgi.ini /opt/app/src

RUN apk add --no-cache uwsgi-python3 && \
    pip install -r requirements.txt

#CMD python manage.py run -h 0.0.0.0
# ENTRYPOINT ["python"]
# CMD ["app.py"]
CMD ["uwsgi", "--ini", "/opt/app/"]
