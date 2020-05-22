FROM jenkins:latest

# Create app directory
WORKDIR /usr/src/app
#RUN apt-get update -y && apt-get install -y  php 
RUN apt-get -y update && apt-get install -y \
    php7.0 \
    php7.0-pgsql \
    php-pear \
    php7.0-curl \
    php7.0-sqlite3 \
    php7.0-xml \
    php7.0-bcmath \
    php7.0-zip \
    php7.0-mbstring \
    php-xdebug \
    php-ast
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+) 

COPY . .

EXPOSE 8080
CMD [ "php", "index.php" ]
