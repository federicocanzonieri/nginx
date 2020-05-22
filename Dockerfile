FROM jenkins:latest

# Create app directory
WORKDIR /usr/src/app
RUN apt-get update && apt-get install php 
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY . .

EXPOSE 8080
CMD [ "php", "index.php" ]
