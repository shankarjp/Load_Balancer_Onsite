FROM ubuntu:latest

ENV TZ=Asia/Kolkata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt update
RUN apt install -y apache2

RUN service apache2 restart

COPY index.html /var/www/html/index.html
