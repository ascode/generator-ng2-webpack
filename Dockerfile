FROM alpine:3.3
MAINTAINER NG2 Webpack Team <cfulnecky@gmail.com>

ENV HOME /home/yeoman

#Install NodeJs
RUN apk add --no-cache nodejs
# Update and install necessary dependencies
RUN apk update && apk add \
    bash \
    tar \
    git \
    zip \
    curl \
    wget \
    && rm -rf /var/cache/apk/*

RUN mkdir -p /home/yeoman
RUN addgroup yeoman && \
    adduser -h $HOME -D -s /bin/bash -G yeoman yeoman
#COPY package.json $HOME/package.json



# Install ng2-webpack via yo
WORKDIR $HOME
RUN npm install --global yo generator-ng2-webpack node-inspector

USER yeoman
RUN yo ng2-webpack --name="demo" --clientFolder="src"

# Install any dependencies missed by ng2-webpack generate
RUN npm install

# Expose volumes for long term data storage
VOLUME /

# Exposing node-inspector
EXPOSE 8123
EXPOSE 5858

# Exposing tcp port
EXPOSE 9000

CMD ["npm", "start"]
