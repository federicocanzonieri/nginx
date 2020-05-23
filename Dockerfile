FROM jenkins
#RUN apt-get update &&  apt-get install php -y 

#FROM selenium/standalone-chrome-debug:latest
USER root
RUN  apt-get update

RUN apt-get install sudo 

RUN sudo apt-get update && sudo  apt-get install php -y 

#entry point diverso?
CMD [ "php", "-v"]
#CMD ["php", "-v"]
