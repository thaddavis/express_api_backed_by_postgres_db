FROM node:14.20.0-alpine

# For debugging...
# RUN apk update && apk add postgresql

WORKDIR /work/

COPY ./src/package.json /work/package.json
RUN npm install

COPY ./src/ /work/

CMD node .