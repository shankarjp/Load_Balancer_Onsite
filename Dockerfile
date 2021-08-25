FROM ubuntu:latest

RUN apt update
RUN apt install apache2

RUN service apache2 restart
