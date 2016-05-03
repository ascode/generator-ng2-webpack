FROM mhart/alpine-node:6
MAINTAINER NG2 Webpack Team <cfulnecky@gmail.com>

ENV HOME /home/yeoman

# Update and install necessary dependencies
RUN apk update && apk add \
    bash \
    make \
    gcc \
    g++ \
    python \
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

RUN npm install --global yo

USER yeoman

RUN npm install generator-ng2-webpack

RUN yo ng2-webpack --name="demo" --clientFolder="src"

# Install any dependencies missed by ng2-webpack generate
RUN npm install

# Expose volumes for long term data storage
VOLUME /

# Exposing tcp port
EXPOSE 9000

CMD ["npm", "start"]
